import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';

class Home extends Component {
	state = {
		open: false,
	};

	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};

	render() {
		const { open } = this.state;
		return (
			<div>
				<div>
					<Link to="/">
						<div className="jumbotron jumbotron-fluid">
							<img
								className="logohomemain img-fluid"
								src="https://data.whicdn.com/images/97429737/original.png"
								alt="dokie"
							/>
						</div>
					</Link>
					<div className="maintext">
						<h3>Coder, WoW Player, noob!</h3>
					</div>
					<button className=" btn-danger edit-btn container-fluid" onClick={this.onOpenModal}>
						<i className="fa fa-cog fa-2x" aria-hidden="true" />
					</button>

					<img
						className="img-fluid logohome"
						width="350"
						src="https://i.pinimg.com/736x/38/04/c7/3804c7dfc4a1a06cfa94351001344c97--monkey-art-monkey-business.jpg"
						alt="monkeybiz"
					/>

					<Modal
						open={open}
						onClose={this.onCloseModal}
						classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}
						animationDuration={1000}
					>
						<h2>What you want to do</h2>
						<div className="text-xs-left">
							<Link className="btn btn-danger ctn-btn" to="/posts">
								View Posts
							</Link>
						</div>
					</Modal>
				</div>
			</div>
		);
	}
}

export default Home;
