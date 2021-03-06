import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartProductCount: number = 0;
  searchText: string = '';
  isToggleCart: boolean = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getProducts().subscribe(data => {
      this.cartProductCount = data.length;
    })
  }

  changeText() {
    this.sharedService.setSearchText(this.searchText)
  }

}
