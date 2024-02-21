import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

  constructor(private cookieService: CookieService) {
  }

  public createToken(value: any) {
    this.cookieService.set('token', value, 30, '/');
  }

  public isTokenExists(): boolean {
    return this.cookieService.check('token');
  }

  public removeToken() {
    if (this.isTokenExists()) {
      this.cookieService.delete('token');
    }
  }

  public getToken(): string {
    /*   if (this.isTokenExists()) {
         return this.cookieService.get('token');
       }
       return '';*/
    return this.isTokenExists() ? this.cookieService.get('token') : '';
  }
}
