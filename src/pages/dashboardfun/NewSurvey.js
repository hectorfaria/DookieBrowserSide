import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import NewSurveysForm from './SurveyForm';
import SurveyReview from './SurveyReview';

class NewSurveys extends Component {
	state = { showReview: false };

	renderContent() {
		if (this.state.showReview) {
			return <SurveyReview onGoingBack={() => this.setState({ showReview: false })} />;
		}

		return <NewSurveysForm onSurveySubmit={() => this.setState({ showReview: true })} />;
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

export default reduxForm({
	form: 'newsurveyForm',
})(NewSurveys);
