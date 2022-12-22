import style from '../../styles/Login.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'


function Login() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false)

    const router = useRouter()

    async function handleClick(){
        try {
                await axios.post('http://localhost:3000/api/login',{username, password})
                if(error)setError(false)
                router.push('/admin')
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

  return (
    <div className={style.container}>
        <div className={style.wrapper}>
            <h1>Admin Dashboard</h1>
            <input placeholder='User Name' type='text' className={style.input} onChange={(e)=>setUsername(e.target.value)}/>
            <input placeholder='Password' type='password' className={style.input} onChange={(e)=>setPassword(e.target.value)}/>
            <button className={style.button} onClick={handleClick}>Sing In</button>
            {error?<span className={style.error}>*Wrong Credentials!</span>:null}
        </div>
    </div>
  )
}

export default Login