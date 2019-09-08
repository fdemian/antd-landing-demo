import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';
import Stories from './Stories/Stories';

import 'antd/dist/antd.css';

const App = () => {
  return (
  <div>
    <Navbar />
    <Banner />
    <Stories />
    <Footer />
  </div>
  );
}

export default App;
