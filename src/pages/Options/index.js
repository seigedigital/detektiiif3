import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Options from './Options';

// ReactDOM.render(<Options />, document.getElementById('Options-Container'));
const domNode = document.getElementById('Options-Container');
const root = createRoot(domNode);
root.render(<Options />);