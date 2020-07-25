import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import createReduxStore from './redux/index';
import App from './App';

import './styles/index.css';

const store = createReduxStore();

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
	    	<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);

registerServiceWorker();
