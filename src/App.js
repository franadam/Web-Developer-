import React from 'react';
import './scss/App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';

const App = () => {
  return (
    <div className="app">
      <div className="app">
        <Header />
        <Navbar />
        <Container />
        <Footer />
      </div>
    </div>
  );
};

export default App;
