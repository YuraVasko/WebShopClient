import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule }   from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { AddDiscountPerItemComponent } from './add-discount-per-item/add-discount-per-item.component';
import { AppRoutingModule } from './app-routing.module';
import { AddNewDiscountComponent } from './add-new-discount/add-new-discount.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { CartComponent } from './cart/cart.component';
import { CartHistoryComponent } from './cart-history/cart-history.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    CatalogComponent,
    AddNewItemComponent,
    AddDiscountPerItemComponent,
    AddNewDiscountComponent,
    DiscountsComponent,
    CartComponent,
    CartHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatMenuModule,
    MatGridListModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: LoginComponent 
      },
      { 
        path: 'login', 
        component: LoginComponent 
      },
      { 
        path: 'register', 
        component: RegisterComponent 
      },
      { 
        path: 'catalog', 
        component: CatalogComponent 
      },
      { 
        path: 'add/new/item', 
        component: AddNewItemComponent 
      },
      { 
        path: 'catalog/add/discount/per/item/:itemId', 
        component: AddDiscountPerItemComponent 
      },
      { 
        path: 'add/new/discount', 
        component: AddNewDiscountComponent 
      },
      { 
        path: 'all/discount', 
        component: DiscountsComponent 
      },
      {
        path: 'cart',
        component: CartComponent 
      },
      {
        path: 'purchase',
        component: CartHistoryComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
