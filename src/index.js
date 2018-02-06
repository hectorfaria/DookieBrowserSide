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
import Movies from './components/movies';

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
					<Route path="/posts/new" component={NewPost} />
					<Route path="/posts/:id" component={PostShow} />
					<Route path="/posts" component={ListPosts} />
					<Route path="/wee" component={Home} />
					<Route path="/" component={Movies} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);
registerServiceWorker();
