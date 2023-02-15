import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './UserModule/auth/auth.component';
import { HomeComponent } from './UserModule/home/home.component';
import { ShopListComponent } from './UserModule/pages/shop-list/shop-list.component';

const routes: Routes = [
  {path:'auth' , component: AuthComponent},
  {path:'home' , component: HomeComponent},
  {path:'shop' , component: ShopListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
