import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchMovies } from '../actions';

class Movies extends Component {
	componentDidMount() {
		this.props.FetchMovies();
	}

	renderMovs() {
		const movies = this.props.movie;
		return Object.keys(movies).map((id) => {
			const movie = movies[id];
			return (
				<div className="col-md-6" key={id}>
					<li className="list-group-item blogpost container-fluid" key={id}>
						<div className="titlefont">{movie.title}</div>
						<img className="logohomemain img-fluid" src={movie.content} alt="moviepost" />
						<div className="font-para">{movie.categories}</div>
					</li>
				</div>
			);
		});
	}

	render() {
		const { movie } = this.props;

		if (!movie) {
			return <div className="cont titlefont">Loading...</div>;
		}
		return (
			<div>
				<div className="modalfix backgroundy">
					<img className="logohomemain img-fluid" src="https://i.imgur.com/0DkUC6m.png" alt="sudookie" />
				</div>
				<a href="https://discord.gg/yrUEhEJ">
					<button type="button" className="btn btn-primary discord-btn logohome">
						Join the Discord <i className="fab fa-discord" />
					</button>
				</a>
				<div className="blogpost cont">
					<div className="font-para">
						Note: all subtitles and dubs are in <b>NORWEGIAN</b> and the time will be discussed in the
						Discord Server including the option of changing the subtitles to English.
					</div>
				</div>
				<ul className="list-group">
					{this.renderMovs()}
					<div className="col-md-6" key="vote">
						<li className="list-group-item blogpost cont">
							<iframe
								src="http://www.strawpoll.me/embed_1/15055031"
								width="300"
								height="510"
								title="votenext"
							>
								Loading poll...
							</iframe>
						</li>
					</div>
				</ul>
			</div>
		);
	}
}

function mapstate2props(state) {
	return { movie: state.movie };
}
export default connect(mapstate2props, { FetchMovies })(Movies);
