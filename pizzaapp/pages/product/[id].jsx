import Image from 'next/image'
import React, { useState } from 'react'
import style from '../../styles/Product.module.css'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'
 
function Product({pizza}) {
    const [price, setPrice] = useState(pizza.prices[0])
    const [size, setSize] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [extras, setExtras] = useState([])
    const dispatch = useDispatch()
    const router = useRouter()
    const changePrice = (number) =>{
        setPrice((price+number))
    }

    const handleSize = (sizeIndex)=>{
        const difference = pizza.prices[sizeIndex] - pizza.prices[size];
        setSize(sizeIndex)
        changePrice(difference)
    }

    const handleChange=(e, option)=>{
        if(e.target.checked){
            changePrice(option.price)
            setExtras(prev=>[...prev, option])
        } else{
            changePrice(-option.price)
            setExtras(extras.filter(extra=>extra._id!==option._id))
        }
    }

    const handleClick = ()=>{
        dispatch(addProduct({...pizza, extras, price, quantity}))
        router.push('/cart')
    }

  return (
    <div className={style.container}>
        <div className={style.left}>
        <div className={style.imgContainer}>
        <Image src={pizza.img} objectFit='contain' alt='' layout='fill'/>
        </div>
        </div>
        <div className={style.right}>
            <h1 className={style.title}>{pizza.title}</h1>
            <span className={style.price}>${price}</span>
            <p className={style.desc}>{pizza.desc}</p>
            <h3 className={style.choose}>Choose your size</h3>
            <div className={style.sizes}>
                <div className={style.size} onClick={()=>handleSize(0)}>
                    <Image src='/img/size.png' layout='fill' alt=''/>
                    <span className={style.number}>Small</span>
                </div>
                <div className={style.size} onClick={()=>handleSize(1)}>
                    <Image src='/img/size.png' layout='fill' alt=''/>
                    <span className={style.number}>Medium</span>
                </div>
                <div className={style.size} onClick={()=>handleSize(2)}>
                    <Image src='/img/size.png' layout='fill' alt=''/>
                    <span className={style.number}>Large</span>
                </div>
            </div>
            <h3 className={style.choose}>Choose additional ingredients</h3>
            <div className={style.ingredients}>
                {pizza.extraOptions?.map((option)=>{
                    return(
                <div key={option._id} className={style.option}>
                    <input type='checkbox' id={option.text} name={option.text} className={style.checkbox} onChange={(e)=>handleChange(e, option)}/>
                    <label htmlFor={option.text} >{option.text}</label>
                </div>)
                })}
            </div>
            <div className={style.add}>
                <input onChange={(e)=>setQuantity(e.target.value)} type="number"  value={quantity} className={style.quantity}/>
                <button className={style.button} onClick={handleClick} >Add to Cart</button>

            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async ({params})=>{
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
    return {
        props:{
        pizza: res.data
      }
    }
  }

export default Product