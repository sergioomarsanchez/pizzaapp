import React, { useState } from 'react'
import Image from "next/legacy/image";
import styles from '../styles/Featured.module.css'

function Featured() {
    const [index, setIndex] = useState(0)
    const images = [
        '/img/featured.png',
        '/img/featured2.png',
        '/img/featured3.png'
    ]
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer}>
        <Image className={styles.arrowL} src='/img/arrowl.png' alt='' layout='fill' style={{left:0}}/>
        </div>
        <div className={styles.wrapper}>
                {
                    images.map((img, i)=>(
                    <div className={styles.imgContainer}  key={i} >
                <Image src={img} alt='' layout='fill' objectFit='contain'/>
                    </div>
                ))
                }
        </div>
        <div className={styles.arrowContainer} style={{right:0}}>
        <Image className={styles.arrowR} src='/img/arrowr.png' alt='' layout='fill'/>
        </div>
    </div>
  )
}

export default Featured