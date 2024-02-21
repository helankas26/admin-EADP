import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public findCustomers(page: any, size: any, searchText: any): Observable<any> {
    return this.http.get(this.baseUrl + 'users?page=' + page + '&size=' + size + '&searchText=' + searchText)
  }
}
