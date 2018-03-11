import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import FormFields from './fieldSurvey';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyReview = ({ onGoingBack, formValues, saveSurvey, history }) => {
	const reviewField = _.map(FormFields, ({ label, name }) => {
		return (
			<div key={name} className="reviews">
				<label>{label}</label>
				<div className="formvalues">{formValues[name]}</div>
			</div>
		);
	});
	return (
		<div className="page">
			<div className="formsurvey cont container-fluid">
				<h5 className="maintext"> Confirm Your entry </h5>
				{reviewField}
				<div className="margin">
					<button className="btn btn-success" onClick={() => saveSurvey(formValues, history)}>
						Confirm
					</button>
				</div>
				<div className="margin">
					<button onClick={onGoingBack} className="btn btn-warning container-fluid">
						Back
					</button>
				</div>
			</div>
		</div>
	);
};

function mapstate2props({ form }) {
	return { formValues: form.newsurveyForm.values };
}

export default connect(mapstate2props, actions)(withRouter(SurveyReview));
