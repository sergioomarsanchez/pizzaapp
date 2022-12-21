import React, { useState } from 'react'
import style from '../styles/OrderDetail.module.css'

function OrderDetail({ createOrder, total, setCash }) {
    const [customer, setCustomer] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [instructions, setInstructions] = useState('')
    
    function handleClick(){
        createOrder({ customer, address, total, method: 0 })
    }
    function handleX(){
        setCash(false)
        setAddress('')
        setCustomer('')
        setInstructions('')
        setPhone('')
    }

  return (
    <div className={style.container}>
        <div className={style.wrapper}>
            <button className={style.x} onClick={handleX}>X</button>
            <h1 className={style.title}>You will pay $12 after delivery</h1>
            <div className={style.item}>
                <label className={style.label}>Name and Surname</label>
                <input placeholder='John Doe' type='text' className={style.input} onChange={(e)=>setCustomer(e.target.value)}/>
            </div>
            <div className={style.item}>
                <label className={style.label}>Address</label>
                <input placeholder='St. EEUU 1305' type='text' className={style.input} onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div className={style.item}>
                <label className={style.label}>Phone Number</label>
                <input placeholder='+1-353-543-234' type='text' className={style.input} onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div className={style.item}>
                <label className={style.label}>Indications</label>
                <textarea rows={10} placeholder='First black door on the left' type='text' className={style.textarea} onChange={(e)=>setInstructions(e.target.value)}/>
            </div>
            <button className={style.button} onClick={handleClick}>
            Confirm Order
            </button>
        </div>
    </div>
  )
}

export default OrderDetail