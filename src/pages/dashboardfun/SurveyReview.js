import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import FormFields from './fieldSurvey';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyReview = ({ onGoingBack, formValues, saveSurvey, history }) => {
	const reviewField = _.map(FormFields, ({ label, name }) => {
		return (
			<div key={name} className="quicksand para">
				<label>{label}</label>
				<div className="quicksand titles-sm">{formValues[name]}</div>
			</div>
		);
	});
	return (
		<div className="new-form">
			<div className="new-form__survey container-fluid">
				<h5 className="para pacifico"> Confirm Your entry </h5>
				{reviewField}

				<button className="btn btn--success" onClick={() => saveSurvey(formValues, history)}>
					Confirm
				</button>

				<button onClick={onGoingBack} className="btn btn--warning">
					Back
				</button>
			</div>
		</div>
	);
};

function mapstate2props({ form }) {
	return { formValues: form.newsurveyForm.values };
}

export default connect(mapstate2props, actions)(withRouter(SurveyReview));
