const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./src/config/keys');
require('./models/mongouser');
require('./services/passport');

mongoose.connect(keys.MONGO_URI);

const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [ keys.COOKIE_KEY ],
	}),
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 2020;
app.listen(PORT);
