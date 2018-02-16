import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import ListPosts from './pages/listpost';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import promise from 'redux-promise';
import NewPost from './pages/newpost';
import PostShow from './pages/showpost';
import Movies from './pages/movies';
import NotFound from './pages/notfound';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<nav className="navbar nbstyle navbar-fixed-top navbar-light bg-inverse">
					<Link to="/">
						<img src="https://i.imgur.com/Ll3BaXB.png" alt="" />
					</Link>

					<Link to="/posts" className="links nav-link">
						Posts
					</Link>
				</nav>
				<Switch>
					<Route path="/" exact component={Movies} />
					<Route path="/posts/new" component={NewPost} />
					<Route path="/posts/:id" component={PostShow} />
					<Route path="/posts" component={ListPosts} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);
registerServiceWorker();
