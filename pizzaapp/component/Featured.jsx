import React, { useState, useEffect } from 'react'
import Image from "next/legacy/image";
import styles from '../styles/Featured.module.css'

function Featured() {
    const [index, setIndex] = useState(0)
 
    const handleArrow = (direction)=>{

        if(direction==='l'){
            setIndex(index!==0?index-1:2)
        }
        if(direction==='r'){
            setIndex(index!==2?index+1:0)
        }
    }
 useEffect(() => {
    const interval = setInterval(function test() {
        handleArrow('r')
      return test;
    }, 5000);
    return () => clearInterval(interval);
  });
 
    const images = [
        '/img/featured.png',
        '/img/featured2.png',
        '/img/featured3.png'
    ]
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} onClick={()=>handleArrow('l')}>
        <Image className={styles.arrowL} src='/img/arrowl.png' alt='' layout='fill' style={{left:0}}/>
        </div>
        <div className={styles.wrapper} style={{transform: `translateX(${-100*index}VW)`}}>
                {
                    images?.map((img, i)=>(
                    <div className={styles.imgContainer}  key={i} >
                <Image src={img} alt='' layout='fill' objectFit='contain'/>
                    </div>
                ))
                }
        </div>
        <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow('r')}>
        <Image className={styles.arrowR} src='/img/arrowr.png' alt='' layout='fill'/>
        </div>
    </div>
  )
}

export default Featured