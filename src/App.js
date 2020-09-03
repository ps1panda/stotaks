import React from 'react';
import './App.css';
import Header from './header/Header'
import Footer from './footer/Footer'
import Pages from './Pages';
import Bread from './components/bread';

function App() {
    return (
      <div className="main_wrap">
        <Header />
          <div className="wrap">
          <Bread />
          <Pages />
          </div>   
        
        <Footer />
       
      </div>
  

      
    );
}

export default App;