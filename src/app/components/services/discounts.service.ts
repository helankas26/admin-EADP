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

  public saveDiscount(
    discountTitle: any,
    discountType: any,
    discount: any,
    product: any,
  ): Observable<any> {
    return this.http.post(this.productUrl + 'discounts/create', {
      discountTitle: discountTitle,
      discountType: discountType,
      discount: discount,
      productId: product
    })
  }

  public loadData(page: any, size: any): Observable<any> {
    return this.http.get(this.productUrl + 'discounts/find-all?page=' + page + '&size=' + size)
  }
}
