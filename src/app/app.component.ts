import { Component } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecom';
  products: any = [];
  constructor(private mainService: MainService) {}

  ngOnInit() {
    // Get all product list on component init
    this.mainService.getProducts().subscribe(data => {
      this.products = data.products
    });
  }

}
