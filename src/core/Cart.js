import React,{ useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from './Card';
import { loadCart } from "./helper/cartHelper";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Cart = () => {

    const [products, setProducts] = useState([]);

    const [reload, setReload] = useState(false)

    useEffect(() => {
        setProducts(loadCart())
    }, [reload])

    const checkProduct = () => {
        if(products === undefined){
            return (
                <h1 className="text-white text-center">Nothing to show here</h1>
            );
        }
        else{
            return (
                <>
                <div className="row justify-content-center" >{loadAllProducts()}</div>
                <div className="mt-6 text-center">{loadCheckout()}</div>
                </>
            )
        }
    }

    const loadAllProducts = () => {
        return (
                <div className="col-6">
                    <h2>Your products</h2>
                    {products.map((product,index) => (
                        <Card 
                            key={index} 
                            product={product} 
                            addtoCart={false} 
                            removeFromCart={true}
                            setReload={setReload}
                            reload={reload} 
                        />
                    ))}
                    <br/>
                </div>
        )
    }

    // const payment = () => {
    //     <Redirect to='/cart/payment'/>
    // }

    const loadCheckout = () => {
        return (
            <div>
                {/* <button onClick={payment()} className="btn btn-success">Click here to payment</button> */}
                <Link className="btn btn-primary btn-lg" to='/cart/payment'>Click here to payment</Link>
            </div>
        )
    }

  return (
    <Base titel="Cart Page" description="Ready to checkout">
      <div className="container">
        {checkProduct()}
      </div>
    </Base>
  );
}

export default Cart;