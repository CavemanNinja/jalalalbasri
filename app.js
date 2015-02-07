var express = require('express');
var jade = require('jade');
var errorhandler = require('errorhandler');
var morgan = require('morgan');
var nodemailer = require('nodemailer');
var bodyparser = require('body-parser');

var app = express();
var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyparser());

if (env == 'development') {
  app.use(errorhandler());
}

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "tamiozwebsite@gmail.com",
        pass: "vua7wj6m"
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "", // sender address
    to: "jalal.albasri@gmail.com, jalal.albasri@live.com", // list of receivers
    subject: "", // Subject line
    text: "", // plaintext body
}

app.get('/', function(req, res){
  res.render('index', {title: "Jalal Albasri"});
});

app.post('/', function(req, res){
	
  	mailOptions["subject"] = "JALALALBASRI.COM: " + req.body.name + ", " + req.body.email;
	mailOptions["from"] = req.body.email;
	mailOptions["text"] = 
		"Name: " + req.body.name + ", " +
	  	"Email " + req.body.email + ", " + 
	  	"Message " + req.body.about;

	smtpTransport.sendMail(mailOptions, function(error){
	if (error) {
	    console.log(error);
	    res.send(500).end();
	}

	else {
	    console.log("Message sent: " + res.message);
	    res.send(200).end();
	}

	//smtpTransport.close(); // shut down the connection pool

	});
});


var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});

