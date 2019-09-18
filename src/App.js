import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/NavbarLoggedIn';
import Footer from './Footer/Footer';
//import Banner from './Banner/Banner';
import Topic from './Topic/Topic';

import 'antd/dist/antd.css';

const App = () => {
  return (
  <div>
    <Navbar />
    <Topic />
    <Footer />
  </div>
  );
}

export default App;
