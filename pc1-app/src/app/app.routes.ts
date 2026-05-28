import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { ProductosComponent } from './pages/productos/productos';
import { RegistroComponent } from './pages/registro/registro';
import { Ejercicio1 } from './pages/ejercicio1/ejercicio1';
import { Ejercicio2 } from './pages/ejercicio2/ejercicio2';
import { Ejercicio3 } from './pages/ejercicio3/ejercicio3';

export const routes: Routes = [
{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
{ path: 'inicio', component: InicioComponent },
{ path: 'productos', component: ProductosComponent },
{ path: 'registro', component: RegistroComponent },
{ path: 'ejercicio1', component: Ejercicio1 },
{ path: 'ejercicio2', component: Ejercicio2 },
{ path: 'ejercicio3', component: Ejercicio3 },
{ path: '**', redirectTo: 'inicio' }
];