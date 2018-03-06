const mongoose = require('mongoose');
const RequireLogin = require('../middlewares/requireLogin');
const RequireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveytemplate = require('../services/mailtemplates/surveytemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
	app.post('/api/surveys', RequireLogin, RequireCredits, async (req, res) => {
		const { title, subject, body, recipients } = req.body;

		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(',').map((email) => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now(),
		});

		const mailer = new Mailer(survey, surveytemplate(survey));
		try {
			await mailer.send();
			await survey.save();
			req.user.credits -= 1;
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(422);
		}
	});

	app.get('/api/surveys/thankyou', async (req, res) => {
		res.send('Thanks for voting!');
	});
};
