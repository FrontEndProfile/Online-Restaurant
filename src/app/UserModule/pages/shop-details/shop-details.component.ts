import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent {
  page_active_name = "Shop Details"
  breadcrumb_active = "Shop details"
  mini_banner = "/assets/images/mini_banner.png"
  currentPage = this.page_active_name;
  breadcrumb_active_pg =  this.breadcrumb_active;
}
