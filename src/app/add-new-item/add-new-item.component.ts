import { Component, OnInit } from '@angular/core';
import { CatalogItem } from '../models/catalogItem';
import { ItemService } from '../services/item/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent implements OnInit {

  constructor(private itemService : ItemService, private router: Router) { }
  item : CatalogItem;

  ngOnInit() {
    this.item = new CatalogItem();
  }

  addNewItemClick() {
    this.itemService.addNewItem(this.item).subscribe((data)=> this.router.navigate(["catalog"]),()=>{window.alert("Something goes wrong")});
  }
}
