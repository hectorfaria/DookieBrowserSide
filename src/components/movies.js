import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Movies extends Component {
	renderMovies() {
		return (
			<div>
				<div className="row">
					<div className="col-md-6">
						<li className="list-group-item blogpost container-fluid">
							<div className="titlefont">Week 1</div>
							<img
								className="img-fluid"
								src="https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-18hpovx_f8238c31.jpeg?region=0,0,300,450"
								alt="the incredibles"
							/>
							<div className="titlefont">The Incredibles</div>
							<p className="font-para">Date: 02/05/2018</p>
						</li>
					</div>
					<div className="col-md-6">
						<li className="list-group-item blogpost container-fluid">
							<div className="titlefont">Week 2</div>
							<img
								className="img-fluid"
								src="https://lumiere-a.akamaihd.net/v1/images/p_thelionking_d52c1c1b.jpeg?region=0%2C0%2C300%2C450"
								alt="the lion king"
							/>
							<div className="titlefont">The Lion King</div>
							<p className="font-para">Date: 02/12/2018</p>
						</li>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<li className="list-group-item blogpost container-fluid">
							<div className="titlefont">Week 3</div>
							<img
								className="img-fluid"
								src="https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-28eg8p_b7a9e470.png?region=0%2C0%2C300%2C450"
								alt="finding nemo"
							/>
							<div className="titlefont">Finding Nemo</div>
							<p className="font-para">Date: 02/19/2018</p>
						</li>
					</div>
					<div className="col-md-6">
						<li className="list-group-item blogpost container-fluid">
							<div className="titlefont">Week 4</div>
							<img
								className="img-fluid"
								src="https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-hnadqs_818bf5b0.jpeg?region=0,0,300,450"
								alt="tarzan"
							/>
							<div className="titlefont">Tarzan</div>
							<p className="font-para">Date: 02/26/2018</p>
						</li>
					</div>
				</div>
				<div className="blogpost cont">
					<div className="font-para">
						Note: all subtitles and dubs are in <bold> NORWEGIAN </bold> and the time will be discussed in
						the Discord Server including the option of changing the subtitles to English.
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div>
				<Helmet>
					<style>{'body { background: url("https://i.imgur.com/HmebxBcr.jpg"); }'}</style>
					<style>{'body { background-repeat: no-repeat ; }'}</style>
					<style>{'body {background-attachment: fixed ; }'}</style>
					<style>{'body {background-size: cover ; }'}</style>
				</Helmet>

				<div className="modalfix">
					<img className="logohomemain img-fluid" src="https://i.imgur.com/0DkUC6m.png" alt="sudookie" />
				</div>
				<a href="https://discord.gg/yrUEhEJ">
					<button type="button" class="btn btn-primary discord-btn logohome">
						Join the Discord <i className="fab fa-discord" />
					</button>
				</a>

				<ul className="list-group brown">{this.renderMovies()}</ul>
			</div>
		);
	}
}

export default Movies;
