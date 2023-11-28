import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthComponent } from './components/auth/auth.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PaymentFailureComponent } from './components/payment-failure/payment-failure.component';
import { ListComprasComponent } from './components/list-compras/list-compras.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginUser',
    pathMatch: 'full'
  },
  { path: 'loginUser', component: AuthComponent },
  { path: 'main', component: MainComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'recoverPassword', component: RecoverPasswordComponent },
  { path: 'success', component: PaymentSuccessComponent },
  { path: 'failure', component: PaymentFailureComponent },
  { path: 'listCompras', component: ListComprasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
