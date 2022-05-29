import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Initialize Firebase
firebase.initializeApp(
  {
    apiKey: "AIzaSyDyrqQolmzA4sCkvlPJXXdhQisUUL26EPY",
    authDomain: "freex-e983a.firebaseapp.com",
    projectId: "freex-e983a",
    storageBucket: "freex-e983a.appspot.com",
    messagingSenderId: "561091024495",
    appId: "1:561091024495:web:fbe2759361dde714349f9a",
    measurementId: "G-8595E9L5KR",
    databaseURL: "https://freex-e983a-default-rtdb.europe-west1.firebasedatabase.app"
  }
);

export const Context = createContext(null) 
const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={{
        firebase,
        auth,
        firestore
      }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
