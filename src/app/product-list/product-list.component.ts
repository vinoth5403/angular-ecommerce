import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  @Input() products: any = [];
  singleProduct;
  isAdded;
  searchTxt: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.isAdded = [this.products.length];
     this.sharedService.getSearchText().subscribe(searchText => this.searchTxt = searchText)
    //this.isAdded.fill(false, 0, this.products.length);
    
    this.sharedService.getProducts().subscribe(data => {
      if (data && data.length > 0) {
  
      } else {
        this.products.map((item, index) => {
          this.isAdded[index] = false;
        });
      }

    });
  }


  addToCart(event, productId) {
    // If Item is already added then display alert message
    if (event.target.classList.contains('btn-success')) {
      alert('This product is already added into cart.');
      return false;
    }

    // Change button color to green
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.isAdded[index] = true;
      }
    })

    this.singleProduct = this.products.filter(product => {
      return product.id === productId;
    });

    this.sharedService.addProductToCart(this.singleProduct[0]);
  }

}
