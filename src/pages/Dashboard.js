import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SurveyLists from './dashboardfun/SurveyLists';

class Dashboard extends Component {
	render() {
		const { auth } = this.props;

		if (auth === false) {
			return (
				<div className="u-padding-8">
					<img
						className="display-block-auto img-fluid "
						src="https://i.imgur.com/zkQOonQ.png"
						alt="404 not found"
					/>
					<div className="container titles pacifico">Please Login to continue...</div>;
				</div>
			);
		}
		return (
			<div>
				<h1 className="u-padding-8 titles pacifico">Send Emails</h1>
				<Link to="/dashboard/new" className="btn btn--edit fixed-bottom">
					<i className="fas fa-cloud-upload-alt" />
				</Link>
				<SurveyLists />
			</div>
		);
	}
}

function mapstate2props({ auth }) {
	return { auth };
}
export default connect(mapstate2props)(Dashboard);
