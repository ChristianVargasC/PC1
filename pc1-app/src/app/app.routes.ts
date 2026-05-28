import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { ProductosComponent } from './pages/productos/productos';
import { RegistroComponent } from './pages/registro/registro';
export const routes: Routes = [
{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
{ path: 'inicio', component: InicioComponent },
{ path: 'productos', component: ProductosComponent },
{ path: 'registro', component: RegistroComponent },
{ path: '**', redirectTo: 'inicio' }
];