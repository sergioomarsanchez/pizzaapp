import React from 'react'
import style from '../styles/Home.module.css'
import Link from 'next/link'

function LogInButton() {
  return (
    <Link Link href='/admin/login' passHref>
    <button className={style.LogInButton}>
        Log in as Admin
    </button>
    </Link>
  )
}

export default LogInButton