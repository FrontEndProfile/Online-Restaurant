import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-mini-banner',
  templateUrl: './mini-banner.component.html',
  styleUrls: ['./mini-banner.component.scss']
})
export class MiniBannerComponent {
  page_dummy = "Our Shop"
  breadcrumb_active_dummy = "Shop"
  mini_banner = "/assets/images/mini_banner.png"
  @Input() page_name = this.page_dummy; 
  @Input() breadcrumb_page = this.breadcrumb_active_dummy; 
}
