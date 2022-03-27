const soap = require('soap');
const express = require('express');

// Server props
const soapEndpoint = "http://nikita-work:8088/soapMock?WSDL";
const serverHostname = '127.0.0.1';
const serverPort = 8082;


const app = express();
var globalClient;

// Initialize soap client  -> then ->  Start the server
initializeSoapClient()
    .then(startServer);


// Soap client initializing function
function initializeSoapClient() {
    return new Promise((resolve, reject) => {
        soap.createClient(soapEndpoint, function (err, client) {
            if (err) throw err;
            this.globalClient = client;
            console.log("Soap client has been succesfully  initialized.")
            resolve(true);
        })
    });
}

// Server starting function
function startServer() {
    // Todo maybe It's not okey to allow everything
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    // Declared GET action
    app.get('/sendSoapRequest', function (req, res) {
        console.log("Got GET request on /sendSoapRequest, query is:", req.query);

        // Send soap request using a function, then send response with a result  
        sendSoapRequest()
        .then((result) => {
            res.send(JSON.stringify(result));
            console.log('GET response was sent:', result);
        })

    });


    // Start the server
    var server = app.listen(serverPort, serverHostname, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("App listening at http://%s:%s", host, port)
    });

}

// Function to send soap requests, returns true(If requested data is existing) or false (If requested data is'nt existing)
function sendSoapRequest(systemCode, name, code) {
    return new Promise((resolve, reject) => {

        // Run method using soap client
        this.globalClient.KBServicePortService.KBServicePortSoap11.klientideOtsing(
            
            // Generate DTO using factory function
            generateSoapRequestObject(systemCode, name, code),
            function (err, result) {
                if (err) throw err;
                resolve(result.kliendid.klient.length !== 0)
            });

    });
}

// Generate object out of arguments
var generateSoapRequestObject = (systemCode, name, code) => { return { 'epm:systeem_id': systemCode, 'epm:nimi': name, 'epm:kood': code }; }

