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
import { SimilarProductsComponent } from './UserModule/components/similar-products/similar-products.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AddProductsComponent } from './AdminModule/CRUD-Product/add-products/add-products.component';
import { RemoveProductsComponent } from './AdminModule/CRUD-Product/remove-products/remove-products.component';
import { UpdateProductsComponent } from './AdminModule/CRUD-Product/update-products/update-products.component';
import { LoginComponent } from './AdminModule/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { DashBoardComponent } from './AdminModule/dash-board/dash-board.component';


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
    AddToCartComponent,
    SimilarProductsComponent,
    AddProductsComponent,
    RemoveProductsComponent,
    UpdateProductsComponent,
    LoginComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    GalleryModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    provideStorage(() => getStorage()),
    AngularFireModule,
    AngularFireStorageModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
