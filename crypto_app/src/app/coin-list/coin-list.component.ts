import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  bannerData: any = [];

  constructor(private api: ApiService ) { }

  ngOnInit(): void {
    this.getAllData();
    this.getBannerData();
  }

  getBannerData(){
    this.api.getTrendingCurrency("ZAR")
      .subscribe(res => {
        console.log(res)
        this.bannerData = res
      })
  }

  getAllData(){
    this.api.getCurrency("ZAR")
      .subscribe(res => {
        console.log(res)
      })
  }
}
