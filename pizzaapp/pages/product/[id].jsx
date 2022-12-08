import Image from 'next/image'
import React, { useState } from 'react'
import style from '../../styles/Product.module.css'

function Product({pizza}) {
    const [size, setSize] = useState(0)

  return (
    <div className={style.container}>
        <div className={style.left}>
        <div className={style.imgContainer}>
        <Image src={pizza.img} objectFit='contain' alt='' layout='fill'/>
        </div>
        </div>
        <div className={style.right}>
            <h1 className={style.title}>{pizza.name}</h1>
            <span className={style.price}>${pizza.price[size]}</span>
            <p className={style.desc}>{pizza.desc}</p>
            <h3 className={style.choose}>Choose your size</h3>
            <div className={style.sizes}>
                <div className={style.size} onClick={()=>setSize(0)}>
                    <Image src='/img/size.png' layout='fill' alt=''/>
                    <span className={style.number}>Small</span>
                </div>
                <div className={style.size} onClick={()=>setSize(1)}>
                    <Image src='/img/size.png' layout='fill' alt=''/>
                    <span className={style.number}>Medium</span>
                </div>
                <div className={style.size} onClick={()=>setSize(2)}>
                    <Image src='/img/size.png' layout='fill' alt=''/>
                    <span className={style.number}>Large</span>
                </div>
            </div>
            <h3 className={style.choose}>Choose additional ingredients</h3>
            <div className={style.ingredients}>
                <div className={style.option}>
                    <input type='checkbox' id='double' name='double' className={style.checkbox}/>
                    <label htmlFor='double'>Double ingredients</label>
                </div>
                <div className={style.option}>
                    <input type='checkbox' id='cheese' name='cheese' className={style.checkbox}/>
                    <label htmlFor='cheese'>Extra Cheese</label>
                </div>
                <div className={style.option}>
                    <input type='checkbox' id='spicy' name='spicy' className={style.checkbox}/>
                    <label htmlFor='spicy'>Spicy Sauce</label>
                </div>
                <div className={style.option}>
                    <input type='checkbox' id='garlic' name='garlic' className={style.checkbox}/>
                    <label htmlFor='garlic'>Garlic Sauce</label>
                </div>
            </div>
            <div className={style.add}>
                <input type="number" defaultValue={1} className={style.quantity}/>
                <button className={style.button}>Add to Cart</button>

            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async ({params})=>{
    const res = await axios.get(`http://localhost:3000/api/products/${params}`)
    return {
        props:{
        pizzaList: res.data
      }
    }
  }

export default Product