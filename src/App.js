import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Navbar from './Navbar/NavbarLoggedIn';
import Footer from './Footer/Footer';
//import Banner from './Banner/Banner';
import Stories from './Stories/Stories';

import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';

const App = () => {
  return (
  <Router>
    <Navbar />
    <Stories />
    <Footer />
  </Router>
  );
}

export default App;
