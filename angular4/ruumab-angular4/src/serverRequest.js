var soap = require('soap');
var url = 'assets/wsdl/kliendibaas_test.wsdl';
var args = {name: 'value'};

var params = {endpoint: "127.0.0.1:3000"}


  // then/catch


soap.createClientAsync(url, 
    function(err, client) {

        client.KBServicePortSoap11({name: 'value'}, function(err, result, rawResponse, soapHeader, rawRequest) {
            // result is a javascript object
            // rawResponse is the raw xml response string
            // soapHeader is the response soap header as a javascript object
            // rawRequest is the raw xml request string
        })
        console.log(client.describe()); 
        }
    
    , params.endpoint);
