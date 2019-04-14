import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item/item.service';
import { DiscountService } from '../services/discount/discount.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { CatalogItem } from '../models/catalogItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private itemService: ItemService, 
    private discountService: DiscountService, 
    private userService: UserService,
    private router: Router) { }

    pageNumber : number;
    items = new Array<CatalogItem>();

    ngOnInit() {
      this.pageNumber = 1;
      let userName = this.userService.getUserNameFromToken().toString();
      this.itemService.getCartAllItems(userName, this.pageNumber).subscribe((data) => {
        this.items = data;
      }, (error) => { window.alert("Something goes wrong") });
    }

    deleteItemFromCart(itemId: Number) {
      let userName = this.userService.getUserNameFromToken().toString();
      this.itemService.deleteItemFromCart(userName, itemId).subscribe(() => {
        this.itemService.getCartAllItems(userName, this.pageNumber).subscribe((data) => {
          this.items = data;
        }, (error) => { window.alert("Something goes wrong") });
      }, (error) => { window.alert("Something goes wrong") });
    }

    clearCartClick() {
      this.pageNumber = 1;
      let userName = this.userService.getUserNameFromToken().toString();
      this.itemService.clearCart(userName).subscribe(() => {
        this.itemService.getCartAllItems(userName, this.pageNumber).subscribe((data) => {
          this.items = data;
        }, (error) => { window.alert("Something goes wrong") });
      }, (error) => { window.alert("Something goes wrong") });
    }

    submitCartClick() {
      this.pageNumber = 1;
      let userName = this.userService.getUserNameFromToken().toString();
      this.itemService.submitPurchase(userName).subscribe(() => {
        this.itemService.getCartAllItems(userName, this.pageNumber).subscribe((data) => {
          this.items = data;
        }, (error) => { window.alert("Something goes wrong") });
      }, (error) => { window.alert("Something goes wrong") });
    }

    nextPage() {
      if (this.items.length == 9) {
        this.pageNumber++;
      }
      let userName = this.userService.getUserNameFromToken().toString();
      this.itemService.getCartAllItems(userName, this.pageNumber).subscribe((data) => {
        this.items = data;
      }, (error) => { window.alert("Something goes wrong") });
    }
  
    
    previousPage() {
      if (this.pageNumber != 1) {
        this.pageNumber--;
      }
      let userName = this.userService.getUserNameFromToken().toString();
      this.itemService.getCartAllItems(userName, this.pageNumber).subscribe((data) => {
        this.items = data;
      }, (error) => { window.alert("Something goes wrong") });
    }
}
