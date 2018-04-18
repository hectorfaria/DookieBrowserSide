import React, { Component } from 'react';
import 'videojs-youtube';
import 'video.js/dist/video-js.css';

export default class VideoStream extends Component {
	render() {
		
		return (
			<div>
				<div>
					<video
						className="video-js vjs-default-skin"
						autoPlay="autoplay"
						controls
						preload="none"
						data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=ohQPySWJToo"}] }'
					/>
				</div>
			</div>
		);
	}
}
