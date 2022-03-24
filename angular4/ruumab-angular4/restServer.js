const soapUrl = "http://nikita-work:8088/soapMock?WSDL";
const serverHostname = '127.0.0.1';
const serverPort = 8082;

run();


function run() {
    
    const express = require('express')
    const bodyParser = require('body-parser');

    var app = express();
    app.use(bodyParser.json());


    // Todo maybe It's not okey to allow everything
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });



    // Declare POST action
     app.post('/sendSoapRequest', function (req, res) {
        console.log("Got POST request on /sendSoapRequest");
        console.log('Got body:', req.body);

        // Validate the data
        if(req.body.name === undefined || req.body.code === undefined ) {
            res.sendStatus(400);
            return; 
        }


        sendSoapRequest(req.body.name, req.body.code);
        res.sendStatus(200);

     })



     // Start the server
     var server = app.listen(serverPort, serverHostname, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("Example app listening at http://%s:%s", host, port)
     })

}


function sendSoapRequest(name, code) {
    console.log("Sending SOAP request to %s ...", soapUrl)

    var soap = require('soap');

    // TODO Currently sending request on a Mock service

    soap.createClient(soapUrl, function(err, client) {
        if (err) throw err;
        console.log(client.describe().KBServicePortService.KBServicePortSoap11);

    });
    console.log("Soap request was sent.")
}

