import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {firebaseContext} from './context/firebaseContext'
import Context from './context/firebaseContext'
import firebase from './firebase/config'


ReactDOM.render(
<firebaseContext.Provider value={{firebase}} >
    <Context>
    <App />
    </Context>
</firebaseContext.Provider>
    ,document.getElementById('root'));
