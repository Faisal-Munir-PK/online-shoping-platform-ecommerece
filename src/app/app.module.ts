import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Login } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CloudBackgroundComponent } from './cloud-background/cloud-background.component';
import { FormsModule } from '@angular/forms';
import { Dashboard } from './dashboard/dashboard.component';
import { Profile } from './profile/profile.component';
import { Sidebar } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Ticket } from './ticket/ticket.component';
import { LandingPage } from './landing-page/landing-page.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { Error404Component } from './error404/error404.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryPreviewComponent } from './category-preview/category-preview.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { ProductQuickModalComponent } from './product-quick-modal/product-quick-modal.component';
import { HomeComponent } from './home/home.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HeaderComponent } from './header/header.component';
import { ProductListTabularComponent } from './product-list-tabular/product-list-tabular.component';
import { ItemSliderComponent } from './item-slider/item-slider.component';
import { ProductListGridComponent } from './product-list-grid/product-list-grid.component';
import { TagSliderComponent } from './tag-slider/tag-slider.component';
import { LoginModelComponent } from './login-model/login-model.component';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    ToolbarComponent,
    CloudBackgroundComponent,
    Dashboard,
    Profile,
    Sidebar,
    Ticket,
    LandingPage,
    MultiSelectComponent,
    Error404Component,
    ProductPreviewComponent,
    ProductListComponent,
    CategoryPreviewComponent,
    CategoryFilterComponent,
    CartModalComponent,
    ProductQuickModalComponent,
    HomeComponent,
    CheckOutComponent,
    HeaderComponent,
    ProductListTabularComponent,
    ItemSliderComponent,
    ProductListGridComponent,
    TagSliderComponent,
    LoginModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
