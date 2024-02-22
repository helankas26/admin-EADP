import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiscountsService {

  productUrl = environment.productUrl;

  constructor(private http: HttpClient) {
  }

  public saveDiscount(category: any): Observable<any> {
    return this.http.post(this.productUrl + 'categories/create', {
      category: category
    })
  }

  public loadData(page: any, size: any): Observable<any> {
    return this.http.get(this.productUrl + 'discounts/find-all?page=' + page + '&size=' + size)
  }
}
