import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from "./app.routes";

//componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { UserComponent } from './components/user/user.component';

//service
import { ProductosService } from './services/productos.service';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { EditProductosComponent } from './components/edit-productos/edit-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BarraLateralComponent,
    UserComponent,
    ListProductosComponent,
    HeaderComponent,
    NavComponent,
    DetalleProductoComponent,
    EditProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
