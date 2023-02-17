import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './UserModule/auth/auth.component';
import { HomeComponent } from './UserModule/home/home.component';
import { HeaderComponent } from './UserModule/components/header/header.component';
import { FooterComponent } from './UserModule/components/footer/footer.component';
import { HomeHeroComponent } from './UserModule/components/home-hero/home-hero.component';
import { FoodCategoryComponent } from './UserModule/components/food-category/food-category.component';
import { HomeFoodSliderComponent } from './UserModule/components/home-food-slider/home-food-slider.component';

import { SwiperModule } from 'swiper/angular';
import { ShopListComponent } from './UserModule/pages/shop-list/shop-list.component';
import { HeaderDarkComponent } from './UserModule/components/header-dark/header-dark.component';
import { MiniBannerComponent } from './UserModule/components/mini-banner/mini-banner.component';
import { ShopDetailsComponent } from './UserModule/pages/shop-details/shop-details.component';
import { AddToCartComponent } from './UserModule/components/add-to-cart/add-to-cart.component';
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeHeroComponent,
    FoodCategoryComponent,
    HomeFoodSliderComponent,
    ShopListComponent,
    HeaderDarkComponent,
    MiniBannerComponent,
    ShopDetailsComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    GalleryModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
