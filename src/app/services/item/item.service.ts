import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { CatalogItem } from 'src/app/models/catalogItem'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAllItems(pageNumer: Number) : Observable<CatalogItem[]> {
    return this.http.get<CatalogItem[]>(environment.serverDomain + 'get/items/page/'+pageNumer);
  }

  getCategoryAllItems(categoryName: String) {
    return this.http.get(environment.serverDomain + 'get/items/' + categoryName);
  }

  getItemDetails(itemId: Number) : Observable<CatalogItem> {
    return this.http.get<CatalogItem>(environment.serverDomain + '/item/' + itemId);
  }

  deleteItem(itemId: Number) {
    
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }

    return this.http.post(environment.serverDomain +'delete/item', itemId, { headers: headers });
  }

  addNewItem(item: CatalogItem) {

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }

    let body = item;

    return this.http.post(environment.serverDomain + 'add/item', body, { headers: headers });
  }

  addItemToCart (userName: String, itemId: Number) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }

    let body = {
      userId: userName,
      itemId:itemId
    }

    return this.http.post(environment.serverDomain + 'add/item/in/cart', body, { headers: headers });
  }

  getCartAllItems(userName: String, pageNumber: Number) : Observable<CatalogItem[]>{
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }

    return this.http.get<CatalogItem[]>(environment.serverDomain + "user/cart/" + userName+"/page/"+pageNumber, { headers: headers });
  }

  deleteItemFromCart(userName: String, itemId: Number) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }

    let body = {
      userId: userName,
      itemId:itemId
    }

    return this.http.post(environment.serverDomain + 'delete/item/from/cart', body, { headers: headers });
  }

  clearCart(userName: String) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    
    let body = {
      userId: userName,
    }

    return this.http.post(environment.serverDomain + 'clear/cart', body, { headers: headers });
  }

  submitPurchase(userName: String) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }

    let body = {
      userId: userName,
    }

    return this.http.post(environment.serverDomain + 'submit/purchase', body, { headers: headers });
  }

  getAllPurchasedItems(userName: String, pageNumber: Number) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }

    return this.http.get<CatalogItem[]>(environment.serverDomain + "user/purchase/" + userName+"/page/"+pageNumber, { headers: headers });
  }
}
