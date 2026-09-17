import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";

function App() {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const addToCart = (product) => {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );
      alert(`${product.title}\nAdded to cart`);
      if (existingProduct) {
        const newQuantity = existingProduct.quantity + 1;

        return previousCart.map((item) =>
          item.id === product.id ? {
            ...item,
            quantity: item.quantity + 1
          }
            : item
        );
      }
      return [...previousCart, {
        ...product,
        quantity: 1
      }];
    });
  };


  const increaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity: item.quantity + 1
          }
          : item
      ));
  };

  const decreaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id ? {
            ...item,
            quantity: item.quantity - 1
          }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  const removeFromCart = (id) => {
    setCart((previousCart) =>
      previousCart.filter(
        (item) => item.id !== id
      )
    );
    alert("Product remove from cart!");
  };

  return (

    <>

      <Navbar cartCount={cart.length} />
      <Routes>

        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/shop" element={<Shop />} />  
        <Route path="/" element={<Shop addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />} />

      </Routes>
      <Footer />

    </>

  );
}

export default App;
