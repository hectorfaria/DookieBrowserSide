import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchPosts2, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component {
	componentDidMount() {
		//const posts = this.props.home;
		const { id } = this.props.match.params;
		this.props.FetchPosts2(id);
	}

	onDeleteClick() {
		const { id } = this.props.match.params;

		this.props.deletePost(id, () => {
			this.props.history.push('/');
		});
	}
	render() {
		const { post } = this.props;

		if (!post) {
			return <div className="cont titlefont">Loading...</div>;
		}

		return (
			<div>
				<div className="cont">
					<h3 className="titlefont">{post.title}</h3>
					<p>Categories: {post.categories}</p>
					<p>{post.content}</p>
				</div>
				<div className="col-md-6">
					<button
						className=" btn-danger edit-btn leftbtn container-fluid"
						onClick={this.onDeleteClick.bind(this)}
					>
						<i className="fa fa-trash-o fa-3x" aria-hidden="true" />
					</button>
				</div>
				<div className="col-md-6">
					<Link className="btn-danger edit-btn rightbtn container-fluid" to="/">
						<i className="fa fa-arrow-left fa-3x" aria-hidden="true" />
					</Link>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ post }, ownProps) {
	return { post: post[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { FetchPosts2, deletePost })(PostShow);

// fa-times
