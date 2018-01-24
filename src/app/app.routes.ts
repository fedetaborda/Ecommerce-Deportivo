import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from "./components/inicio/inicio.component";
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { UserComponent } from './components/user/user.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { EditProductosComponent } from './components/edit-productos/edit-productos.component';


const APP_ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'users', component: UserComponent },
  { path: 'list-productos', component: ListProductosComponent },
  { path: 'detalle-producto/:id', component: DetalleProductoComponent },
  { path: 'edit-producto', component: EditProductosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{ useHash:true });
