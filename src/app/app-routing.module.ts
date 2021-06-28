import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { DetailComponent } from './pages/dasboard/detail/detail.component';
import { ListProductosComponent } from './pages/dasboard/list-productos/list-productos.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {path:'', redirectTo:'layout' ,pathMatch:'full'},
  {path:'layout', component:LayoutComponent},
  {path:'dasboard', component:DasboardComponent ,children:[
    {path:'' ,redirectTo:'list', pathMatch:'full'},
    {path:'list' ,component:ListProductosComponent},
    {path:'detail/:id', component:DetailComponent} 
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
