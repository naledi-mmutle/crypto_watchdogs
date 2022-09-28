import { Component, OnInit , AfterViewInit, ViewChild} from '@angular/core';
import { ApiService } from '../service/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  bannerData: any = [];

  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

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
        console.log(res);
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
