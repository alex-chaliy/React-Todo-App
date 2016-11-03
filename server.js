'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const data = require('./data');

const app = express();

app.listen(config.server.port, () => {
	console.log('server listening at http://' + config.server.address + ':' + config.server.port);
});

/*******
* Routes *
********/

/** others **/
	app.use(express.static(__dirname+"/public"));
	app.use('/node_modules', express.static(__dirname+"/node_modules"));
	app.use(bodyParser.json());

/** Tasks **/
	app.get('/tasks', (request, response) => {
		response.send(data.tasks);
	});