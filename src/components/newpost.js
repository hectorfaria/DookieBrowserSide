import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CreatePosts } from '../actions';

class NewPost extends Component {
	renderField(field) {
		return (
			<div className="cont container-fluid">
				<label className="newpostfont">{field.label}</label>
				<div className="form-group has-danger">
					<input className="inputstyle form-control  input-sm" type="text" {...field.input} />
				</div>

				<div className="text-help">{field.meta.touched ? field.meta.error : ''}</div>
			</div>
		);
	}

	renderFieldDesc(field) {
		return (
			<div className="container cont container-fluid">
				<label className="newpostfont">{field.label}</label>
				<div className="form-group has-danger">
					<textarea
						className="inputstyle form-control"
						type="text"
						rows="8"
						cols="50"
						name="content"
						form="usrform"
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
							<Field label="Title" name="title" component={this.renderField} />
						</div>

						<div className="col-md-5 contnewpage">
							<Field label="Categories" name="categories" component={this.renderField} />
						</div>
						<div className="col-md-1" />
					</div>
					<Field label="Type your dookie!" name="content" component={this.renderFieldDesc} />
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

	if (!values.title) {
		errors.title = 'Enter a Title';
	}

	if (!values.categories) {
		errors.categories = 'Enter 1 or more categories';
	}

	if (!values.content) {
		errors.content = 'Enter a description';
	}

	return errors;
}

export default reduxForm({
	validate,
	form: 'PostNewForm',
})(connect(null, { CreatePosts })(NewPost));
