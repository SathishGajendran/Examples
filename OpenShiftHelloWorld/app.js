// Application Main file

var express = require('express'),
	bodyParser = require('body-parser'),
	http = require('http'),
	app = express();

var ipAddr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
app.set('port', port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.get('/test', function(req, res) {
	res.send('Everything is Fine');
});

app.get('/',function(req,res){
	res.send('Hello World!!!');
})
app.use(function(req, res, next) {
	res.send({
		msg: 'Invalid'
	});
});

http.createServer(app).listen(port, ipAddr, function() {
	console.log("Server is listening at " + port);
});

process.on('exit', function() {
	console.log("Server is stoped " + new Date());
});

['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
	'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
].forEach(function(element, index, array) {
	process.on(element, function() {
		process.exit(1);
	});
});