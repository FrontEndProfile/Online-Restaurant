import { Component, } from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent {
  page_active_name = "Our Shop"
  breadcrumb_active = "Shop"
  mini_banner = "/assets/images/mini_banner.png"
  currentPage = this.page_active_name;
  breadcrumb_active_pg =  this.breadcrumb_active;

}
