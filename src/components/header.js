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
					<a href="/api/auth/google" className="btn contnewpage btn-sm btn-primary font-para">
						Login with <b>Google</b>
					</a>
				);
			default:
				return [
					<p className="links nav-link only4logging" key="credits">
						Credits: {this.props.auth.credits}
					</p>,
					<a href="/api/logout" className="btn contnewpage btn-sm btn-primary font-para" key="logoutkey">
						Logout
					</a>,
					<Link to="/donate" className="links nav-link only4logging" key="Donate">
						<button type="button" className="btn btn-sm btn-warning">
							<i className="fas fa-dollar-sign" />
						</button>
					</Link>,
				];
		}
	}

	render() {
		return (
			<nav className="nav nbstyle navbar-fixed-top">
				<div className="row">
					<div className="col-md-8">
						<Link to="/">
							<img src="https://i.imgur.com/Ll3BaXB.png" alt="" />
						</Link>

						<Link to="/posts" className="links nav-link">
							Posts
						</Link>
					</div>
					{this.rendercontent()}
				</div>
			</nav>
		);
	}
}

function mapstate2props({ auth }) {
	return { auth };
}

export default connect(mapstate2props)(Header);
