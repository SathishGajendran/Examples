var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    path = require('path'),
    useragent = require('express-useragent'),
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

app.use(useragent.express());

var getDeviceDetails = function(useragentData) {
    var ua = useragent.parse(useragentData);
    var deviceType = ua.isMobile ? "Mobile" : ua.isTablet ? "Tablet" : ua.isDesktop ? "Desktop" : ""
    var userDetails = {
        browser: ua.browser,
        browserVersion: ua.version,
        os: ua.os,
        platform: ua.platform,
        deviceType: deviceType
    };
    return userDetails;
};

var ipToBigint = function(ip) {
    var ipSubnet = ip.split('.');
    ipSubnet = ipSubnet.map(function(e) {
        return "00" + e;
    });
    ipSubnet = ipSubnet.map(function(e) {
        return e.slice(-3);
    });
    var value = ipSubnet.join('');
    return parseInt(value);
};

var getIpDetails = function(ip, callback) {
    var ipFormatted = ipToBigint(ip);
    var model = mongoose.model('model', schema, 'appid');
    model.findOne({
        startIpFormatted: {
            $lte: ipFormatted
        },
        endIpFormatted: {
            $gte: ipFormatted
        }
    }).exec(function(err, response) {
        callback(response);
    });
};

app.post('/useragent', function(req, res) {
    var data;
    var sdkVersion = req.body.sdkVersion || req.body.data.sdkVersion;
    switch (sdkVersion) {
        case '2.0.0':
            data = getDeviceDetails(req.body.data.useragent);
            break;
        case '3.0.0':
            data = getDeviceDetails(req.body.data.context.useragent);
            break;
    }
    res.send(data);
});

http.createServer(app).listen(8889, function() {
    console.log("server is running at " + port);
});
