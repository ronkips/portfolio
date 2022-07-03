import React from 'react'
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Hello from '../Hello/Hello';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hello />
      <Footer />
    </div>
  )
}

export default Home

