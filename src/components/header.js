import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
	rendercontent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<a href="/auth/google" className="btn btn-sm btn-primary font-para">
						Login with <b>Google</b>
					</a>
				);
			default:
				return (
					<a href="/api/logout" className="btn btn-sm btn-primary font-para">
						Logout
					</a>
				);
		}
	}

	render() {
		return (
			<nav className="navbar nbstyle navbar-fixed-top navbar-light bg-inverse">
				<div className="row">
					<div className="col-md-2">
						<Link to="/">
							<img src="https://i.imgur.com/Ll3BaXB.png" alt="" />
						</Link>

						<Link to="/posts" className="links nav-link">
							Posts
						</Link>
					</div>
					<div className="col-md-8" />
					<div className="col-md-2">{this.rendercontent()}</div>
				</div>
			</nav>
		);
	}
}

function mapstate2props({ auth }) {
	return { auth };
}

export default connect(mapstate2props)(Header);
