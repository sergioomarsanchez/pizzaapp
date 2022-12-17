import dbConnect from '../../../util/mongo'
import Order from '../../../models/Order'


export default async function handler(req, res) {
    const { method, query:{id} }  = req

    await dbConnect()

    if(method==='GET'){
          res.status(200).json({ name: 'John Doe' })
    }
    if (method==='PUT') {
        
    }
    if (method==='DELETE') {
        
    }
  
  }