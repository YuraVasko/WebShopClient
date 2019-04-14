import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment'

import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get(environment.serverDomain + 'get/categories');
  }

  addCategoryToItem(itemId: Number, categoryName: String) {
    let headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + localStorage.currentUser);

    let body = {
      itemId: itemId,
      categoryName: categoryName
    };

    return this.http.post(environment.serverDomain + 'add/category/to/item', body, { headers: headers })
  }

  addNewCategory(newCategory: Category) {
    let headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + localStorage.currentUser);

    let body = newCategory;

    return this.http.post(environment.serverDomain + 'add/category', body, { headers: headers });
  }

  deleteCategory(categoryId: Number) {
    let headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + localStorage.currentUser);

    let body = {
      categoryId: categoryId
    };

    return this.http.post(environment.serverDomain + 'delete/category', body, { headers: headers });
  }
}
