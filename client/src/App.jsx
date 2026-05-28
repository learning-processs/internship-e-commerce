import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Category from './pages/Category'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'
import SearchPage from './pages/SearchPage'

const App = () => {

 const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // CRUCIAL: Calculate total count of items in cart
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);


  return (
    <div className="">
      <Navbar cartCount={totalCartItems}/>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} /> {/* 2. Dynamic Route */}
        <Route path="/category/:categoryName" element={<Category addToCart={addToCart} />} /> {/* 2. Added Route */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} /> 
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} /> {/* 2. Added Route */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* 2. Added Route */}
        <Route path="/search" element={<SearchPage addToCart={addToCart} />} /> {/* 2. Added Route */}
      </Routes>
      <ScrollToTop/>
      <Footer/>
    </div>
    
  )
}

export default App
