import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Wang extends Component {
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
					url="https://www.youtube.com/watch?v=2g-wBrU9keE"
					height={0}
					width={0}
					loop={true}
					playing={playing}
				/>
				<div className="row">
					<div className="col-md-3 centered">
						<div className="topplayer charcont centered">
							{this.renderplaybutton()}
							<h5 className="centered">Wang's Theme</h5>
						</div>
					</div>
					<div className="col-md-9 centered">
						<h5 className="centered">
							<b>Wang Shei</b>
						</h5>
						<div className="charcont">
							<div className="row">
								<div className="col-md-4 normalfont">
									<b>Class:</b> Monk
								</div>
								<div className="col-md-4 normalfont">
									<b>Background:</b> Ex-Master
								</div>
								<div className="col-md-4 normalfont">
									<b>Race:</b> Human
								</div>
								<div className="row">
									<div className="col-md-4 normalfont">
										<b>Aligment:</b> Lawful Good
									</div>
									<div className="col-md-4 normalfont">
										<b>Hit Dice:</b> 1d8
									</div>
									<div className="col-md-4 normalfont">
										<b>Languages:</b> Chinese
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
								src="https://i.imgur.com/szzkm7J.jpg"
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
									<b>Ki:</b> 3 Pt/S
								</div>
								<div className="col-md-4 normalfont">
									<b>Armor class:</b> 16
								</div>
								<div className="row">
									<div className="col-md-4 normalfont">
										<b>Initiative:</b> +4
									</div>
									<div className="col-md-4 normalfont">
										<b>Speed:</b> 50
									</div>
									<div className="col-md-4 normalfont">
										<b>Current Hit Points:</b> 22
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
								<li>Philosopher</li>
								<li>Pacifist</li>
								<li>Master</li>
							</div>
						</div>
						<div className="charcont">
							<div className="normalfont">
								<b>Ideals:</b>
								<li>Wisdom seeker</li>
								<li>Illumination</li>
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
									<b>18</b>(+4)
									<div className="basicfont">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Constitution</p>
								<div className="charcont">
									<b>14</b>(+2)
									<div className="basicfont">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Intelligence</p>
								<div className="charcont">
									<b>10</b>(+0)
									<div className="basicfont">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="outsidefont">Wisdom</p>
								<div className="charcont">
									<b>14</b>(+2)
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
								<li>Elder</li>
								<li>Fragile</li>
							</div>
						</div>
						<div className="charcont">
							<div className="normalfont">
								<b>Bond:</b>
								<li>Caring for his students</li>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="charcont">
							<div className="normalfont">
								<b>Ki(Regenerate Points):</b>
								<li>Flurry of Blows(1 Ki=+2 Unarmed)</li>
								<li>Patient Defense(1 Ki=Dodge)</li>
								<li>Step of Wind(1 Ki=Disengage/Dash)</li>
							</div>
						</div>
					</div>

					<div className="col-md-1" />
					<div className="col-md-4">
						<div className="charcont">
							<div className="normalfont">
								<b>Features and traits:</b>
								<li>Monastic Tradition:</li>
								<li>Open Hand Technique</li>
								<li>Deflect Missiles:</li>
								<li>If Deflected = 1d10 + DexMod + MonkLvl</li>
								<li>If Damage = 0, + 1 Ki with Ranged Attack</li>
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

export default Wang;
