const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const con = require('./db');

// app.use(express.json());
app.use(cors({origin: true, credentials: true}));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res) => {
    res.send("Node server acting as api");
});

app.post('/signup', (req, res) => {
	let user = req.body;
	con.connect(err => {
		if (err) throw err;
		console.log("connected");
		con.query("USE sql6461103", (err, result) => {
			if (err) console.log(err);
		});
		con.query("INSERT INTO user (email, password) VALUE " + "('" + user.email + "', '" + user.password + "')", (err, result) => {
			if (err) console.log(err);
			console.log('User created!');
			res.send("User created");
		});
	})
});

app.post('/login', (req, res) => {
	let user = req.body;
	con.connect(err => {
		if (err) throw err;
		console.log("connected");
		con.query("USE sql6461103", (err, result) => {
			if (err) console.log(err);
		});
		con.query("SELECT email, password FROM user WHERE email = '" + user.email + "'", (err, result) => {
			if (err) console.log(err);
			
			if (result[0].password === user.password) {
				console.log("Successfully Logged in!");
				res.send("Successfully logged in!");
			}
		})
	})
});

app.listen(process.env.PORT, () => {
    console.log("server running on " + process.env.PORT);
});