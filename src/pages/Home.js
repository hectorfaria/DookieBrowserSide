import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchMovies } from '../actions';
import { Link } from 'react-router-dom';

class Home extends Component {
	componentDidMount() {
		this.props.FetchMovies();
	}

	renderMovs() {
		const movies = this.props.movie;
		return Object.keys(movies).map((id) => {
			const movie = movies[id];
			return (
				<div className="col-md-6" key={id}>
					<li className="containers" key={id}>
						<div className="containers--title container-fluid pacifico">{movie.title}</div>
						<img className="containers__imgs img-fluid" src={movie.content} alt="moviepost" />
						<div className="containers--para quicksand">{movie.categories}</div>
					</li>
				</div>
			);
		});
	}

	render() {
		const { movie } = this.props;

		if (!movie) {
			return <div className="container">Loading...</div>;
		}
		return (
			<div>
				<div className="u-padding-8 home-background">
					<img
						className="display-block-auto img-fluid"
						src="https://data.whicdn.com/images/97429737/original.png"
						alt="dookie"
					/>
				</div>
				<div className="row">
					<div className="col-md-6">
						<a href="https://discord.gg/8ptUM3d">
							<button type="button" className="margin-center btn btn--discord quicksand">
								Join the Discord <i className="fab fa-discord" />
							</button>
						</a>
					</div>
					<div className="col-md-6">
						<Link to="/posts" className="margin-center btn container quicksand">
							Suggest a movie
						</Link>
					</div>
				</div>
				<ul className="list-group">{this.renderMovs()}</ul>
			</div>
		);
	}
}

function mapstate2props({ movie }) {
	return { movie };
}
export default connect(mapstate2props, { FetchMovies })(Home);
