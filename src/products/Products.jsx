import React, { useState } from "react";
import './product.css';
import { ProductCard } from "./ProductCard";
import { data } from "./constant";


export function Products(props) {
    const { cartData, addDeleteCallback } = props;



    return (
        <div className="product-wrapper">
            <div className="products-header">
                <h1>Explore The Categories Of Our Bakery Products</h1>
            </div>

            <div className="card-wrapper">
                {data.map((item, index) => {
                    return (
                        <ProductCard
                            item={item}
                            key={index}
                            cartData={cartData}
                            addDeleteCallback={addDeleteCallback}
                        />
                    )
                })}
            </div>
        </div>
    )
}