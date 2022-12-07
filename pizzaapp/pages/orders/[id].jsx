import React from 'react'
import Image from 'next/legacy/image'
import style from '../../styles/Order.module.css'

function Order() {
const status = 0

    const statusClass = (index)=>{
        if(index-status <1) return style.done
        if(index-status ===1) return style.inProgress
        if(index-status >1) return style.undone
    }
      return (
    <div className={style.container}>
        <div className={style.left}>
            <div className={style.row}>
            <table className={style.table}>
                <tbody>
                <tr className={style.tr}>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                </tr>
                <tr className={style.tr}>
                    <td>
                      <span className={style.id}>2345256547543224</span>
                    </td>
                    <td>
                      <span className={style.name}>
                        Jhon Doe
                      </span>
                    </td>
                    <td>
                      <span className={style.address}>Elton st. 3954 CBA</span>
                    </td>
                    <td>
                      <span className={style.total}>$79.80</span>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className={style.row}>
                <div id={style.paidIcon} className={statusClass(0)}>
                    <Image id={style.paidIcon} src='/img/paid.png' width={40} height={40} alt=''/>
                    <span>Payment</span>
                    <div className={style.checkedIcon}>
                        <Image className={style.checked} src='/img/check.png' width={30} height={30} alt=''/>
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <img src='https://media.baamboozle.com/uploads/images/678978/1649076229_534643_gif-url.gif' width={50} height={50} alt=''/>
                    <span>Preparing</span>
                    <div className={style.checkedIcon}>
                        <Image className={style.checked} src='/img/check.png' width={30} height={30} alt=''/>
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <img className={style.bike} src='https://cdn.dribbble.com/users/88251/screenshots/2225084/media/c178b538706a55bd06cb69377b974366.gif' width={50} height={45} alt=''/>
                    <span>On the way</span>
                    <div className={style.checkedIcon}>
                        <Image className={style.checked} src='/img/check.png' width={30} height={30} alt=''/>
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src='/img/delivered.png' width={50} height={50} alt=''/>
                    <span>Delivered</span>
                    <div className={style.checkedIcon}>
                        <Image className={style.checked} src='/img/check.png' width={30} height={30} alt=''/>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.right}>
            <div className={style.wrapper}>
                <h2 className={style.title}>CART TOTAL</h2>
                <div className={style.totalText}>
                    <b className={style.totalTextTitle}>Subtotal: </b>$79.60
                </div>
                <div className={style.totalText}>
                    <b className={style.totalTextTitle}>Discount: </b>$0.00
                </div>
                <div className={style.totalText}>
                    <b className={style.totalTextTitle}>Total: </b>$79.60
                </div>
                <button disabled className={style.button}>PAID!</button>
            </div>
        </div>
    </div>
  )
}

export default Order