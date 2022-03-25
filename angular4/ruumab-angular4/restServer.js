const soap = require('soap');
const express = require('express')

const soapEndpoint = "http://nikita-work:8088/soapMock?WSDL";
const serverHostname = '127.0.0.1';
const serverPort = 8083;

const app = express();

var clientGlobal;  


initializeSoapClient()
    .then(startServer);

function initializeSoapClient() {
    return new Promise((resolve, reject) => {

        soap.createClient(soapEndpoint , function(err, client) {
            if (err) throw err;
            
            this.clientGlobal = client;
            resolve();
            console.log("Soap client has been succesfully  initialized.")
        })
    });
}

function startServer() {

    // Todo maybe It's not okey to allow everything
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });


      // Declare GET action
     app.get('/sendSoapRequest', function (req, res) {
        console.log("Got GET request on /sendSoapRequest");
        console.log('Got query:', req.query);
        let record = sendSoapRequest(req.query.systemCode, req.query.name, req.query.code)

        res.send(JSON.stringify(record))

        console.log('GET response was sent:', record);

     })

     // Start the server
     var server = app.listen(serverPort, serverHostname, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("Example app listening at http://%s:%s", host, port)
     })

}


function sendSoapRequest(systemCode, name, code) {
        

    var record;

            this.clientGlobal.KBServicePortService.KBServicePortSoap11.klientideOtsing({'epm:systeem_id': systemCode, 'epm:nimi': name, 'epm:kood': code}, function(err, result) {
                if (err) throw err;
        
                let klient = result.kliendid.klient[0];
        
                let recordFromSoap = {klientPersonName: klient.jur_isik.nimi, klientPersonRegisterCode: klient.jur_isik.registrikood }
                console.log("recordFromSoap", recordFromSoap)
                record = recordFromSoap;
                
            });
            
            
        return record;
    
}

