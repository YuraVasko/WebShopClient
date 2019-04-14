import { Component, OnInit } from '@angular/core';

import { CatalogItem } from 'src/app/models/catalogItem';
import { ItemService } from '../services/item/item.service';
import { DiscountService } from '../services/discount/discount.service';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private itemService: ItemService, 
    private discountService: DiscountService, 
    private userService: UserService,
    private router: Router) { }

  items = new Array<CatalogItem>();
  pageNumber : number;
  ngOnInit() {
    this.pageNumber = 1;
    this.userRole = this.userService.getUserRoleFromToken();
    this.itemService.getAllItems(this.pageNumber).subscribe((data) => {
      this.items = data;
    }, (error) => { window.alert("Something goes wrong") });
  }

  deleteItemClick(itemId: Number) {
    this.itemService.deleteItem(itemId).subscribe(() => {
      this.itemService.getAllItems(this.pageNumber).subscribe((data) => {
        this.items = data;
      }, (error) => { window.alert("Something goes wrong") });
    }, () => ("Something go wrong"));
  }

  removeDiscountClick(itemId: Number) {
    this.discountService.removeDiscountFromItem(itemId).subscribe(() => {
      this.itemService.getAllItems(this.pageNumber).subscribe((data) => {
        this.items = data;
      }, (error) => { window.alert("Something goes wrong") });
    }, () => ("Something go wrong"));;
  }

  addDiscountClick(itemId: Number) {
    this.router.navigate(['add/discount/per/item/',[itemId]]);
  }

  addItemToCartClick(itemId: Number) {
    let userName = this.userService.getUserNameFromToken().toString();
    this.itemService.addItemToCart(userName, itemId).subscribe((data)=>{});
  }

  nextPage() {
    if (this.items.length == 9) {
      this.pageNumber++;
    }
    this.itemService.getAllItems(this.pageNumber).subscribe((data) => {
      this.items = data;
    }, (error) => { window.alert("Something goes wrong") });
  }

  
  previousPage() {
    if (this.pageNumber != 1) {
      this.pageNumber--;
    }
    this.itemService.getAllItems(this.pageNumber).subscribe((data) => {
      this.items = data;
    }, (error) => { window.alert("Something goes wrong") });
  }
  userRole: String;
}
