export class RestService {
    constructor() {
    }

    static localRestServerUrl = "http://127.0.0.1:8082";
    static localRestServicePath = "sendSoapRequest"; 

    static async sendPostAsync(systemCode: String, name:String, code: String) : Promise<boolean> {
    
        let result;
        const response = await fetch(`${this.localRestServerUrl}/${this.localRestServicePath}?systemCode=${systemCode}&name=${name}&code=${code}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
         })

         //Then with the data from the response in JSON... 
        .then((data) => {
           return data.json();
         }).then( (requestResult) => {
          // console.log('Success body:', requestResult);
          
          // Set result
          result = requestResult;
         })
         
         //Then with the error genereted...
         .catch((error) => {
           console.error('Error:', error);
         });

         return result;

    }

}