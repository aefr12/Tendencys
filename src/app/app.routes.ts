import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { FormComponent } from './components/form/form.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'products/:number', component: ProductsComponent },
    { path: 'add/:number', component: FormComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);