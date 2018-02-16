const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 2020;
app.listen(PORT);
