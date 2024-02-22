import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public findUser(id: any): Observable<any> {
    return this.http.get(this.baseUrl + 'users/' + id);
  }
}
