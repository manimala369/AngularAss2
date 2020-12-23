import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';


const routes: Routes = [
  { path : '', redirectTo: '/productdetails', pathMatch: 'full'},
  { path : 'productdetails', component: ProductDetailsComponent},
  { path : 'productdetails/:id', component: ProductlistComponent},
  { path : 'products', component: ProductComponent},
  {path : "**", component: PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
