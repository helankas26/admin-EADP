import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {CartService} from "../../../../../services/cart.service";

@Component({
  selector: 'app-cart-default',
  standalone: true,
  imports: [
    MatPaginator
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
  }


  private loadData() {
    this.cartService.loadData(this.page, this.size, this.searchText).subscribe(response => {
      console.log(response);
      // this.dataArray = response.data.dataList;
      // this.count = response.data.count;
    })
  }

  getServerData(pageData: any) {
    this.page = pageData.pageIndex;
    this.size = pageData.pageSize;
    this.loadData();
  }

}
