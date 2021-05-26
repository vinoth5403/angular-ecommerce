import { Injectable } from '@angular/core';
import { Observable, Subject  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  // Local variable which stores 
  public cartItems = [];
  public products = new Subject();
  public searchText = new Subject();

  
  setSearchText(txt) {
    return this.searchText.next(txt)
  }

  getSearchText() {
    return this.searchText.asObservable();
  }

  getProducts(): Observable<any> {
    return this.products.asObservable();
  }

  setProducts(products) {
    this.cartItems.push(...products);
    this.products.next(products);
  }

  // Add single product to the cart
  addProductToCart(product) {
    this.cartItems.push(product);
    this.products.next(this.cartItems);
  }

  // Remove single product from the cart
  removeProductFromCart(productId) {
    this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    // Update Observable value
    this.products.next(this.cartItems);
  }

  // Remove all the items added to the cart
  emptryCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }

  // Calculate total price on item added to the cart
  getTotalPrice() {
    let total = 0;

    this.cartItems.map(item => {
      total += item.price;
    });

    return total
  }
}
