const express = require('express');
const app = express();
const fs = require('fs');
const port = 4000;
const hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => text.toUpperCase());
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
app.use((req, res, next) => {
	const time = new Date().toString();
	// if (1 == 1) {
	// 	console.log(`You visited this app at ${time}`);
	// 	fs.appendFile(
	// 		'server.log',
	// 		` IP: ${req.ip}, Hostname: ${req.hostname} ` + '\n',
	// 		(error) => console.log(error)
	// 	);
	// 	res.render('maintenance.hbs');
	// } else {
	next();
	// }
});
app.get('/', (req, res) =>
	res.render('welcome.hbs', {
		welcomeMessage: 'Welcome to my new Node app',
		pageTitle: 'Welcome',
	})
);

app.get('/about', (req, res) =>
	res.render('about.hbs', {
		pageTitle: 'About Page',
	})
);

app.get('/projects', (req, res) => {
	res.render('projects.hbs', {
		pageTitle: 'My Projects',
		projectDetails: [
			{
				name: 'nodejs app',
			},
			{
				name: 'php app',
			},
			{
				name: 'react app',
			},
			{
				name: 'laravel app',
			},
			{
				name: 'vuejs app',
			},
		],
	});
});
app.get('/bad', (req, res) =>
	res.send(
		{
			errorMessage: 'unable to process your request',
		},
		400
	)
);
app.listen(process.env.PORT || port, () =>
	console.log(`Example app listening on port ${port}!`)
);
