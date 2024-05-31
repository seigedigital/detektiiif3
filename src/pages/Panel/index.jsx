import React from 'react';
import { createRoot } from 'react-dom/client';
import Panel from './Panel';
import './index.css';

// render(<Panel />, window.document.querySelector('#app-container'));
const domNode = document.getElementById('#app-container');
const root = createRoot(domNode);
root.render(<Panel />);


if (module.hot) module.hot.accept();
