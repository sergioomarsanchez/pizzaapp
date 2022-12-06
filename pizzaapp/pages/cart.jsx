import Image from 'next/legacy/image'
import style from '../styles/Cart.module.css'

function Cart() {
  return (
    <div className={style.container}>
        <div className={style.left}>
            <table className={style.table}>
                <tbody>
                <tr className={style.tr}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr className={style.tr}>
                    <td>
                      <div className={style.imgContainer}>
                        <Image src='/img/pizza.png' alt=''  layout='fill' objectFit='cover'/>
                      </div>
                    </td>
                    <td>
                      <span className={style.name}>CORALZO</span>
                    </td>
                    <td>
                      <span className={style.extras}>
                        Double ingredients, spicy sauce
                      </span>
                    </td>
                    <td>
                      <span className={style.price}>$19.90</span>
                    </td>
                    <td>
                      <span className={style.quantity}>2</span>
                    </td>
                    <td>
                      <span className={style.total}>$39.80</span>
                    </td>
                </tr>
                <tr className={style.tr}>
                    <td>
                      <div className={style.imgContainer}>
                        <Image src='/img/pizza.png' alt=''  layout='fill' objectFit='cover'/>
                      </div>
                    </td>
                    <td>
                      <span className={style.name}>CORALZO</span>
                    </td>
                    <td>
                      <span className={style.extras}>
                        Double ingredients, spicy sauce
                      </span>
                    </td>
                    <td>
                      <span className={style.price}>$19.90</span>
                    </td>
                    <td>
                      <span className={style.quantity}>2</span>
                    </td>
                    <td>
                      <span className={style.total}>$39.80</span>
                    </td>
                </tr>
                </tbody>
            </table>
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
            <button className={style.button}>CHECKOUT NOW!</button>
          </div>
        </div>
    </div>
  )
}

export default Cart