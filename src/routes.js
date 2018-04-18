import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NewPost from './pages/posts/NewPost';
import PostShow from './pages/posts/ShowPost';
import Home from './pages/Home';
import NotFound from './pages/notfound';
import ListPosts from './pages/posts/ListPost';
import DonatePage from './pages/donatepage';
import Dashboard from './pages/Dashboard';
import NewSurveys from './pages/dashboardfun/NewSurvey';
import { connect } from 'react-redux';
import * as actions from './actions';
import Chat from './components/Chat';

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
						<Route path="/" exact component={Home} />
						<Route path="/dashboard/new" component={NewSurveys} />
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/donate" component={DonatePage} />
						<Route path="/posts/new" component={NewPost} />
						<Route path="/posts/:id" component={PostShow} />
						<Route path="/posts" component={ListPosts} />
						<Route path="/chat" component={Chat} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(Routes);
