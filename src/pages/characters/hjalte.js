import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Hjalte extends Component {
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
						<button className="btn--invisible container-fluid" onClick={this.pauseHandler}>
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
					url="https://www.youtube.com/watch?v=tgkxSkF7QOU"
					height={0}
					width={0}
					loop={true}
					playing={playing}
				/>
				<div className="row">
					<div className="col-md-3">
						<div className="characters__statscard">
							{this.renderplaybutton()}
							<h5>Hjalte's Theme</h5>
						</div>
					</div>
					<div className="col-md-9">
						<h5 className="titles">
							<b>Hjalte"Dragon Slayer"Bang</b>
						</h5>
						<div className="characters__statscard">
							<div className="row">
								<div className="col-md-4 ">
									<b>Class:</b> Rogue
								</div>
								<div className="col-md-4 ">
									<b>Background:</b> Magic Clown
								</div>
								<div className="col-md-4 ">
									<b>Race:</b> Halfling
								</div>
								<div className="row">
									<div className="col-md-4 ">
										<b>Aligment:</b> Chaotic Good
									</div>
									<div className="col-md-4 ">
										<b>Hit Dice:</b> 1d8
									</div>
									<div className="col-md-4 ">
										<b>Languages:</b> Common
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<div className="characters__statscard">
							<img className="img-fluid" src="https://i.imgur.com/ZnzDN0Y.jpg" alt="Dragonslayer" />
						</div>
					</div>
					<div className="col-md-9 ">
						<div className="characters__statscard">
							<div className="row">
								<div className="col-md-4 ">
									<b>Profeciency Bonus:</b> +2
								</div>
								<div className="col-md-4 ">
									<b>Inspiration:</b> 0
								</div>
								<div className="col-md-4 ">
									<b>Armor class:</b> 14
								</div>
								<div className="row">
									<div className="col-md-4 ">
										<b>Initiative:</b> +4
									</div>
									<div className="col-md-4 ">
										<b>Speed:</b> 25
									</div>
									<div className="col-md-4 ">
										<b>Current Hit Points:</b> 17
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<div className="characters__statscard">
							<div className="">
								<b>Personality Traits:</b>
								<li>Lier</li>
								<li>Funny</li>
								<li>Young Lookalike</li>
							</div>
						</div>
						<div className="characters__statscard">
							<div className="">
								<b>Ideals:</b>
								<li>Groupseeker</li>
							</div>
						</div>
					</div>
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-2">
								<p className="titles-sm">Strength</p>
								<div className="characters__statscard">
									<b>13</b>(+1)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Dexterity</p>
								<div className="characters__statscard">
									<b>16</b>(+3)
									<div>
										<li>Sleight of Hand</li>
										<li>Stealth</li>
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Constitution</p>
								<div className="characters__statscard">
									<b>7</b>(-2)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Intelligence</p>
								<div className="characters__statscard">
									<b>8</b>(-1)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Wisdom</p>
								<div className="characters__statscard">
									<b>9</b>(-1)
									<div>
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Charisma</p>
								<div className="characters__statscard">
									<b>15</b>(+2)
									<div>
										<li>Deceptio</li>
										<li>Perfoman</li>
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
								<li>Scared to be alone</li>
							</div>
						</div>
						<div className="characters__statscard">
							<div>
								<b>Bond:</b>
								<li>Adventure Seeker</li>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="characters__statscard">
							<div>
								<b>Attack and Spells:</b>
								<li>
									Short Bow(+6): <b>1d6/P</b>
								</li>
								<li>
									2xShort swords(+4): <b>1d6/S</b>
								</li>
								<li>
									Longsword(+1):<b>1d6/S</b>
								</li>
							</div>
						</div>
					</div>

					<div className="col-md-1" />
					<div className="col-md-4">
						<div className="characters__statscard">
							<div>
								<b>Features and traits:</b>
								<li>Sneak Attack (Double Dice)</li>
								<li>Cunning Attack(Bonus AC)</li>
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

export default Hjalte;
