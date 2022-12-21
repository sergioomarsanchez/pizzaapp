import style from '../../styles/Order.module.css'
import Image from 'next/legacy/image'
import axios from 'axios'

function Order({order}) {
    const status = order.status
    const statusClass =(index)=>{
        if(index-status<1) return style.done
        if(index-status===1) return style.inProgress
        if(index-status>1) return style.undone
    }
    return (
    <div className={style.container}>

        <div className={style.left}>
            <div className={style.row}>
            <table className={style.table}>
                <tbody>
                <tr className={style.trTitle}>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                </tr>
                    <tr>
                    <td>
                      <span className={style.id}>{order._id}</span>
                    </td>
                    <td>
                      <span className={style.customer}>{order.customer}</span>
                    </td>
                    <td>
                      <span className={style.address}>{order.address}</span>
                    </td>
                    <td>
                      <span className={style.total}>${order.total}</span>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className={style.row}>
            <div className={statusClass(0)}>
                <img id={style.paidIcon} alt='' src='https://media1.giphy.com/media/URd2XgYe4nfFrXUGzw/giphy.gif?cid=790b761176bf20294325c04b4b045d6253dfed92bd2dd2a9&rid=giphy.gif&ct=s' width={60} height={60} />
                <span>Payment</span>
                <div className={style.checkedIcon}>
                    <Image src='/img/checked.png' alt='' width={20} height={20}/>
                </div>
            </div>
            <div className={statusClass(1)}>
                <img id={style.paidIcon} alt='' src='https://media2.giphy.com/media/RJJFPT9x8kGroF1dyf/200.gif?cid=95b279448b253e07ed5bef4992231e51178a2a1750bba749&rid=200.gif&ct=s' width={60} height={60} />
                <span>Preparing</span>
                <div className={style.checkedIcon}>
                    <Image src='/img/checked.png' alt='' width={20} height={20}/>
                </div>
            </div>
            <div className={statusClass(2)}>
                <img id={style.paidIcon} alt='' src='https://media4.giphy.com/media/cmCHuk53AiTmOwBXlw/giphy.gif?cid=790b761175f09e4d90a9d68895973029d786b75a91b4a71a&rid=giphy.gif&ct=g' width={60} height={60} />
                <span>Delivering</span>
                <div className={style.checkedIcon}>
                    <Image src='/img/checked.png' alt='' width={20} height={20}/>
                </div>
            </div>
            <div className={statusClass(3)}>
                <img id={style.paidIcon} alt='' src='https://media3.giphy.com/media/MbL94cbxbHYkElvKBs/giphy.gif?cid=790b7611aa14e4d49330db3339bfec7310ef8128bce47f00&rid=giphy.gif&ct=s' width={60} height={60} />
                <span>Delivered</span>
                <div className={style.checkedIcon}>
                    <Image src='/img/checked.png' alt='' width={20} height={20}/>
                </div>
            </div>
            </div>

        </div>
        <div className={style.right}>
        <div className={style.wrapper}>
            <h2 className={style.title}>ORDER TOTAL</h2>
            <div className={style.totalText}>
                <b className={style.totalTextTitle}>Subtotal: </b>${order.total}
            </div>
            <div className={style.totalText}>
                <b className={style.totalTextTitle}>Discount: </b>$0
            </div>
            <div className={style.totalText}>
                <b className={style.totalTextTitle}>Total: </b>${order.total}
            </div>
                <button disabled className={style.button}>{order.method===0? 'PAYMENT ON DELIVERY' : 'PAID!' }</button>
          </div>
        </div>
    </div>
  )
}


export const getServerSideProps = async ({params})=>{
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`)
    return {
        props:{
        order: res.data
      }
    }
  }

export default Order