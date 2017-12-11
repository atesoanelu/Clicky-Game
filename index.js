import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import server from './server';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<server />, document.getElementById('server'));
registerServiceWorker();
