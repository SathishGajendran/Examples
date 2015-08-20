/**
 * Created by Sathish.G on 8/19/15.
 */

var express = require('express');
var fs      = require('fs');
var http=require('http');
var bodyParser=require('body-parser');
var path=require('path');

var SampleApp = function() {
    var self = this;
    self.setupVariables = function() {
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

        if (typeof self.ipaddress === "undefined") {
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };

    self.terminator = function(sig){
        if (typeof sig === "string") {
            console.log('%s: Received %s - terminating sample app ...',
                Date(Date.now()), sig);
            process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };

    self.setupTerminationHandlers = function(){
        process.on('exit', function() { self.terminator(); });
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
            'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
                process.on(element, function() { self.terminator(element); });
            });
    };

    self.initializeServer = function() {
        var app=self.app=express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
        app.engine('html',require('ejs').renderFile);

        app.set('view engine','html');
        app.set('views',path.join(__dirname,'views'));
        app.get('/',function(req,res){
           res.render('index');
        });
        app.get('/test',function(req,res){
            res.send('Working !!!');
        });
    };

    self.initialize = function() {
        self.setupVariables();
        self.setupTerminationHandlers();
        self.initializeServer();
    };

    self.start = function() {
        //  Start the app on the specific interface (and port).
        http.createServer(self.app).listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                Date(Date.now() ), self.ipaddress, self.port);
        });
    };

};

var zapp = new SampleApp();
zapp.initialize();
zapp.start();

