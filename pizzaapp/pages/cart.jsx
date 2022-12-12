import Image from 'next/legacy/image'
import style from '../styles/Cart.module.css'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart)
  return (
    <div className={style.container}>
        <div className={style.left}>
            <table className={style.table}>
                <tbody>
                <tr className={style.trTitle}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                {cart.products?.map((product)=>(
                    <tr className={style.tr} key={product._id}>
                    <td>
                      <div className={style.imgContainer}>
                        <Image src={product.img} alt=''  layout='fill' objectFit='cover'/>
                      </div>
                    </td>
                    <td>
                      <span className={style.name}>{product.title}</span>
                    </td>
                    <td>
                      <span className={style.extras}>
                        {product.extras?.map((extra)=>(
                          <span key={extra._id}>{extra.text}, </span>
                        ))}
                      </span>
                    </td>
                    <td>
                      <span className={style.price}>${product.price}</span>
                    </td>
                    <td>
                      <span className={style.quantity}>{product.quantity}</span>
                    </td>
                    <td>
                      <span className={style.total}>${product.price * product.quantity}</span>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
        <div className={style.right}>
          <div className={style.wrapper}>
            <h2 className={style.title}>CART TOTAL</h2>
            <div className={style.totalText}>
                <b className={style.totalTextTitle}>Subtotal: </b>${cart.total}
            </div>
            <div className={style.totalText}>
                <b className={style.totalTextTitle}>Discount: </b>$0.00
            </div>
            <div className={style.totalText}>
                <b className={style.totalTextTitle}>Total: </b>${cart.total}
            </div>
            <button className={style.button}>CHECKOUT NOW!</button>
          </div>
        </div>
    </div>
  )
}

export default Cart