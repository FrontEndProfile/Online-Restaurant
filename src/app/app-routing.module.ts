import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './AdminModule/CRUD-Product/add-products/add-products.component';
import { RemoveProductsComponent } from './AdminModule/CRUD-Product/remove-products/remove-products.component';
import { DashBoardComponent } from './AdminModule/dash-board/dash-board.component';
import { AuthComponent } from './UserModule/auth/auth.component';
import { HomeComponent } from './UserModule/home/home.component';
import { ShopDetailsComponent } from './UserModule/pages/shop-details/shop-details.component';
import { ShopListComponent } from './UserModule/pages/shop-list/shop-list.component';

const routes: Routes = [
  {path:'auth' , component: AuthComponent},
  {path:'home' , component: HomeComponent},
  {path:'shop' , component: ShopListComponent},
  {path:'Shop-Details' , component: ShopDetailsComponent},
  {path:'DashBoard' , component: DashBoardComponent},
  {path:'add-product' , component: AddProductsComponent},
  {path:'remove-product-list' , component: RemoveProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
