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

  ngOnInit() {
    this.sharedService.getSearchText().subscribe(searchText => this.searchTxt = searchText);
  }

  addToCart(event, productId) {
    this.singleProduct = this.products.filter(product => {
      return product.id === productId;
    });

    this.sharedService.addProductToCart(this.singleProduct[0]);
  }

}
