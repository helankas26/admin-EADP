import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  utilityUrl = environment.utilityUrl;

  constructor(private http: HttpClient) {
  }

  public loadData(page: any, size: any, searchText: any): Observable<any> {
    return this.http.get(this.utilityUrl + 'users?page=' + page + '&size=' + size + '&searchText=' + searchText)
  }
}
