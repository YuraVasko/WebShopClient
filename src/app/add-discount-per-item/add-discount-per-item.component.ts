import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogItem } from '../models/catalogItem';
import { ItemService } from '../services/item/item.service';
import { DiscountService } from '../services/discount/discount.service';
import { Discount } from '../models/discount';

@Component({
  selector: 'app-add-discount-per-item',
  templateUrl: './add-discount-per-item.component.html',
  styleUrls: ['./add-discount-per-item.component.css']
})
export class AddDiscountPerItemComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private itemService : ItemService,
    private discountService : DiscountService,
    private router : Router
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.itemService.getItemDetails(+params.get("itemId")).subscribe((data)=> this.item = data) 
    });
    this.discountService.getAllDiscounts().subscribe((data)=> { this.discounts = data});
  }

  addDiscountPerItem() {
    if (this.selected != null) {
      this.discountService.addDiscountPerItem(this.item.itemId, this.selected).subscribe((data) => this.router.navigate(["catalog"]));
    }
  }

  item : CatalogItem;
  discounts: Discount[];
  selected: Number;
}
