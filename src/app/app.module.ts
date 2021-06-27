import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { NavbarComponent } from './pages/dasboard/navbar/navbar.component';
import { ListProductosComponent } from './pages/dasboard/list-productos/list-productos.component';
import { FooterComponent } from './pages/dasboard/footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DasboardComponent,
    NavbarComponent,
    ListProductosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
