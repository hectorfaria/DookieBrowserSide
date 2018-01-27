import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CreatePosts } from '../actions';

const FIELDS = {
	title: { type: 'input', label: 'Enter some title' },
	categories: { type: 'input', label: 'Enter some categories' },
	content: { type: 'textarea', label: 'Enter some description' },
};

class NewPost extends Component {
	renderField(field) {
		return (
			<div className="cont container-fluid">
				<label className="newpostfont">{field.label}</label>
				<div className="form-group has-danger">
					<field.type
						className="inputstyle form-control  input-sm"
						rows="8"
						cols="50"
						name="content"
						form="usrform"
						type="text"
						{...field.input}
					/>
				</div>

				<div className="text-help">{field.meta.touched ? field.meta.error : ''}</div>
			</div>
		);
	}

	onSubmit(values) {
		this.props.CreatePosts(values, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<div className="row">
						<div className="col-md-1" />
						<div className="col-md-5 contnewpage">
							<Field label="Title" name="title" type="input" component={this.renderField} />
						</div>

						<div className="col-md-5 contnewpage">
							<Field label="Categories" name="categories" type="input" component={this.renderField} />
						</div>
						<div className="col-md-1" />
					</div>
					<Field label="Type your dookie!" name="content" type="textarea" component={this.renderField} />
					<div className="col-md-6">
						<button type="submit" className=" btn-danger edit-btn leftbtn container-fluid">
							<i className="fa fa-floppy-o fa-3x" aria-hidden="true" />
						</button>
					</div>
					<div className="col-md-6">
						<Link className="btn-danger edit-btn rightbtn container-fluid" to="/">
							<i className="fa fa-arrow-left fa-3x" aria-hidden="true" />
						</Link>
					</div>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	_.each(FIELDS, (type, field) => {
		if (!values[field]) {
			errors[field] = `Error enter some ${field}`;
		}
	});
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostNewForm',
	fields: _.keys(FIELDS),
})(connect(null, { CreatePosts })(NewPost));
