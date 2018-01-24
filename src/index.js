import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Home from './components/home';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import NewPost from './components/newpost';
import PostShow from './components/showpost';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<img
					className="logohome img-fluid"
					src="https://data.whicdn.com/images/97429737/original.png"
					alt="dokie"
				/>

				<Switch>
					<Route path="/posts/new" component={NewPost} />
					<Route path="/posts/:id" component={PostShow} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);
registerServiceWorker();
