import React from 'react';
import './App.css';
import Header from './header/Header'
import Footer from './footer/Footer'
import Pages from './Pages';

function App() {
    return (
      <div className="main_wrap">
        <Header />  
        <Pages />
        <Footer />
       
      </div>
  

      
    );
}

export default App;