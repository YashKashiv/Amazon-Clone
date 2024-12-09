import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Categories from './components/Categories.jsx';
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c9f5c5c4-61ee-4fe7-add9-9e1d3ec50fe9.jpg" alt="" />
      <Footer />
    </div>
  );
};

export default App;