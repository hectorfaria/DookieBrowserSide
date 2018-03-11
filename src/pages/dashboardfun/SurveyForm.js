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
				<div className="form-grou2p" key={name}>
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
			<div className="page">
				<div className="formsurvey cont">
					<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
						{this.renderFields()}
						<button type="submit" className="btn btn-success ">
							Submit
						</button>
						<Link to="/dashboard" className="btn">
							<button className="btn btn-danger">Cancel</button>
						</Link>
					</form>
				</div>
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
