import { Component, OnInit } from '@angular/core';
import { RestService } from 'restSevice';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

requestResult: boolean = false;

constructor(private restService: RestService) {   }

  async ngOnInit() {
    console.log("City Component Init");
  
  }


  onClickAsync() {
     this.restService.sendPost("AS TARTU AGRO", "mama", "31").then( (result) => {console.log("RESULT ", result)});
  }
}
