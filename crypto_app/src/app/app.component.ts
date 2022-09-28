import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCurrency = "ZAR";

  constructor(private router: Router){

  }

  sendCurrenncy(event: string){
    console.log(event)
  }
  gotoHomePage(){
    this.router.navigate(['']);
  }
}
