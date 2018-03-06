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
						<button className="donate-btn container-fluid" onClick={this.playHandler}>
							<i className="fa fa-play fa-1x" aria-hidden="true" />
						</button>
					</div>
				);
			default:
				return (
					<div>
						<button className="donate-btn container-fluid" onClick={this.pauseHandler}>
							<i className="fa fa-pause fa-1x" aria-hidden="true" />
						</button>
					</div>
				);
		}
	}

	render() {
		const { playing } = this.state;
		return (
			<div>
				<ReactPlayer
					url="https://www.youtube.com/watch?v=tgkxSkF7QOU"
					height={0}
					width={0}
					loop={true}
					playing={playing}
				/>
				<div className="row">
					<div className="col-md-3 centered">
						<div className="topplayer charcont centered">
							{this.renderplaybutton()}
							<h5 className="centered">Hjalte's Theme</h5>
						</div>
					</div>
					<div className="col-md-9 centered">
						<h5 className="centered">
							<b>Hjalte"Dragon Slayer"Bang</b>
						</h5>
						<div className="charcont">
							<div className="row">
								<div className="col-md-4 normalfont">
									<b>Class:</b> Rogue
								</div>
								<div className="col-md-4 normalfont">
									<b>Background:</b> Magic Clown
								</div>
								<div className="col-md-4 normalfont">
									<b>Race:</b> Halfling
								</div>
								<div className="row">
									<div className="col-md-4 normalfont">
										<b>Aligment:</b> Chaotic Good
									</div>
									<div className="col-md-4 normalfont">
										<b>Hit Dice:</b> 1d8
									</div>
									<div className="col-md-4 normalfont">
										<b>Languages:</b> Common
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<div className="charcont">
							<img
								className="card-img-top img-fluid"
								src="https://i.imgur.com/ZnzDN0Y.jpg"
								alt="Dragonslayer"
							/>
						</div>
					</div>
					<div className="col-md-9 normalfont">
						<div className="charcont">
							<div className="row">
								<div className="col-md-4 normalfont">
									<b>Profeciency Bonus:</b> +2
								</div>
								<div className="col-md-4 normalfont">
									<b>Inspiration:</b> 0
								</div>
								<div className="col-md-4 normalfont">
									<b>Armor class:</b> 14
								</div>
								<div className="row">
									<div className="col-md-4 normalfont">
										<b>Initiative:</b> +4
									</div>
									<div className="col-md-4 normalfont">
										<b>Speed:</b> 25
									</div>
									<div className="col-md-4 normalfont">
										<b>Current Hit Points:</b> 17
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<div className="charcont">
							<div className="normalfont">
								<b>Personality Traits:</b>
								<li>Lier</li>
								<li>Funny</li>
								<li>Young Lookalike</li>
							</div>
						</div>
						<div className="charcont">
							<div className="normalfont">
								<b>Ideals:</b>
								<li>Groupseeker</li>
							</div>
						</div>
					</div>
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-2">
								<p className="outsidefont">Strength</p>
								<div className="charcont">
									<b>13</b>(+1)
									<div className="basicfont">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Dexterity</p>
								<div className="charcont">
									<b>16</b>(+3)
									<div className="basicfont">
										<li>Sleight of Hand</li>
										<li>Stealth</li>
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Constitution</p>
								<div className="charcont">
									<b>7</b>(-2)
									<div className="basicfont">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Intelligence</p>
								<div className="charcont">
									<b>8</b>(-1)
									<div className="basicfont">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Wisdom</p>
								<div className="charcont">
									<b>9</b>(-1)
									<div className="basicfont">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Charisma</p>
								<div className="charcont">
									<b>15</b>(+2)
									<div className="basicfont">
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
						<div className="charcont">
							<div className="normalfont">
								<b>Flaws:</b>
								<li>Scared to be alone</li>
							</div>
						</div>
						<div className="charcont">
							<div className="normalfont">
								<b>Bond:</b>
								<li>Adventure Seeker</li>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="charcont">
							<div className="normalfont">
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
						<div className="charcont">
							<div className="normalfont">
								<b>Features and traits:</b>
								<li>Sneak Attack (Double Dice)</li>
								<li>Cunning Attack(Bonus AC)</li>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="form-group">
						<h5 className="centered">
							<b>Notes</b>
						</h5>
						<textarea
							className="inputstyle form-control  input-sm"
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
