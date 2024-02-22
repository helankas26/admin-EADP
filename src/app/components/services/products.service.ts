import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productUrl = environment.productUrl;

  constructor(private http: HttpClient) {
  }


  public loadData(page: any, size: any): Observable<any> {
    return this.http.get(this.productUrl + 'products/find-all?page=' + page + '&size=' + size)
  }
}
