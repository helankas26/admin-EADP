import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {CartService} from "../../../../../services/cart.service";
import {MatButton} from "@angular/material/button";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-cart-default',
  standalone: true,
  imports: [
    MatPaginator,
    MatButton,
    DatePipe
  ],
  templateUrl: './cart-default.component.html',
  styleUrl: './cart-default.component.scss'
})
export class CartDefaultComponent implements AfterViewInit, OnInit {
  page: any = 0;
  size: any = 10;
  searchText: any = '';
  dataArray: any[] = [];
  count = 0;
  pageEvent: PageEvent | undefined;

  constructor(private cartService: CartService) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.loadData();
  }


  private loadData() {
    this.cartService.loadData(this.page, this.size).subscribe(response => {
      console.log(response);
      this.dataArray = response?.dataList;
      this.count = response?.count;
    });
  }

  getServerData(pageData: any) {
    this.page = pageData.pageIndex;
    this.size = pageData.pageSize;
    this.loadData();
  }

  showProduct(id: any) {
    // need to implement the code
  }
}
