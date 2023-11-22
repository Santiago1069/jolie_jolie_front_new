import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SeccionProductsComponent } from './components/seccion-products/seccion-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthComponent } from './components/auth/auth.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTokenInterceptor } from './services/add-token.interceptor';
import { CommonModule } from '@angular/common';
import { HeaderCartComponent } from './components/header-cart/header-cart.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { PaymentFailureComponent } from './components/payment-failure/payment-failure.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { ListComprasComponent } from './components/list-compras/list-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    SeccionProductsComponent,
    FooterComponent,
    ProductsComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    AuthComponent,
    HeaderCartComponent,
    ForgotPasswordComponent,
    RecoverPasswordComponent,
    PaymentFailureComponent,
    PaymentSuccessComponent,
    ListComprasComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true},
    ProductsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
