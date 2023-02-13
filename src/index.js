import React from 'react';
import ReactDOMClient from 'react-dom/client';
import "./App.css";
import Routings from './routes/Routings';
import MyProvider from './context/MyProvider';


const root = ReactDOMClient.createRoot(document.querySelector('#root'))

root.render(<MyProvider> <Routings/>   </MyProvider>);


