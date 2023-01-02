import style from '../styles/Add.module.css'
import dbConnect from '../util/mongo'
import Product from '../models/Product'
import { useState } from 'react'
import axios from 'axios'
import { useRouter} from 'next/router'

function Add({ setClose }) {
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [prices, setPrices] = useState([])
    const [extraOptions, setextraOptions] = useState([])
    const [extra, setExtra] = useState(null)

    const router = useRouter()

    const changePrice = (e, index)=>{
        const currentPrices = prices
        currentPrices[index] = e.target.value
        setPrices(currentPrices)
    }

    function handleExtraInput(e){
        setExtra({...extra, [e.target.name]: e.target.value})
    }
    function handleExtra(e){
        setextraOptions(prev=>[...prev, extra])
    }

    async function handleCreate(){
        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset', 'uploads')
        try {
            const uploadRes = await axios.post('https://api.cloudinary.com/v1_1/deo5rvrpm/image/upload', data)
            const { url } = uploadRes.data
            const newProduct = {
                title,
                desc,
                prices,
                extraOptions,
                img: url,
            }
            dbConnect()
            await Product.create(newProduct)
            setClose(true)
            router.push('/admin')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className={style.container}>
    <div className={style.wrapper}>
        <button onClick={()=>setClose(true)} className={style.x}>X</button>
        <h1>Add a new Pizza</h1>
        <div className={style.item}>
            <label className={style.label}>Choos an image</label>
            <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
        </div>
        <div className={style.item}>
            <label className={style.label}>Title</label>
            <input type="text" placeholder='Pizza Name' className={style.input} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className={style.item}>
            <label className={style.label}>Description</label>
            <textarea type="text" rows={4} onChange={(e)=>setDesc(e.target.value)}/>
        </div>
        <div className={style.item}>
            <div className={style.priceContainer}>
            <label className={style.label}>Prices</label>
            <input type="number" className={`${style.input} ${style.inputSm}`} placeholder='Small' onChange={(e)=>changePrice(e,0)}/>
            <input type="number" className={`${style.input} ${style.inputSm}`}  placeholder='Medium' onChange={(e)=>changePrice(e,1)}/>
            <input type="number" className={`${style.input} ${style.inputSm}`}  placeholder='Large' onChange={(e)=>changePrice(e,2)}/>
            </div>
        </div>
        <div className={style.item}>
            <label className={style.label}>Extra</label>
            <div className={style.extra}>
            <input type="text" name='text' placeholder='Item' className={`${style.input} ${style.inputSm}`} onChange={handleExtraInput}/>
            <input type="number" name='price' placeholder='Price' className={`${style.input} ${style.inputSm}`} onChange={handleExtraInput}/>
            <button className={style.extraButton} onClick={handleExtra}>Add</button>
            </div>
            <div className={style.extraItems}>
                {extraOptions?.map(options=>(
                    <span key={options.text} className={style.extraItem}>{options.text} = ${options.price}</span>
                ))}
            </div>
        </div>
        <button className={style.addButton} onClick={handleCreate}>
            Create Pizza
        </button>
    </div>
    </div>
  )
}

export default Add