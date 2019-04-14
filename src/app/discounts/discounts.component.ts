import { Component, OnInit } from '@angular/core';
import { Discount } from '../models/discount';
import { DiscountService } from '../services/discount/discount.service';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

  constructor( private discountService : DiscountService) { }

  ngOnInit() {
    this.discounts = new Array<Discount>();
    this.discountService.getAllDiscounts().subscribe((data) => { 
      this.discounts = data;
      this.dataSource = new MatTableDataSource<Discount>(this.discounts);
    });
  }

  deleteDiscount(discoutId : Number) {
    this.discountService.deleteDiscount(discoutId).subscribe(()=>{
      this.discountService.getAllDiscounts().subscribe((data) => { 
        this.discounts = data;
        this.dataSource = new MatTableDataSource<Discount>(this.discounts);
      });
    });
  }

  discounts : Array<Discount>;
  displayedColumns: string[] = ['percentage', 'descriprion', 'deleteButton'];
  dataSource = new MatTableDataSource<Discount>(this.discounts);
  selection = new SelectionModel<Discount>(true, []);
}
