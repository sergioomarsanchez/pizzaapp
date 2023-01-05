import Image from 'next/image'
import React from 'react'
import style from '../styles/Footer.module.css'
import { useRouter} from 'next/router'

function Footer() {
  const router = useRouter()
  function handleClick(){
    router.push('/')
  }

  return (
    <div className={style.container}>
     <div className={style.item}>
       <Image src='/img/bg.png' alt='' layout='fill'/>
     </div>
         <div onClick={()=>handleClick()} className={style.home}>
           Home
            <img className={style.homeButton} src='/img/home.png' alt=''/>
          </div>
     <div className={style.item}>
     <div className={style.card}>
       <h2 className={style.motto}>
         OH YES, WE DID THE SOS PIZZA, WELL BAKED SLICE OF PIZZA
       </h2>
     </div>
     <div className={style.card}>
       <h1 className={style.title}>FIND OUR RESTAURANTS</h1>
       <p className={style.text}>
         Amadeo 3943 #346.
         <br/>Córdoba, 5000
         <br/>(325) 121-4531
       </p>
       <p className={style.text}>
         Rivadavia 4783 #304.
         <br/>Córdoba, 5000
         <br/>(325) 121-4534
       </p>
       <p className={style.text}>
         López Obrador 1343 #342.
         <br/>Córdoba, 5000
         <br/>(325) 121-4533
       </p>
     </div>
     <div className={style.card}>
     <h1 className={style.title}>FIND OUR RESTAURANTS</h1>
      <p className={style.text}>
        MONDAY-FRIDAY
        <br/> 09:00 - 22:00
      </p>
      <p className={style.text}>
        SATURDAY-SUNDAY
        <br/>12:00 - 00:00
      </p>
     </div>
     </div>
    </div>
  )
}

export default Footer