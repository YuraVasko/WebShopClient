import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item/item.service';
import { DiscountService } from '../services/discount/discount.service';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { CatalogItem } from '../models/catalogItem';

@Component({
  selector: 'app-cart-history',
  templateUrl: './cart-history.component.html',
  styleUrls: ['./cart-history.component.css']
})
export class CartHistoryComponent implements OnInit {

  constructor(private itemService: ItemService, 
    private userService: UserService,
    private router: Router) { }

    pageNumber : number;
    items = new Array<CatalogItem>();

    ngOnInit() {
      this.pageNumber = 1;
      let userName = this.userService.getUserNameFromToken().toString();
      this.itemService.getAllPurchasedItems(userName, this.pageNumber).subscribe((data) => {
        this.items = data;
      }, (error) => { window.alert("Something goes wrong") });
    }
    
    nextPage() {
      if (this.items.length == 9) {
        this.pageNumber++;
      }
      let userName = this.userService.getUserNameFromToken().toString();
      this.itemService.getAllPurchasedItems(userName, this.pageNumber).subscribe((data) => {
        this.items = data;
      }, (error) => { window.alert("Something goes wrong") });
    }
  
    
    previousPage() {
      if (this.pageNumber != 1) {
        this.pageNumber--;
      }
      let userName = this.userService.getUserNameFromToken().toString();
      this.itemService.getAllPurchasedItems(userName, this.pageNumber).subscribe((data) => {
        this.items = data;
      }, (error) => { window.alert("Something goes wrong") });
    }

}
