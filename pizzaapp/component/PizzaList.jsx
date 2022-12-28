import React, { useState } from 'react'
import style from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'


function PizzaList({pizzaList}) {
  const [pizzaList, setPizzaList] = useState(pizzaList)
  return (
    <div className={style.container}>
        <h1 className={style.title}>The best Pizza in Town</h1>
        <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
         nisi ut aliquip ex ea commodo consequat.</p>
        <div className={style.wrapper}>
          {pizzaList?.map(pizza=>{
            return(<PizzaCard key={pizza._id} pizza={pizza}/>)
          })
          }

        </div>
    </div>
  )
}

export default PizzaList