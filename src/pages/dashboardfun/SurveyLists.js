import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyLists extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map((survey) => {
			return (
				<div className="col-md-4" key={survey._id}>
					<div className="containers container-fluid">
						<h2 className="titles-sm">{survey.title}</h2>
						<div className="titles-sm">
							<p className="para">{survey.subject}</p>
							<h2 className="titles-sm">Responses</h2>
							<p>✓: {survey.yes}</p>
							<p>X: {survey.no} </p>
							<p className="titles-sm">Sended:{new Date(survey.dateSent).toLocaleDateString()}</p>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className="row"> {this.renderSurveys()} </div>;
	}
}

function mapstate2props({ surveys }) {
	return { surveys };
}

export default connect(mapstate2props, { fetchSurveys })(SurveyLists);
