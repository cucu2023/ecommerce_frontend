import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

export const routes: Routes = [
    { path: '', redirectTo: 'productos', pathMatch: 'full' },
    { path: 'productos', component: ProductosComponent },
    { path: 'categorias', component: CategoriasComponent },
    { path: 'login', component: LoginComponent, title: 'Login' },
    { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
];
