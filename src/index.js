import './wdyr';
import React from 'react';
import ReactDOM from 'react-dom';
import { firebase, FieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase';
import './index.css';
import App from './App';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

