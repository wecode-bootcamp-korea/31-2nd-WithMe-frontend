import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Mypage from './pages/Mypage/Mypage';
import Product from './pages/ProductList/Product/Product';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Productlist from './pages/ProductList/ProductList';
import Search from './pages/Search/Search';
import KakaoRedirectHandler from './pages/Login/KakaoRedirectHandler';
import About from './pages/About/About';
import HostRouter from './pages/Host/HostRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/places/placelist" element={<Productlist />} />
        <Route path="/places/placeinformation/:id" element={<Product />} />
        <Route path="/host/*" element={<HostRouter />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage/*" element={<Mypage />} />
        <Route path="/users/signin" element={<KakaoRedirectHandler />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
