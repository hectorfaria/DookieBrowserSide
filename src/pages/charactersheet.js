import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharacterSheets extends Component {
	render() {
		return (
			<div>
				<div className="jumbotron jumbotron-fluid bg-characters maintext">
					<h1> Character Sheets </h1>
				</div>
				<div className="row">
					<div className="col-md-4">
						<Link to="/characters/yardie">
							<div className="card centered">
								<img
									className="card-img-top img-thumbnail btn"
									src="https://i.pinimg.com/736x/83/1e/e4/831ee456de7c7df8b5b77b63d6c516fc--armies-the-army.jpg"
									alt="Yardie"
								/>
								<div className="card-body backgroundcard">
									<h5 className="card-title">Yardie Yardieson</h5>
								</div>
								<h4 className="status-live"> Alive</h4>
							</div>
						</Link>
					</div>
					<div className="col-md-4">
						<Link to="/characters/hjalte">
							<div className="card centered">
								<img
									className="card-img-top img-thumbnail btn"
									src="https://i.imgur.com/ZnzDN0Y.jpg"
									alt="Dragon Slayer"
								/>
								<div className="card-body backgroundcard">
									<h5 className="card-title">Hjalte "Dragonslayer" Bang</h5>
								</div>
								<h4 className="status-live"> Alive</h4>
							</div>
						</Link>
					</div>

					<div className="col-md-4">
						<Link to="/characters/tenebris">
							<div className="card centered">
								<img
									className="card-img-top img-thumbnail btn"
									src="https://i.imgur.com/wMmyGkSg.jpg"
									alt="Tenebris"
								/>
								<div className="card-body backgroundcard">
									<h5 className="card-title">Tenebris Silentum</h5>
								</div>
								<h4 className="status-live"> Alive</h4>
							</div>
						</Link>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<Link to="/characters/thunder">
							<div className="card centered">
								<img
									className="card-img-top img-thumbnail btn"
									src="https://i.imgur.com/DwGnm3o.jpg"
									alt="Thunder"
								/>
								<div className="card-body backgroundcard">
									<h5 className="card-title">Thunder Hyorin</h5>
								</div>
								<h4 className="status-live"> Alive</h4>
							</div>
						</Link>
					</div>
					<div className="col-md-4">
						<Link to="/characters/azhaar">
							<div className="card centered">
								<img
									className="card-img-top img-thumbnail btn"
									src="https://i.imgur.com/X9pyltw.jpg"
									alt="Azhaar"
								/>
								<div className="card-body backgroundcard">
									<h5 className="card-title">Azhaar Ibtihaaj</h5>
								</div>
								<h4 className="status-live"> Alive</h4>
							</div>
						</Link>
					</div>
					<div className="col-md-4">
						<Link to="/characters/wang">
							<div className="card centered">
								<img
									className="card-img-top img-thumbnail btn"
									src="https://i.imgur.com/szzkm7J.jpg"
									alt="Wang"
								/>
								<div className="card-body backgroundcard">
									<h5 className="card-title">Wang Shei</h5>
								</div>
								<h4 className="status-live"> Alive</h4>
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default CharacterSheets;
