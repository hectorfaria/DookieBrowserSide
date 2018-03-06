import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import NewPost from './pages/newpost';
import PostShow from './pages/showpost';
import Home from './pages/home';
import NotFound from './pages/notfound';
import ListPosts from './pages/listpost';
import DonatePage from './pages/donatepage';
import CharacterSheets from './pages/charactersheet';
import Yardie from './pages/characters/yardie';
import Azhaar from './pages/characters/azhaar';
import Hjalte from './pages/characters/hjalte';
import Tenebris from './pages/characters/tenebris';
import Thunder from './pages/characters/thunder';
import Wang from './pages/characters/wang';
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
