import Image from "next/legacy/image";
import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useSelector } from 'react-redux'

function Navbar() {

    const quantity = useSelector(state=> state.cart.quantity)

  return (
  
        <div className={styles.container}>

            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src='/img/telephone.png' alt='' width='32' height='32'/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div> 
                    <div className={styles.text}>002 343 213</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href='/' passHref>
                    <li className={styles.listItem}>Homepage</li>
                    </Link>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src='/img/logo.png' alt='' width='200' height='100'/>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contacts</li>
                </ul>
            </div>
            <Link href='/cart' passHref >
                <div className={styles.item}>
                    <div className={styles.cart}>
                    <Image src='/img/cart.png' alt='' width='40' height='40'/>
                    <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>

        </div>

  )
}

export default Navbar