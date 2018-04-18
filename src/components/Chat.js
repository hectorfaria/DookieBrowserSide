import React, { Component } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatBox from './chat-component/Chatbox';
import shortid from 'shortid';
import { connect } from 'react-redux';
import VideoStream from './chat-component/VideoStream';

class Chat extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			username: '',
			chats: [],
		};
	}

	componentDidMount() {
		const pusher = new Pusher('bda65458b292dc4b4f5d', {
			cluster: 'us2',
			encrypted: true,
		});
		const channel = pusher.subscribe('chat');
		channel.bind('message', (data) => {
			this.setState({
				chats: [ ...this.state.chats, data ],
				test: '',
			});
		});
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	setUser(e) {
		switch (this.props.auth) {
			case null:
				return e;
			case false:
				return (e = 'Anon');
			default:
				return (e = this.props.auth.userName);
		}
	}

	scrollToBottom() {
		this.el.scrollIntoView({ behavior: 'smooth' });
	}
	handleTextChange(e) {
		const setUser = this.setUser();
		this.setState({ username: setUser });
		if (e.key === 'Enter') {
			const payload = {
				username: this.state.username,
				message: this.state.text,
			};
			if (this.state.text === '') {
				return e;
			}

			e.preventDefault();
			e.target.value = '';
			axios.post('http://localhost:2020/api/message', payload);
		}
		this.setState({ text: e.target.value });
	}

	render() {
		const { chats } = this.state;

		return (
			<div className="row scroll-y-hidden">
				<div className="col-md-9 ">
					<VideoStream />
				</div>
				<div className=" col-md-3 ">
					<div className="chat-box__title-cont">
						<h1 className="titles pacifico">Chat</h1>
					</div>
					<div className="chat-box__boxlist">
						{chats.map((chat) => {
							return (
								<div key={shortid.generate()}>
									<ul className="row">
										<li className="chat-box__message">
											<p className="quicksand">
												<strong className="pacifico">{chat.username}</strong>
												:{chat.message}
											</p>
										</li>
									</ul>
								</div>
							);
						})}
						<div
							ref={(el) => {
								this.el = el;
							}}
						/>
					</div>

					<ChatBox
						text={this.state.text}
						username={this.setUser()}
						handleTextChange={this.handleTextChange}
					/>
				</div>
			</div>
		);
	}
}
function mapstate2props({ auth }) {
	return { auth };
}
export default connect(mapstate2props)(Chat);

// onClick={() => scroll.scrollToBottom()
