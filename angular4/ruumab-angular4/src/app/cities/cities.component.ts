import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cityList = [ { city_name: "Bandung", prov_name: "Jawa Barat" },
               { city_name: "Jakarta", prov_name: "DKI Jakarta" },
               { city_name: "Surabaya", prov_name: "Jawa Timur" },
               { city_name: "Yogyakarta", prov_name: "DI Yogyakarta" },
               { city_name: "Semarang", prov_name: "Jawa Tengah" },
               { city_name: "Medan", prov_name: "Sumatera Utara" },
               { city_name: "Tangerang", prov_name: "Banten" },
               { city_name: "Denpasar", prov_name: "Bali" },
               { city_name: "Makasar", prov_name: "Sulawesi Selatan" }];

  constructor() { }

  async ngOnInit() {
    console.log("City Component Init");
  
    var soap = require('soap');
    var url = 'http://example.com/wsdl?wsdl';
    var args = {name: 'value'};
  
    // then/catch
    soap.createClientAsync(url).then((client) => {
      return client.MyFunctionAsync(args);
    }).then((result) => {
      console.log(result);
    });
  
    // async/await
    var client = await soap.createClientAsync(url);
    var result = await client.MyFunctionAsync(args);
    console.log(await result);
  }

}
