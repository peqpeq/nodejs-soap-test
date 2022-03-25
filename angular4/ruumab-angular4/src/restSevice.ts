export class RestService {
    constructor() {
    }

    static localRestServerUrl = "http://127.0.0.1:8083";
    static localRestServicePath = "sendSoapRequest"; 

    static async sendPostAsync(systemCode: String, name:String, code: String) : Promise<{klientPersonName, klientPersonRegisterCode}> {
    
        let result;
        const response = await fetch(`${this.localRestServerUrl}/${this.localRestServicePath}?systemCode=${systemCode}&name=${name}&code=${code}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
         })

         //Then with the data from the response in JSON... 
        .then((data) => {
           console.log('Success:', data);
           result = data;
         })
         
         //Then with the error genereted...
         .catch((error) => {
           console.error('Error:', error);
         });

         return result;

    }

}