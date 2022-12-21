import style from '../../styles/Admin.module.css'
import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import axios from 'axios'

function Index({ orders, products }) {
    const [pizzaList, setpizzaList] = useState(products)
    const [orderList, setOrderList] = useState(orders)

   async function  handleDelete(id){
        try {
            const res = await axios.delete('http://localhost:3000/api/products'+id)
            setpizzaList(pizzaList.filter((pizza)=> pizza._id!==id))
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
                <tbody>
                    <tr className={style.trTitle}>
                        <td>{order._id.slice(0,5)}...</td>
                        <td>{order.customer}</td>
                        <td>${order.total}</td>
                        <td>{order.method===0?'Cash':'Paypal'}</td>
                        <td>{order.status===0?'Preparing':order.status===1?'Delivering':'Delivered'}</td>
                        <td>
                            <button className={style.nextStage}>Next Stage</button>
                        </td>
                    </tr>
                </tbody>

                )})}
            </table>
        </div>
    </div>
  )
}

export const getServerSideProps = async ()=>{
    const productRes = await axios.get('http://localhost:3000/api/products')
    const orderRes = await axios.get('http://localhost:3000/api/orders')

    return{
        props:{
            orders: orderRes.data,
            products: productRes.data
        }
    }
}

export default Index