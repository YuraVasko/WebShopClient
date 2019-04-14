import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../services/discount/discount.service';
import { Discount } from '../models/discount';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-discount',
  templateUrl: './add-new-discount.component.html',
  styleUrls: ['./add-new-discount.component.css']
})
export class AddNewDiscountComponent implements OnInit {

  constructor(private discountService : DiscountService, private router : Router ) { }

  ngOnInit() {
    this.discount = new Discount();
  }

  addNewDiscountClick() {
    this.discountService.addNewDiscount(this.discount).subscribe(()=>{ this.router.navigate(['/all/discount'])});
  }

  discount : Discount;
}
