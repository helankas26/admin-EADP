import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {CustomersService} from "../../../../../services/customers.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {NgForOf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, Subscription} from "rxjs";


@Component({
  selector: 'app-customer-default',
  standalone: true,
  imports: [
    MatButton,
    MatPaginator,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './customer-default.component.html',
  styleUrl: './customer-default.component.scss'
})
export class CustomerDefaultComponent implements AfterViewInit, OnInit {
  mform: FormGroup = new FormGroup({
    text: new FormControl()
  });

  // @ts-ignore
  obs: Subscription;

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
    this.obs = this.mform.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(data => {
        this.searchText = data.text;
        this.loadCustomers();
      });

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
