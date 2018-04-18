const Pusher = require('pusher');

module.exports = (app) => {
	const pusher = new Pusher({
		appId: '503592',
		key: 'bda65458b292dc4b4f5d',
		secret: '0dc1e11f0370fda06ce5',
		cluster: 'us2',
		encrypted: true,
	});

	app.post('/api/message', (req, res) => {
		const payload = req.body;
		pusher.trigger('chat', 'message', payload);
		res.send(payload);
	});
};
