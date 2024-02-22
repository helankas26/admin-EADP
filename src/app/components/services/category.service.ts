import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  productUrl = environment.productUrl;

  constructor(private http: HttpClient) {
  }

  public saveCategory(category: any): Observable<any> {
    return this.http.post(this.productUrl + 'categories/create', {
      category: category
    })
  }

  public loadData(page: any, size: any): Observable<any> {
    return this.http.get(this.productUrl + 'categories/find-all?page=' + page + '&size=' + size)
  }
}
