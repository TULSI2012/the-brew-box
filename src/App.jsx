import React from 'react'
import NavBar from '../src/Components/NavBar'
import BestSellers from './Components/BestSellers'
import Collections from './Components/Collections'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Newsletter from './Components/Newsletter'
import Offer from './Components/Offer'
import AllProducts from './Pages/AllProducts'
import CollectionPage from './Pages/CollectionPage'
import BestSellersPage from './Pages/BestSellersPage'
import { Routes, Route } from "react-router-dom"
import SingleProduct from './Pages/SingleProduct'
import { ShopContextProvider } from './context/shop-context'
import Cart from './Pages/Cart'

function App() {

  return (
    <div>
      <ShopContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Collections />
              <BestSellers />
              <Offer />
              <Newsletter />
            </> } 
          />
          <Route path="/products/:productId" element={<SingleProduct />}/>
          <Route path="/collections/:collection" element={<CollectionPage />}/>
          <Route path="/all" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/best-sellers" element={<BestSellersPage />} />
        </Routes>
        <Footer />
      </ShopContextProvider>
    </div>
  )
}

export default App
