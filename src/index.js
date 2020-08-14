import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Adminindex from './admin/index'
import * as serviceWorker from './serviceWorker';
function Admin(props){
    console.log(window.location.href.split('/')[3])
    const adminIt = window.location.href.split('/')[3]
    if(adminIt === 'admin'){
        return (
            <Adminindex />
        )
       
    }
    return(
        <App />
    )
        
}
ReactDOM.render( 
    
       
    <Admin adminIt={true} />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();