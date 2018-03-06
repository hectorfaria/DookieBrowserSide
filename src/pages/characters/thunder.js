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
					url="https://www.youtube.com/watch?v=QVBAeS5t5nc"
					height={0}
					width={0}
					loop={true}
					playing={playing}
				/>
				<div className="row">
					<div className="col-md-3 centered">
						<div className="topplayer charcont centered">
							{this.renderplaybutton()}
							<h5 className="centered">Thunder's Theme</h5>
						</div>
					</div>
					<div className="col-md-9 centered">
						<h5 className="centered">
							<b>Thunder Hyorin</b>
						</h5>
						<div className="charcont">
							<div className="row">
								<div className="col-md-4 normalfont">
									<b>Class:</b> Druid
								</div>
								<div className="col-md-4 normalfont">
									<b>Background:</b> None
								</div>
								<div className="col-md-4 normalfont">
									<b>Race:</b> Half-elf
								</div>
								<div className="row">
									<div className="col-md-4 normalfont">
										<b>Aligment:</b> Chaotic Good
									</div>
									<div className="col-md-4 normalfont">
										<b>Hit Dice:</b> 1d8
									</div>
									<div className="col-md-4 normalfont">
										<b>Languages:</b> Druidice
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
								src="https://i.imgur.com/DwGnm3o.jpg"
								alt="unknown"
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
									<b>Armor class:</b> 8
								</div>
								<div className="row">
									<div className="col-md-4 normalfont">
										<b>Initiative:</b> 0
									</div>
									<div className="col-md-4 normalfont">
										<b>Speed:</b> 30
									</div>
									<div className="col-md-4 normalfont">
										<b>Current Hit Points:</b> 16
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
								<li>Extra Fertile</li>
								<li>Funny</li>
								<li>Chill</li>
							</div>
						</div>
						<div className="charcont">
							<div className="normalfont">
								<b>Ideals:</b>
								<li>Wisdom seeker</li>
								<li>Looking for it's clan</li>
							</div>
						</div>
					</div>
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-2">
								<p className="outsidefont">Strength</p>
								<div className="charcont">
									<b>7</b>(+2)
									<div className="basicfont">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Dexterity</p>
								<div className="charcont">
									<b>12</b>(+1)
									<div className="basicfont">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Constitution</p>
								<div className="charcont">
									<b>16</b>(+3)
									<div className="basicfont">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Intelligence</p>
								<div className="charcont">
									<b>12</b>(+1)
									<div className="basicfont">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Wisdom</p>
								<div className="charcont">
									<b>16</b>(+3)
									<div className="basicfont">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Charisma</p>
								<div className="charcont">
									<b>12</b>(+1)
									<div className="basicfont">
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
						<div className="charcont">
							<div className="normalfont">
								<b>Flaws:</b>
								<li>Virgin</li>
								<li>No patience</li>
							</div>
						</div>
						<div className="charcont">
							<div className="normalfont">
								<b>Bond:</b>
								<li>Needing Company</li>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="charcont">
							<div className="normalfont">
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
						<div className="charcont">
							<div className="normalfont">
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

export default Thunder;