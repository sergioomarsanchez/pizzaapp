import Image from 'next/legacy/image'
import style from '../styles/Cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import axios from 'axios'
import { useRouter } from 'next/router'
import { reset } from '../redux/cartSlice'
import OrderDetail from '../component/OrderDetail';
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";


function Cart() {
  const cart = useSelector(state=>state.cart)
  const [open, setOpen] = useState(false)
  const [cash, setCash] = useState(false)
  const amount = cart.total;
  const currency = "USD";
  const dispatch = useDispatch()
  const router = useRouter()

  const createOrder = async (data)=>{
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data)
      res.status === 201 && router.push('/orders/'+res.data._id)
      dispatch(reset())
    } catch (error) {
      console.log(error)
    }
  }
  console.log(open)

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    
    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]); 


    return (<>
      { (showSpinner && isPending) && <div className="spinner" /> }
      <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
              return actions.order
                  .create({
                      purchase_units: [
                          {
                              amount: {
                                  currency_code: currency,
                                  value: amount,
                              },
                          },
                      ],
                  })
                  .then((orderId) => {
                      // Your code here after create the order
                      return orderId;
                  });
          }}
          onApprove={function (data, actions) {
              return actions.order.capture().then(function (details) {
                const shipping = details.purchase_units[0].shipping;
                createOrder({
                  customer: shipping.name.full_name,
                  address:shipping.address.address_line_1,
                  total:cart.total,
                  method:1,
                  })
              });
          }}
      />
  </>
);
}



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
                <b className={style.totalTextTitle}>Discount: </b>$0
            </div>
            <div className={style.totalText}>
                <b className={style.totalTextTitle}>Total: </b>${cart.total}
            </div>
            {open?(
              <div className={style.paymentMethods}>
                <button onClick={()=>setCash(true)} className={style.button}>CASH ON DELIVERY</button>
                <div>
            <PayPalScriptProvider
                options={{
                    "client-id": "AYT9QD38lZm9-lh1S9vCEDjH-mMC7TQ6VrdI1ADsJeOb4vOUH4kwuEIGDdYdabJWu44O0C5wrIsxgwjz",
                    components: "buttons",
                    currency: "USD"
                    }}
                    > 
                <ButtonWrapper
                            currency={currency}
                            showSpinner={false}
                        />
            </PayPalScriptProvider>
                </div>
              </div>
              ):(
                <button className={style.button} onClick={()=>setOpen(true)}>CHECKOUT NOW!</button>
                
            )}
          </div>
        </div>
        {cash && (
          <OrderDetail total={cart.total} createOrder={createOrder} setCash={setCash}/>
        )}
    </div>
  )
}


export default Cart