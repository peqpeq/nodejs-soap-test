import { Component, OnInit } from '@angular/core';
import { RestService } from 'restSevice';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

requestResult: boolean = false;
  constructor() { }

  async ngOnInit() {
  
  }


  async onClickAsync() {
    this.requestResult = await RestService.sendPostAsync("AS TARTU AGRO", "mama", "31");
  }
  async onReset() {
    this.requestResult = false;
  }
}
