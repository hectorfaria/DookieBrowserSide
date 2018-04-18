const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./src/config/keys');
const bodyParser = require('body-parser');
const Pusher = require('pusher');
const cors = require('cors');
require('./models/mongouser');
require('./models/survey');
require('./services/passport');

mongoose.connect(keys.MONGO_URI);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [ keys.COOKIE_KEY ],
	}),
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/chatRoutes')(app);
const PORT = process.env.PORT || 2020;
app.listen(PORT);
/*

appId: '503592',
  key: 'bda65458b292dc4b4f5d',
  secret: '0dc1e11f0370fda06ce5',
  cluster: 'us2',
  encrypted: true*/
