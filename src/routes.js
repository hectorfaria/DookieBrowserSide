import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import NewPost from './pages/newpost';
import PostShow from './pages/showpost';
import Movies from './pages/movies';
import NotFound from './pages/notfound';
import ListPosts from './pages/listpost';
import { connect } from 'react-redux';
import * as actions from './actions';

class Routes extends Component {
	componentDidMount() {
		this.props.FetchUser();
	}
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact component={Movies} />
						<Route path="/posts/new" component={NewPost} />
						<Route path="/posts/:id" component={PostShow} />
						<Route path="/posts" component={ListPosts} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(Routes);
