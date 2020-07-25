import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import { Provider } from 'react-redux';
import createReduxStore from './redux/index';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";

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
