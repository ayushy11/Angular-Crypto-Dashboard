import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss'],
})
export class CoinListComponent implements OnInit {
  bannerData: any = [];
  allData: any = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllData();
    this.getBannerData();
  }

  getBannerData() {
    this.api
      .getTrendingCurrency('INR')
      .subscribe((data) => (this.bannerData = data));
  }

  getAllData() {
    this.api.getCurrency('INR').subscribe((data) => (this.allData = data));
  }
}
