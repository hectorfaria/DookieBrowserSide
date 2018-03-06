import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Azhaar extends Component {
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
					url="https://www.youtube.com/watch?v=mUS_SwThbGE"
					height={0}
					width={0}
					loop={true}
					playing={playing}
				/>
				<div className="row">
					<div className="col-md-3 centered">
						<div className="topplayer charcont centered">
							{this.renderplaybutton()}
							<h5 className="centered">Azhaar's Theme</h5>
						</div>
					</div>
					<div className="col-md-9 centered">
						<h5 className="centered">
							<b>Azhaar Ibtihaaj</b>
						</h5>
						<div className="charcont">
							<div className="row">
								<div className="col-md-4 normalfont">
									<b>Class:</b> Rogue
								</div>
								<div className="col-md-4 normalfont">
									<b>Background:</b> Hermit
								</div>
								<div className="col-md-4 normalfont">
									<b>Race:</b> Human
								</div>
								<div className="row">
									<div className="col-md-4 normalfont">
										<b>Aligment:</b> Chaotic Neutral
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
								src="https://i.imgur.com/X9pyltw.jpg"
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
									<b>Armor class:</b> 14
								</div>
								<div className="row">
									<div className="col-md-4 normalfont">
										<b>Initiative:</b> +4
									</div>
									<div className="col-md-4 normalfont">
										<b>Speed:</b> 30
									</div>
									<div className="col-md-4 normalfont">
										<b>Current Hit Points:</b> 10
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
								<li>Easily Confused</li>
								<li>13 years old</li>
							</div>
						</div>
						<div className="charcont">
							<div className="normalfont">
								<b>Ideals:</b>
								<li>Having a normal family</li>
							</div>
						</div>
					</div>
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-2">
								<p className="outsidefont">Strength</p>
								<div className="charcont">
									<b>18</b>(+4)
									<div className="basicfont">
										<li>Athlethics(2)</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Dexterity</p>
								<div className="charcont">
									<b>19</b>(+4)
									<div className="basicfont">
										<li>Acrobatics(4)</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Constitution</p>
								<div className="charcont">
									<b>13</b>(+1)
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
									<b>16</b>(+3)
									<div className="basicfont">
										<li>Perception</li>
										<li>Survival</li>
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Charisma</p>
								<div className="charcont">
									<b>9</b>(-1)
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
								<li>Hot headed</li>
							</div>
						</div>
						<div className="charcont">
							<div className="normalfont">
								<b>Bond:</b>
								<li>Daddy Issues</li>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="charcont">
							<div className="normalfont">
								<b>Attack and Spells:</b>
								<li>
									ShortBow(+8): <b>1d6/P</b>
								</li>
								<li>
									2xShortsword(+4): <b>1d8/S</b>
								</li>
								<b>Inventory:</b>
								<li>Light Armor</li>
							</div>
						</div>
					</div>

					<div className="col-md-1" />
					<div className="col-md-4">
						<div className="charcont">
							<div className="normalfont">
								<b>Features and traits:</b>
								<li>Sneak Attack(Double Dices)</li>
								<li>Cunnin Strike(Bonus AC)</li>
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

export default Azhaar;
