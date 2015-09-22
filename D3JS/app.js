var express = require('express'),
	http = require('http'),
	bodyParser = require('body-parser'),
	path = require('path'),
	fs = require('fs');
app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

var port = process.env.PORT || 8080;

app.set('port', port);

app.get('/', function(req, res) {
	res.render('../index');
});

app.get('/data/:filename', function(req, res) {
	// res.sendFile(path.join(__dirname,"data",req.params.filename+".json"));
	fs.readFile(path.join(__dirname, "data", req.params.filename + ".json"), 'utf-8', function(err, data) {
		var response = {};
		if (!err) {
			response = JSON.stringify(data);
		}
		res.type('application/json').send(response);
	});
});

app.get('/data', function(req, res) {
	var data = [{
		"sale": "23",
		"year": "2000"
	}, {
		"sale": "45",
		"year": "2001"
	}, {
		"sale": "97",
		"year": "2002"
	}, {
		"sale": "56",
		"year": "2003"
	}, {
		"sale": "87",
		"year": "2004"
	}, {
		"sale": "97",
		"year": "2005"
	}, {
		"sale": "56",
		"year": "2006"
	}, {
		"sale": "37",
		"year": "2007"
	}, {
		"sale": "47",
		"year": "2008"
	}, {
		"sale": "76",
		"year": "2009"
	}, {
		"sale": "87",
		"year": "2010"
	}];
	res.type('application/json').send(data);
});


http.createServer(app).listen(8080, function() {
	console.log("server is running at " + port);
});