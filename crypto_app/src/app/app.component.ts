import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCurrency = "ZAR";

  constructor(){

  }

  sendCurrenncy(event: string){
    console.log(event)
  }
}
