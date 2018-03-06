import React, { Component } from 'react';
import StripeBilling from '../components/stripebilling';
import { connect } from 'react-redux';

class DonatePage extends Component {
	render() {
		const { auth } = this.props;

		if (auth === false) {
			return (
				<div className="modalfix">
					<img className="logohomemain img-fluid" src="https://i.imgur.com/zkQOonQ.png" alt="404 not found" />
					<div className="cont titlefont">Please Login to continue...</div>;
				</div>
			);
		}

		return (
			<div>
				<div className="cont">
					<b>
						<p className="font-para">
							This page is only for educationals Purposes - Flows and payments are FAKE and in no
							circustance we accept donations.
						</p>
					</b>
				</div>
				<h1 className="maintext">Donate now!</h1>

				<div className="row">
					<div className="col-md-4">
						<div className="modalfix cont btn-danger">
							<h3 className="font-para ctn-btn">Stripe</h3>
							<StripeBilling />
							<h6>Donate Now!</h6>
						</div>
					</div>
					<div className="col-md-4">
						<div className="modalfix cont btn-danger">
							<h3 className="font-para ctn-btn">Paypal</h3>
							<button className="donate-btn">
								<img
									src="https://files.startupranking.com/startup/thumb/32328_cfc4897b8f23a04c52aa148f8fa680d8b5218544_paypal_l.png"
									className="img-fluid"
									alt="paypal"
								/>
							</button>
							<h6>...Soon</h6>
						</div>
					</div>
					<div className="col-md-4">
						<div className="modalfix cont btn-danger">
							<h3 className="font-para ctn-btn">Ethereum</h3>
							<button className="donate-btn">
								<img
									src="https://d3npzzrehyahmo.cloudfront.net/images/89/23/89231ba1d7cd720fb5d00106b33bf9db_4031156383d_t.png"
									className="img-fluid"
									alt="ethereum"
								/>
							</button>
							<h6>...Soon</h6>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
function mapstate2props({ auth }) {
	return { auth };
}

export default connect(mapstate2props)(DonatePage);
