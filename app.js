const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get('PORT') || 8080;

async function start() {
	try {
		await mongoose.connect(config.get('MONGO_CONNECTION_STRING'), {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		app.listen(PORT, () => {
			console.log(`Server has been started on port ${PORT}`);
		});
	} catch (e) {
		console.log('Server error', e.message);
    process.exit(1)
	}
}


start();