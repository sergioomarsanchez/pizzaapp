import Image from 'next/image'
import React, { useState } from 'react'
import style from '../../styles/Product.module.css'

function Product() {
    const [size, setSize] = useState(0)
    const pizza = {
        id:1,
        img:'/img/pizza.png',
        name: 'CAMPAGNOLA',
        price:[19.9, 23.9, 27.9],
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }

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

export default Product