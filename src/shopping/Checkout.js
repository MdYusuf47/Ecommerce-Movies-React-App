import React from 'react';
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from 'react-currency-format';
import Subtotal from './Subtotal';
function Checkout() {
    // const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg" alt="" className="checkout_ad" />
                {/* {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>you have no item in your basket.to bye one or ""Add to basket"next to the item</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout_title">Your Shopping Basket</h2>

                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )} */}
            </div>
            {/* {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )} */}
        </div>
    );
}

export default Checkout;
