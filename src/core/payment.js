import React from 'react'
import Base from './Base';
import { cartEmpty } from './helper/cartHelper'

const payment = () => {
    return (
    <Base titel='Payment successfull' description='Your t-shirts are on the way'>
        {cartEmpty(() => {})}
        <h1>Thank you so much for shopping</h1>
    </Base>
  )
}

export default payment;