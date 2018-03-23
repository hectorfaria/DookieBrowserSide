import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharacterSheets extends Component {
	render() {
		return (
			<div className="characters cinzel">
				<div className="characters__background">
					<h1 className="titles pacifico"> Character Sheets </h1>
				</div>
				<div className="row">
					<div className="col-md-4">
						<Link to="/characters/yardie">
							<div className="characters__card container-fluid">
								<img
									className="characters__card--img img-fluid"
									src="https://i.pinimg.com/736x/83/1e/e4/831ee456de7c7df8b5b77b63d6c516fc--armies-the-army.jpg"
									alt="Yardie"
								/>
								<div className="characters__card--body para">
									<h5>Yardie Yardieson</h5>
								</div>
								<h4 className="characters__card--status"> Alive</h4>
							</div>
						</Link>
					</div>
					<div className="col-md-4">
						<Link to="/characters/hjalte">
							<div className="characters__card container-fluid">
								<img
									className="characters__card--img  img-fluid"
									src="https://i.imgur.com/ZnzDN0Y.jpg"
									alt="Dragon Slayer"
								/>
								<div className="characters__card--body para">
									<h5>Hjalte "Dragonslayer" Bang</h5>
								</div>
								<h4 className="characters__card--status"> Alive</h4>
							</div>
						</Link>
					</div>

					<div className="col-md-4">
						<Link to="/characters/tenebris">
							<div className="characters__card container-fluid">
								<img
									className="characters__card--img img-fluid"
									src="https://i.imgur.com/wMmyGkSg.jpg"
									alt="Tenebris"
								/>
								<div className="characters__card--body para">
									<h5>Tenebris Silentum</h5>
								</div>
								<h4 className="characters__card--status"> Alive</h4>
							</div>
						</Link>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<Link to="/characters/thunder">
							<div className="characters__card container-fluid">
								<img
									className="characters__card--img img-fluid"
									src="https://i.imgur.com/DwGnm3o.jpg"
									alt="Thunder"
								/>
								<div className="characters__card--body para">
									<h5>Thunder Hyorin</h5>
								</div>
								<h4 className="characters__card--status"> Alive</h4>
							</div>
						</Link>
					</div>
					<div className="col-md-4">
						<Link to="/characters/azhaar">
							<div className="characters__card container-fluid">
								<img
									className="characters__card--img img-fluid"
									src="https://i.imgur.com/X9pyltw.jpg"
									alt="Azhaar"
								/>
								<div className="characters__card--body para">
									<h5>Azhaar Ibtihaaj</h5>
								</div>
								<h4 className="characters__card--status"> Alive</h4>
							</div>
						</Link>
					</div>
					<div className="col-md-4">
						<Link to="/characters/wang">
							<div className="characters__card container-fluid">
								<img
									className="characters__card--img  img-fluid"
									src="https://i.imgur.com/szzkm7J.jpg"
									alt="Wang"
								/>
								<div className="characters__card--body para">
									<h5>Wang Shei</h5>
								</div>
								<h4 className="characters__card--status"> Alive</h4>
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default CharacterSheets;
