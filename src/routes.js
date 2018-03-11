import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NewPost from './pages/posts/NewPost';
import PostShow from './pages/posts/ShowPost';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ListPosts from './pages/posts/ListPost';
import DonatePage from './pages/DonatePage';
import CharacterSheets from './pages/CharacterSheet';
import Yardie from './pages/characters/Yardie';
import Azhaar from './pages/characters/Azhaar';
import Hjalte from './pages/characters/Hjalte';
import Tenebris from './pages/characters/Tenebris';
import Thunder from './pages/characters/Thunder';
import Wang from './pages/characters/Wang';
import Dashboard from './pages/Dashboard';
import NewSurveys from './pages/dashboardfun/NewSurvey';
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
						<Route path="/" exact component={Home} />
						<Route path="/dashboard/new" component={NewSurveys} />
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/characters/yardie" component={Yardie} />
						<Route path="/characters/hjalte" component={Hjalte} />
						<Route path="/characters/tenebris" component={Tenebris} />
						<Route path="/characters/azhaar" component={Azhaar} />
						<Route path="/characters/thunder" component={Thunder} />
						<Route path="/characters/wang" component={Wang} />
						<Route path="/characters" component={CharacterSheets} />
						<Route path="/donate" component={DonatePage} />
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
