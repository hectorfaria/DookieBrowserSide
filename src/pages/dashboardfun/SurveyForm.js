import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import invalidEmails from '../../util/invalidemail';
import FormFields from './fieldSurvey';

class NewSurveysForm extends Component {
	renderFields(field) {
		return _.map(FormFields, ({ label, name }) => {
			return (
				<div key={name}>
					<Field
						component={SurveyField}
						type="text"
						label={label}
						key={name}
						name={name}
						placeholder={label}
					/>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="new-form">
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} className="new-form__survey">
					{this.renderFields()}
					<button type="submit" className="btn btn--success">
						Submit
					</button>
					<Link to="/dashboard">
						<button className="btn btn--danger">Cancel</button>
					</Link>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.recipients = invalidEmails(values.recipients || '');

	_.each(FormFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = `Error enter some ${name}`;
		}
	});

	return errors;
}

export default reduxForm({ validate, form: 'newsurveyForm', destroyOnUnmount: false })(NewSurveysForm);
