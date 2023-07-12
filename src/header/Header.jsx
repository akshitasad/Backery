import React, { useEffect, useState } from "react";
import './header.css';
import cartIcon from '../images/cart.svg'
import { CartModal } from "./CartModal";


export function Header(props) {
    const {
        tab,
        setTab,
        mainRef,
        aboutRef,
        productRef,
        contactRef,
        handleScroll,
        cartData,
        addDeleteCallback,

    } = props;
    const [showModal, setShowModal] = useState(false);



    return (
        <div className="wrapper">
            <div className='container'>
                <div className='tab-wrapper'>
                    <div
                        className={`header-pill ${tab === 'home' ? 'selected-tab' : 'tab'}`}
                        onClick={() => {
                            setTab('home');
                            handleScroll(mainRef.current)
                        }}

                    >
                        Home
                    </div>
                    <div
                        className={`header-pill ${tab === 'about' ? 'selected-tab' : 'tab'}`}
                        onClick={() => {
                            setTab('about');
                            handleScroll(aboutRef.current)
                        }}
                    >
                        About
                    </div>
                    <div
                        className={`header-pill ${tab === 'product' ? 'selected-tab' : 'tab'}`}
                        onClick={() => {
                            setTab('product');
                            handleScroll(productRef.current)
                        }}
                    >
                        Product
                    </div>
                    {/* <div
                        className={`header-pill ${tab === 'footer' ? 'selected-tab' : 'tab'}`}
                        onClick={() => {
                            setTab('footer');
                            handleScroll(contactRef.current)
                        }}
                    >
                        Contact Us
                    </div> */}
                    <div className="cart" onClick={() => { setShowModal((prev) => !prev) }}>
                        <img className="icon" src={cartIcon} />
                    </div>
                    {/* {counter > 0 && <div className="cart-counter">{counter}</div>} */}
                    {showModal &&

                        <CartModal
                            cartData={cartData}
                            addDeleteCallback={addDeleteCallback}
                        />

                    }
                </div>
            </div>

        </div>
    )
}