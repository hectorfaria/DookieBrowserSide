import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';
import promise from 'redux-promise';
import Routes from './routes';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Routes />
	</Provider>,
	document.getElementById('root'),
);
registerServiceWorker();
