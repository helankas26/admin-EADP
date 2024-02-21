import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {CustomersService} from "../../../../../services/customers.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-customer-default',
  standalone: true,
  imports: [
    MatButton,
    MatPaginator,
    NgForOf
  ],
  templateUrl: './customer-default.component.html',
  styleUrl: './customer-default.component.scss'
})
export class CustomerDefaultComponent implements AfterViewInit, OnInit {
  constructor(private customerService: CustomersService) {
  }

  controlsOn: boolean = false;

  page: any = 0;
  size: any = 10;
  searchText: any = '';
  dataArray: any[] = [];
  count = 0;
  pageEvent: PageEvent | undefined;

  ngAfterViewInit(): void {
    this.controlsOn = true;
  }

  ngOnInit(): void {
    this.loadCustomers();
  }

  private loadCustomers() {
    this.customerService.findCustomers(this.page, this.size, this.searchText).subscribe(response => {
      this.dataArray = response.data.dataList;
      this.count = response.data.count;
    })
  }

  getServerData(pageData: any) {
    this.page = pageData.pageIndex;
    this.size = pageData.pageSize;
    this.loadCustomers();
  }

}
