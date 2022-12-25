import React from 'react'
import style from '../styles/Add.module.css'

function AddButton({ setClose }) {
  return (
    <button onClick={()=>setClose(false)} className={style.mainAddButton}>
        Add New Pizza
    </button>
  )
}

export default AddButton