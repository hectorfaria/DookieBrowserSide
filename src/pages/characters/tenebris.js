import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Tenebris extends Component {
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
						<button className="btn--invisible" onClick={this.playHandler}>
							<i className="fa fa-play fa-1x" aria-hidden="true" />
						</button>
					</div>
				);
			default:
				return (
					<div>
						<button className="btn--invisible" onClick={this.pauseHandler}>
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
					url="https://www.youtube.com/watch?v=OK0L1MhMlYY"
					height={0}
					width={0}
					loop={true}
					playing={playing}
				/>
				<div className="row">
					<div className="col-md-3 ">
						<div className="characters__statscard">
							{this.renderplaybutton()}
							<h5>Tenebris's Theme</h5>
						</div>
					</div>
					<div className="col-md-9 ">
						<h5 className="titles">
							<b>Tenebris Silentum</b>
						</h5>
						<div className="characters__statscard">
							<div className="row">
								<div className="col-md-4">
									<b>Class:</b> Wizard
								</div>
								<div className="col-md-4">
									<b>Background:</b> Unknown
								</div>
								<div className="col-md-4">
									<b>Race:</b> High Elf
								</div>
								<div className="row">
									<div className="col-md-4">
										<b>Aligment:</b> Chaotic Bad
									</div>
									<div className="col-md-4">
										<b>Hit Dice:</b> 1d6
									</div>
									<div className="col-md-4">
										<b>Languages:</b> Elfic,Abyssal
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<div className="characters__statscard">
							<img className="img-fluid" src="https://i.imgur.com/wMmyGkSg.jpg" alt="unknown" />
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
									<b>Armor class:</b> 13
								</div>
								<div className="row">
									<div className="col-md-4">
										<b>Initiative:</b> 0
									</div>
									<div className="col-md-4">
										<b>Speed:</b> 25
									</div>
									<div className="col-md-4">
										<b>Current Hit Points:</b> 8
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
								<li>Very misterious person</li>
								<li>Nobody knows about him</li>
							</div>
						</div>
						<div className="characters__statscard">
							<div>
								<b>Ideals:</b>
								<li>Unknown</li>
							</div>
						</div>
					</div>
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-2">
								<p className="titles-sm">Strength</p>
								<div className="characters__statscard">
									<b>6</b>(-2)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Dexterity</p>
								<div className="characters__statscard">
									<b>15</b>(+3)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Constitution</p>
								<div className="characters__statscard">
									<b>14</b>(+2)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Intelligence</p>
								<div className="characters__statscard">
									<b>17</b>(+4)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Wisdom</p>
								<div className="characters__statscard">
									<b>11</b>(0)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Charisma</p>
								<div className="characters__statscard">
									<b>10</b>(0)
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
								<li>Unknown</li>
							</div>
						</div>
						<div className="characters__statscard">
							<div>
								<b>Bond:</b>
								<li>Unknown</li>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="characters__statscard">
							<div>
								<b>Attack and Spells:</b>
								<li>
									Quaterstaff(+4): <b>1d6</b>
								</li>
								<li>Arcane of Recovery</li>
								<li>Crown of Madness</li>
								<li>Poison Spray</li>
								<li>Aganazzar's Scorcher</li>
								<li>Ray of Enfeeblement</li>
							</div>
						</div>
					</div>

					<div className="col-md-1" />
					<div className="col-md-4">
						<div className="characters__statscard">
							<div>
								<b>Features and traits:</b>
								<li>Locate Objects</li>
								<li>Blindness/Deafness</li>
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

export default Tenebris;
