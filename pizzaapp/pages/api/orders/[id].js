import dbConnect from '../../../util/mongo'
import Order from '../../../models/Order'


export default async function handler(req, res) {
    const { method, query:{id}, cookies }  = req

    const token = cookies.token

    await dbConnect()

    if(method==='GET'){
          try {
               const order = await Order.findById(id)
                res.status(200).json(order)
              } catch (error) {
                res.status(500).json(error.response.data)
              }
    }
    if (method==='PUT') {
      if(!token || token !== process.env.TOKEN){
        return res.status(401).json('Not authenticated')
    }
      try {
          const order = await Order.findByIdAndUpdate(id, req.body, {
            new: true,
            })
          res.status(200).json(order)
        } catch (error) {
           res.status(500).json(error.response.data)
        }
    }
    if (method==='DELETE') {
        
    }
  
  }