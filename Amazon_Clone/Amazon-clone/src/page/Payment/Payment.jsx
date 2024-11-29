import React, { useContext, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import Classes from "./payment.module.css"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import { useElements, useStripe , CardElement} from '@stripe/react-stripe-js'
import CurrencyFormat from '../../Components/Product/CurrencyFormat/CurrencyFormat'

function Payment() {
  const [{basket,user},dispatch]=useContext(DataContext)
  const totalItem=basket?.reduce((amount,item)=>{
    return item.amount+amount
  },0)
   const total = basket.reduce((amount, item) => {
     return item.price * item.amount + amount;
   }, 0);
  const [carderror,setCarderror]=useState(null)
   const stripe= useStripe()
   const elements= useElements()
  const handlechange = (e) => {
    setCarderror(e?.error?.message || "");
  };

  return (
    <Layout>
      <br />
      <br />
      <div className={Classes.payment_header}>checkout({totalItem})items</div>
      <section className={Classes.payment}>
        <div className={Classes.flex}>
          <h3>Delivary Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago,IL</div>
          </div>
        </div>
        <hr />
        <div className={Classes.flex}>
          <h3>Review items and Delivary</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={Classes.flex}>
          <h3>Payment method</h3>
          <div className={Classes.payment_card_container}>
            <div className={Classes.payment_details}>
              <form action="">
                {carderror && (
                  <small style={{ color: "red" }}> {carderror}</small>
                )}
                <CardElement onChange={handlechange} />
              </form>
              <div className={Classes.payment_price}>
                <div>
                  <span style={{display:"flex", gap:"10px"}}>
                    <p>
                      Total Order | </p><CurrencyFormat amount={total} />
                    
                  </span>
                </div>
                <button>Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment
