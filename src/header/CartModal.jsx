import React, { useEffect, useState } from "react";
import { data } from "../products/constant";
import './header.css';

export function CartModal(props) {
    const { cartData, addDeleteCallback } = props;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(0);
        Object.values(cartData).map((value) => {
            return setTotal((previous) => previous + value.amount)
        })
    }, [cartData]);

const handleCheckout = () =>{
    const payload = {
        total : total,
        items: {...cartData}
    }
    console.log(payload);
    window.alert('Order Placed');
}
    return (
        <div className="cart-modal-wrapper" >
            {total > 0 ?
                (<>
                    <div className="modal-wrapper">
                        <div className="list-wrapper">

                            {Object.keys(cartData).map((key, index) => {
                                if (cartData[key]?.amount) {
                                    return (
                                        <>
                                            {<div className="item-wrapper" key={index}>
                                                <div>{cartData[key]?.name}</div>
                                                <div>{cartData[key]?.amount}</div>
                                            </div>}
                                        </>
                                    );
                                }
                            })}
                            <div className="item-wrapper total">
                                <div>Total</div>
                                <div>{total}</div>
                            </div>
                        </div>

                    </div>
                    <div className="checkout-warpper">
                        <div className="button" onClick={handleCheckout}>
                            Checkout
                        </div>
                    </div>
                </>) : (
                    <div className="empty-cart"> No Item in Cart</div>
                )
            }
        </div >
    );
}