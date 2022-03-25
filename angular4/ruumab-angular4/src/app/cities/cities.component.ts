import { Component, OnInit } from '@angular/core';
import { RestService } from 'restSevice';

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

  result = {klientPersonName: "test", klientPersonRegisterCode: "test"};
  constructor() { }

  async ngOnInit() {
    console.log("City Component Init");
  
  }


  async onClick() {
    console.log("BUTTON WAS CLICKED")
    this.result = await RestService.sendPostAsync("AS TARTU AGRO", "mama", "31");
  }
}
