import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Thunder extends Component {
	state = {
		playing: false,
	};

	pauseHandler = () => {
		this.setState({ playing: false });
	};

	playHandler = () => {
		this.setState({ playing: true });
	};

	renderplaybutton() {
		switch (this.state.playing) {
			case null:
				return;
			case false:
				return (
					<div>
						<button className="btn--invisible container-fluid" onClick={this.playHandler}>
							<i className="fa fa-play fa-1x" aria-hidden="true" />
						</button>
					</div>
				);
			default:
				return (
					<div>
						<button className="btn--insivible container-fluid" onClick={this.pauseHandler}>
							<i className="fa fa-pause fa-1x" aria-hidden="true" />
						</button>
					</div>
				);
		}
	}

	render() {
		const { playing } = this.state;
		return (
			<div className="cinzel u-padding-8">
				<ReactPlayer
					url="https://www.youtube.com/watch?v=QVBAeS5t5nc"
					height={0}
					width={0}
					loop={true}
					playing={playing}
				/>
				<div className="row">
					<div className="col-md-3">
						<div className="characters__statscard">
							{this.renderplaybutton()}
							<h5>Thunder's Theme</h5>
						</div>
					</div>
					<div className="col-md-9">
						<h5 className="titles">
							<b>Thunder Hyorin</b>
						</h5>
						<div className="characters__statscard">
							<div className="row">
								<div className="col-md-4">
									<b>Class:</b> Druid
								</div>
								<div className="col-md-4">
									<b>Background:</b> None
								</div>
								<div className="col-md-4">
									<b>Race:</b> Half-elf
								</div>
								<div className="row">
									<div className="col-md-4">
										<b>Aligment:</b> Chaotic Good
									</div>
									<div className="col-md-4">
										<b>Hit Dice:</b> 1d8
									</div>
									<div className="col-md-4">
										<b>Languages:</b> Druidice
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<div className="characters__statscard">
							<img className="img-fluid" src="https://i.imgur.com/DwGnm3o.jpg" alt="unknown" />
						</div>
					</div>
					<div className="col-md-9">
						<div className="characters__statscard">
							<div className="row">
								<div className="col-md-4">
									<b>Profeciency Bonus:</b> +2
								</div>
								<div className="col-md-4">
									<b>Inspiration:</b> 0
								</div>
								<div className="col-md-4">
									<b>Armor class:</b> 8
								</div>
								<div className="row">
									<div className="col-md-4">
										<b>Initiative:</b> 0
									</div>
									<div className="col-md-4">
										<b>Speed:</b> 30
									</div>
									<div className="col-md-4">
										<b>Current Hit Points:</b> 16
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<div className="characters__statscard">
							<div>
								<b>Personality Traits:</b>
								<li>Extra Fertile</li>
								<li>Funny</li>
								<li>Chill</li>
							</div>
						</div>
						<div className="characters__statscard">
							<div>
								<b>Ideals:</b>
								<li>Wisdom seeker</li>
								<li>Looking for it's clan</li>
							</div>
						</div>
					</div>
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-2">
								<p className="titles-sm">Strength</p>
								<div className="characters__statscard">
									<b>7</b>(+2)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Dexterity</p>
								<div className="characters__statscard">
									<b>12</b>(+1)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Constitution</p>
								<div className="characters__statscard">
									<b>16</b>(+3)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Intelligence</p>
								<div className="characters__statscard">
									<b>12</b>(+1)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Wisdom</p>
								<div className="characters__statscard">
									<b>16</b>(+3)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Charisma</p>
								<div className="characters__statscard">
									<b>12</b>(+1)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<div className="characters__statscard">
							<div>
								<b>Flaws:</b>
								<li>Virgin</li>
								<li>No patience</li>
							</div>
						</div>
						<div className="characters__statscard">
							<div>
								<b>Bond:</b>
								<li>Needing Company</li>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="characters__statscard">
							<div>
								<b>Attack and Spells:</b>
								<li>
									Staff(+4): <b>1d4/B</b>
								</li>
								<li>
									Produce Flame: <b>1d8</b>
								</li>
								<li>Druidcraft</li>
								<b>Inventory:</b>
								<li>Herbalism Kit</li>
								<li>Winter Cloak</li>
								<li>Circle Kit</li>
							</div>
						</div>
					</div>

					<div className="col-md-1" />
					<div className="col-md-4">
						<div className="characters__statscard">
							<div>
								<b>Features and traits:</b>
								<li>Wild Shape(Dire Wolf)</li>
								<li>Druid Circle(Moon)</li>
								<li>Cure Wounds (1d8)(+wis)</li>
								<li>Ice Knife</li>
								<li>Make/Unmake Water</li>
								<li>Thunderwave</li>
								<li>Mirror Image</li>
								<li>Misty Step</li>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="form-group">
						<h5 className="titles-sm">
							<b>Notes</b>
						</h5>
						<textarea
							className="form-control"
							rows="8"
							cols="50"
							name="content"
							form="usrform"
							type="text"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Thunder;
