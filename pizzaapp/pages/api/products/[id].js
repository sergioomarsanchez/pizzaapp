import dbConnect from '../../../util/mongo'
import Product from '../../../models/Product'

export default async function handler(req, res){
    const { method, cookies, query:{id}} = req

    const token = cookies.token

    dbConnect()

    if(method==='GET'){
        try {
            const product = await Product.findById(id)
            res.status(200).json(product)
        }
        catch (error) {
            res.status(500).json(error.response.data) 
        }
     }
    if (method==='PUT') {
        if(!token || token !== process.env.TOKEN){
            return res.status(401).json('Not authenticated')
        }

        try {
            const product = await Product.create(req.body)
            res.status(201).json(product)
        } catch (error) {
            res.status(500).json(error.response.data)
        }
    }
    if (method==='DELETE') {
        if(!token || token !== process.env.TOKEN){
            return res.status(401).json('Not authenticated')
        }

        try {
            await Product.findByIdAndDelete(id)
            res.status(200).json('The product has been deleted')
        } catch (error) {
            res.status(500).json(error)
        }
    }
  }