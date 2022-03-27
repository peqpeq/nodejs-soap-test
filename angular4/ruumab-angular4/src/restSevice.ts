import { Injectable } from "@angular/core";

@Injectable()
export class RestService {
    constructor() {
    }

     localRestServerUrl = "http://127.0.0.1:8082";
     localRestServicePath = "sendSoapRequest"; 

     sendPost(systemCode: String, name: String, code: String) : Promise<Response> {
    
        // let result;
        return fetch(`${this.localRestServerUrl}/${this.localRestServicePath}?systemCode=${systemCode}&name=${name}&code=${code}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
         }).then((data) => {
             return data.json();
           })
    }

}