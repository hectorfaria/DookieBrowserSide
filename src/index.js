import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import ListPosts from './components/listpost';
import Home from './components/home';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';
import NewPost from './components/newpost';
import PostShow from './components/showpost';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<nav className="navbar nbstyle navbar-fixed-top navbar-light bg-inverse">
					<Link to="/">
						{' '}
						<img
							src="http://pichoster.net/images/2018/01/28/8c9bff58c67936222655ad05e86661f8.png"
							width="50"
							height="50"
							alt=""
						/>
					</Link>

					<Link to="/posts" className="links nav-link">
						Posts
					</Link>
				</nav>
				<Switch>
					<Route path="/posts/new" component={NewPost} />
					<Route path="/posts/:id" component={PostShow} />
					<Route path="/posts" component={ListPosts} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);
registerServiceWorker();
