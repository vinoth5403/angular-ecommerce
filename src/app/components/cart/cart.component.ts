import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
   cartItems;
   totalAmmount;

  constructor(
    private SharedService: SharedService
  ) { }

  ngOnInit() {

    this.SharedService.getProducts().subscribe(data => {
      this.cartItems = data;
      this.totalAmmount = this.SharedService.getTotalPrice();
    });

  }

  // Remove item from cart list
  removeItemFromCart(productId) {
    this.SharedService.removeProductFromCart(productId);
  }

  emptyCart() {
    this.SharedService.emptryCart();
  }

}
