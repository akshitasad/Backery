import React, { useState, useRef, useEffect } from "react";
import { Header } from "../header/Header";
import { About } from "../about/About";
import { Products } from '../products/Products';
import { data } from "../products/constant";
import './homePage.css';


export function HomePage() {

  const [tab, setTab] = useState('home');
  const mainRef = useRef(null); //represents main section
  const aboutRef = useRef(null); //represents about section
  const productRef = useRef(null); //represents products section
  const contactRef = useRef(null); //represents footer section
  const [cartData, setCartData] = useState({});



  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth"
    })
  }


  const addDeleteCallback = (item) => {
    const { id, action } = item;
    let amount = 0;
    let name=''
    data.map((dataItem) => {
      if(dataItem.id === id){
        amount = dataItem.price;
        name = dataItem.name;
      }
    })
    if (action) {
      if (!cartData.hasOwnProperty(id)) {
        setCartData({ ...cartData ,  [id]: {itemCount:1, amount:amount,name:name}});
      }
      else{
        const no = cartData[id].itemCount;
      setCartData( { ...cartData, [id]:{itemCount: no + 1,amount:amount*(no+1),name:name} });}
    }
    else {
      
      const no = cartData[id].itemCount;
      if (no > 0) { setCartData({ ...cartData , [id]: {itemCount:no - 1,amount:amount*(no-1),name:name }}); }
      else {
        setCartData(current => {
          // 👇️ remove the salary key from an object
          const {id, ...rest} = current;
    
          return rest;
        });
      }
    }
  }

  return (
    <div>
      <div id='home' className={`home`} ref={mainRef}>
        <Header
          tab={tab}
          setTab={setTab}
          mainRef={mainRef}
          aboutRef={aboutRef}
          productRef={productRef}
          contactRef={contactRef}
          handleScroll={handleScroll}
          cartData={cartData}
          addDeleteCallback={addDeleteCallback}
          
        />
        <img className="banner" src="https://themewagon.github.io/baker/img/carousel-1.jpg" />
      </div>
      <div id='about' className={`about`} ref={aboutRef}>
        <About />
      </div>
      <div id='product' className={`product`} ref={productRef}>
        <Products
          cartData={cartData}
          addDeleteCallback={addDeleteCallback}
        />
      </div>
      <div id='footer' className={`footer`} ref={contactRef}>

      </div>
    </div>
  )
}