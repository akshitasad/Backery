import React, { useEffect, useState } from "react";
import './product.css';


export function ProductCard(props) {
    const { item, cartData, addDeleteCallback } = props;


    return (
        <div className="card">
            <img src={item.imgUrl} className="card-img" />
            <div className="item-price">&#8377;{item.price}</div>
            <div className="card-content-wrapper">
                <div className="card-content">
                    <div className="title">{item.name}</div>
                    <div className="desc">{item.desc}</div>
                    <div className="total-no">
                        {cartData[item.id]?.itemCount > 0 && <div
                            className="counter"
                            onClick={() => {
                                
                                addDeleteCallback({ id: item.id, action: false })
                            }}>-</div>}
                        <div
                            className={cartData[item.id]?.itemCount ? "counter" : 'button-text'}
                            style={cartData[item.id]?.itemCount === 0 ? { cursor: 'pointer' } : { cursor: 'default' }}
                            onClick={() => {
                                
                                if (!cartData[item.id]?.itemCount) addDeleteCallback({ id: item.id, action: true })
                            }}> {cartData[item.id]?.itemCount > 0 ? cartData[item.id].itemCount : 'Add'}</div>
                        <div
                            className="counter"
                            onClick={() => {
                                
                                addDeleteCallback({ id: item.id, action: true })
                            }}>+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}