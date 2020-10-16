import React from 'react';
import './media.css';
import './App.css';

import Header from './header/Header'
import Footer from './footer/Footer'
import Pages from './Pages';

function App() {
    return (
      <div className="main_wrap">
        <Header />
          <div className="wrap">
          
          <Pages />
          </div>   
        
        <Footer />
       
      </div>
  

      
    );
}

export default App;