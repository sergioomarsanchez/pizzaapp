import React from 'react'
import Image from 'next/image'
import styles from '../styles/Featured.module.css'

function Featured() {
    const images = [
        '/img/featured.png',
        '/img/featured2.png',
        '/img/featured3.png'
    ]
  return (
    <div className={styles.container}>
        <Image src='/img/arrowl.png' alt='' layout='fill'/>
        <div className={styles.wrapper}>
            <div className={styles.imgContainer}>
                {images.map((img, i)=>{
                    <Image key={i} src='/img/featured.png' alt='' layout='fill'/>
                })}
            </div>
        </div>
        <Image src='/img/arrowr.png' alt='' layout='fill'/>
        
    </div>
  )
}

export default Featured