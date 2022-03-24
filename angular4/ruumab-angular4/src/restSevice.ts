export class RestService {
    constructor() {
    }

    static serverUrl = "http://127.0.0.1:8082";
    
    static async sendPostAsync(name:String, code: String) {
    
        let content = {name: name, code: code}; 
        const response = await fetch(this.serverUrl + "/sendSoapRequest", {
            method: 'POST',
            body: JSON.stringify(content),
            headers: {'Content-Type': 'application/json'}
         })

         //Then with the data from the response in JSON... 
        .then((data) => {
           console.log('Success:', data);
         })
         
         //Then with the error genereted...
         .catch((error) => {
           console.error('Error:', error);
         });

    }

}