
// startHttp();
startSoapServer();





function startSoapServer() {
    const http = require('http');
    var soap = require('soap');
    var url = 'assets/wsdl/kliendibaas_test.wsdl';
    var args = {name: 'value'};

    var xml = require('fs').readFileSync('assets/wsdl/kliendibaas_test.wsdl', 'utf8');

    


    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
    });



    var myService = {
        MyService: {
            MyPort: {
                MyFunction: function(args) {
                    return {
                        name: args.name
                    };
                },
  
                // This is how to define an asynchronous function with a callback.
                MyAsyncFunction: function(args, callback) {
                    // do some work
                    callback({
                        name: args.name
                    });
                },
  
                // This is how to define an asynchronous function with a Promise.
                MyPromiseFunction: function(args) {
                    return new Promise((resolve) => {
                      // do some work
                      resolve({
                        name: args.name
                      });
                    });
                },
  
                // This is how to receive incoming headers
                HeadersAwareFunction: function(args, cb, headers) {
                    return {
                        name: headers.Token
                    };
                },
  
                // You can also inspect the original `req`
                reallyDetailedFunction: function(args, cb, headers, req) {
                    console.log('SOAP `reallyDetailedFunction` request from ' + req.connection.remoteAddress);
                    return {
                        name: headers.Token
                    };
                }
            }
        }
    };




    soap.listen(server, {
        // Server options.
        path: 'assets/wsdl',
        services: myService,
        xml: xml,
    
        // WSDL options.
        attributesKey: 'theAttrs',
        valueKey: 'theVal',
        xmlKey: 'theXml'
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
        });
}

function startHttp(){
    const http = require('http');

    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
    });

    server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });


}