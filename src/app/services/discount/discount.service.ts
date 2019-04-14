import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment'

import { Discount } from 'src/app/models/discount';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http: HttpClient) { }

  getAllDiscounts(): Observable<Discount[]> {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.get<Discount[]>(environment.serverDomain + 'all/discounts', { headers: headers });
  }

  addDiscountPerItem(itemId: Number, discountId: Number) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }

    let body = {
      itemId: itemId,
      discountId: discountId
    };
    return this.http.post(environment.serverDomain + 'add/discount/per/item', body, { headers: headers });
  }

  addNewDiscount(discount: Discount) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }

    let body = discount;

    return this.http.post(environment.serverDomain + 'add/new/discount', body, { headers: headers });
  }

  deleteDiscount(discountId: Number) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }

    return this.http.post(environment.serverDomain + 'delete/discount', discountId, { headers: headers });
  }

  removeDiscountFromItem(itemId: Number) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }

    return this.http.post(environment.serverDomain + 'delete/item/discount', itemId, { headers: headers });
  }
}
