import style from '../../styles/Admin.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

function Index({ orders, products }) {
    const [pizzaList, setpizzaList] = useState(products)
    const [orderList, setOrderList] = useState(orders)

    const router = useRouter()
   async function  handleDelete(id){

        try {
           
            const res = await axios.delete('https://pizzaapp-qxtve4bkw-sergioomarsanchez.vercel.app/api/products/' + id)
            setpizzaList(pizzaList.filter((pizza)=> pizza._id!==id))
        } catch (error) {
            console.log(error)
        }
    }

    async function handleStatus(id){

        const item = orderList.filter(order=>order._id===id)[0]
        const currentStatus = item.status

        try {
            const res = await axios.put('https://pizzaapp-tau.vercel.app/api/orders/' + id, { status:currentStatus + 1 }) 
            setOrderList([
                res.data,
                ...orderList.filter(order=>order._id!== id)
            ])
            router.push('/orders/'+id)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className={style.container}>
        <div className={style.item}>
            <h1 className={style.title}>Products</h1>
            <table className={style.table}>
                <tbody>
                    <tr className={style.trTitle}>
                        <th>Image</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                    {pizzaList?.map((pizza)=>{return(
                        <tbody key={pizza._id}>
                            <tr className={style.trTitle}>
                                <td>
                                    <Image src={pizza.img} width={50} height={50} objectFit='cover' alt=''/>
                                </td>
                                <td>{pizza._id.slice(0,5)}...</td>
                                <td>{pizza.title}</td>
                                <td>${pizza.prices[0]}</td>
                                <td>
                                    <button className={style.button}>Edit</button>
                                    <button className={style.button} onClick={()=>handleDelete(pizza._id)}>Delete</button>
                                    <Link href={`/product/${pizza._id}`} passHref>
                                    <button className={style.button}>Check pizza Detail</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>)
                    })}
            </table>
        </div>
        <div className={style.item}>
        <h1 className={style.title}>Orders</h1>
            <table className={style.table}>
                <tbody>
                    <tr className={style.trTitle}>
                        <th>Id</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                {orderList?.map((order)=>{return(
                <tbody key={order._id}>
                    <tr className={style.trTitle}>
                        <td>{order._id.slice(0,5)}...</td>
                        <td>{order.customer}</td>
                        <td>${order.total}</td>
                        <td>{order.method===0?<span>Cash</span>:<span>Paid</span>}</td>
                        <td>{order.status===0?'Preparing':order.status===1?'On the way':'Delivered'}</td>
                        <td>
                            <button disabled={order.status>1?true:false} onClick={()=>handleStatus(order._id)} className={style.nextStage}>Next Stage</button>
                            <Link href={`/orders/${order._id}`} passHref>
                            <button className={style.nextStage}>Check order Detail</button>
                            </Link>
                        </td>
                    </tr>
                </tbody>

                )})}
            </table>
        </div>
    </div>
  )
}

export const getServerSideProps = async (ctx)=>{
    const myCookie = ctx.req?.cookies || ''

    if(myCookie.token !== process.env.TOKEN){
        return{
            redirect:{
                destination:'admin/login',
                permanent: false,
            }
        }
    }
    const productRes = await axios.get('https://pizzaapp-tau.vercel.app/api/products')
    const orderRes = await axios.get('https://pizzaapp-tau.vercel.app/api/orders')

    return{
        props:{
            orders: orderRes.data,
            products: productRes.data
        }
    }
}

export default Index