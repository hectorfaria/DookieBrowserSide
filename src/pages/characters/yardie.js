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
					url="https://www.youtube.com/watch?v=NPYms2pHFuU"
					height={0}
					width={0}
					loop={true}
					playing={playing}
				/>
				<div className="row">
					<div className="col-md-3 ">
						<div className="characters__statscard">
							{this.renderplaybutton()}
							<h5>Yardie's Theme</h5>
						</div>
					</div>
					<div className="col-md-9 ">
						<h5 className="titles">
							<b>Yardie Yardieson</b>
						</h5>
						<div className="characters__statscard">
							<div className="row">
								<div className="col-md-4 ">
									<b>Class:</b> Bard
								</div>
								<div className="col-md-4 ">
									<b>Background:</b> Business Man
								</div>
								<div className="col-md-4 ">
									<b>Race:</b> Mountain Dwarf
								</div>
								<div className="row">
									<div className="col-md-4 ">
										<b>Aligment:</b> Neutral Evil
									</div>
									<div className="col-md-4 ">
										<b>Hit Dice:</b> 1d8
									</div>
									<div className="col-md-4 ">
										<b>Languages:</b> Dwarvish
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<div className="characters__statscard">
							<img
								className="img-fluid"
								src="https://i.pinimg.com/736x/83/1e/e4/831ee456de7c7df8b5b77b63d6c516fc--armies-the-army.jpg"
								alt="Yardie"
							/>
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
									<b>Armor class:</b> 12
								</div>
								<div className="row">
									<div className="col-md-4">
										<b>Initiative:</b> +1
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
							<div className="">
								<b>Personality Traits:</b>
								<li>Social</li>
								<li>Honorable</li>
								<li>Greedy</li>
							</div>
						</div>
						<div className="characters__statscard">
							<div className="">
								<b>Ideals:</b>
								<li>Having more glory than his father</li>
							</div>
						</div>
					</div>
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-2">
								<p className="titles-sm">Strength</p>
								<div className="characters__statscard">
									<b>14</b>(+2)
									<div className="">
										<li> Athletics</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Dexterity</p>
								<div className="characters__statscard">
									<b>14</b>(+1)
									<div className="">
										<li>Sleight of Hand</li>
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Constitution</p>
								<div className="characters__statscard">
									<b>15</b>(+2)
									<div className="">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Intelligence</p>
								<div className="characters__statscard">
									<b>11</b>(0)
									<div className="">
										<li>Investig</li>
										<li>Religion</li>
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Wisdom</p>
								<div className="characters__statscard">
									<b>8</b>(-1)
									<div className="">
										<li>None</li>
										<ul />
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<p className="titles-sm">Charisma</p>
								<div className="characters__statscard">
									<b>18</b>(+4)
									<div className="">
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
						<div className="characters__statscard">
							<div className="">
								<b>Flaws:</b>
								<li>Backstabber</li>
								<li>Hates his father</li>
								<li>Greedy</li>
							</div>
						</div>
						<div className="characters__statscard">
							<div className="">
								<b>Bond:</b>
								<li>Glory Seeker</li>
								<li>Redemption</li>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="characters__statscard">
							<div className="">
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
						<div className="characters__statscard">
							<div className="">
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

export default Yardie;
