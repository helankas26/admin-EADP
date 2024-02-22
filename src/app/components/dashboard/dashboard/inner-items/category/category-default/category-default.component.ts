import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {CategoryService} from "../../../../../services/category.service";

@Component({
  selector: 'app-category-default',
  standalone: true,
  imports: [
    MatPaginator,
    ReactiveFormsModule,
    MatButton
  ],
  templateUrl: './category-default.component.html',
  styleUrl: './category-default.component.scss'
})
export class CategoryDefaultComponent implements AfterViewInit, OnInit {
  page: any = 0;
  size: any = 10;
  dataArray: any[] = [];
  count = 0;

  form = new FormGroup({
    category: new FormControl('', Validators.required)
  });

  constructor(private categoryService: CategoryService) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.loadData();
  }


  private loadData() {
    this.categoryService.loadData(this.page, this.size).subscribe(response => {
      console.log(response);
      this.dataArray = response?.dataList;
      this.count = response?.count;
    })
  }

  getServerData(pageData: any) {
    this.page = pageData.pageIndex;
    this.size = pageData.pageSize;
    this.loadData();
  }

  showProduct(id: any) {
    // need to implement the code
  }

  saveCategory() {
    this.categoryService.saveCategory(
      this.form.value.category
    ).subscribe(response => {
      console.log('data saved');
      this.loadData();
      this.form.patchValue({category: ''})
    })
  }
}
