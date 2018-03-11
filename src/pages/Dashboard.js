import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SurveyLists from './dashboardfun/SurveyLists';

class Dashboard extends Component {
	render() {
		const { auth } = this.props;

		if (auth === false) {
			return (
				<div className="modalfix">
					<img className="logohomemain img-fluid" src="https://i.imgur.com/zkQOonQ.png" alt="404 not found" />
					<div className="cont titlefont">Please Login to continue...</div>;
				</div>
			);
		}
		return (
			<div>
				<div className="listp">
					<Link to="/dashboard/new" className="btn btn-danger edit-btn listsp container-fluid">
						<i className="fas fa-cloud-upload-alt" />
					</Link>
					<SurveyLists />
				</div>
			</div>
		);
	}
}

function mapstate2props({ auth }) {
	return { auth };
}
export default connect(mapstate2props)(Dashboard);
