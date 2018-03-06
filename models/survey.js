const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientSchema = require('./recipient');

const SurveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [ recipientSchema ],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	_user: { type: Schema.Types.ObjectId, ref: 'mongouser' },
	dateSent: Date,
	lastResponded: Date,
});

mongoose.model('surveys', SurveySchema);
