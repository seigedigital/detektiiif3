import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Popup from './Popup';

// ReactDOM.render(<Popup />, document.getElementById('App-container'));
const domNode = document.getElementById('App-container');
const root = createRoot(domNode);
root.render(<Popup />);


