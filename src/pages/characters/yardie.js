import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Yardie extends Component {
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
					url="https://www.youtube.com/watch?v=NPYms2pHFuU"
					height={0}
					width={0}
					loop={true}
					playing={playing}
				/>
				<div className="row">
					<div className="col-md-3 centered">
						<div className="topplayer charcont centered">
							{this.renderplaybutton()}
							<h5 className="centered">Yardie's Theme</h5>
						</div>
					</div>
					<div className="col-md-9 centered">
						<h5 className="centered">
							<b>Yardie Yardieson</b>
						</h5>
						<div className="charcont">
							<div className="row">
								<div className="col-md-4 normalfont">
									<b>Class:</b> Bard
								</div>
								<div className="col-md-4 normalfont">
									<b>Background:</b> Business Man
								</div>
								<div className="col-md-4 normalfont">
									<b>Race:</b> Mountain Dwarf
								</div>
								<div className="row">
									<div className="col-md-4 normalfont">
										<b>Aligment:</b> Neutral Evil
									</div>
									<div className="col-md-4 normalfont">
										<b>Hit Dice:</b> 1d8
									</div>
									<div className="col-md-4 normalfont">
										<b>Languages:</b> Dwarvish
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
								src="https://i.pinimg.com/736x/83/1e/e4/831ee456de7c7df8b5b77b63d6c516fc--armies-the-army.jpg"
								alt="Yardie"
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
									<b>Armor class:</b> 12
								</div>
								<div className="row">
									<div className="col-md-4 normalfont">
										<b>Initiative:</b> +1
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
								<li>Social</li>
								<li>Honorable</li>
								<li>Greedy</li>
							</div>
						</div>
						<div className="charcont">
							<div className="normalfont">
								<b>Ideals:</b>
								<li>Having more glory than his father</li>
							</div>
						</div>
					</div>
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-2">
								<p className="outsidefont">Strength</p>
								<div className="charcont">
									<b>14</b>(+2)
									<div className="basicfont">
										<li> Athletics</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Dexterity</p>
								<div className="charcont">
									<b>14</b>(+1)
									<div className="basicfont">
										<li>Sleight of Hand</li>
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Constitution</p>
								<div className="charcont">
									<b>15</b>(+2)
									<div className="basicfont">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Intelligence</p>
								<div className="charcont">
									<b>11</b>(0)
									<div className="basicfont">
										<li>Investig</li>
										<li>Religion</li>
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Wisdom</p>
								<div className="charcont">
									<b>8</b>(-1)
									<div className="basicfont">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Charisma</p>
								<div className="charcont">
									<b>18</b>(+4)
									<div className="basicfont">
										<li>Deceptio</li>
										<li>Intimida</li>
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
								<li>Backstabber</li>
								<li>Hates his father</li>
								<li>Greedy</li>
							</div>
						</div>
						<div className="charcont">
							<div className="normalfont">
								<b>Bond:</b>
								<li>Glory Seeker</li>
								<li>Redemption</li>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="charcont">
							<div className="normalfont">
								<b>Attack and Spells:</b>
								<li>Golden Mandolin</li>
								<li>
									Golden Kobold Garrote: <b>2d6</b>
								</li>
								<li>Vicious Mockery</li>
								<li>Friends</li>
							</div>
						</div>
					</div>

					<div className="col-md-1" />
					<div className="col-md-4">
						<div className="charcont">
							<div className="normalfont">
								<b>Features and traits:</b>
								<li>Bardic Inspiration</li>
								<li>Jacks of All trades</li>
								<li>Heroism</li>
								<li>Disguise Self</li>
								<li>Tasha Hideous Laughter</li>
								<li>Cure Wounds</li>
								<li>Darkness</li>
								<li>Fear</li>
								<li>Tounges</li>
								<li>Suggestion</li>
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

export default Yardie;
