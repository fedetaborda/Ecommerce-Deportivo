import { Component, OnInit } from '@angular/core';

//model
import { Producto } from "../../model/producto";

//Servicios
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {

    private productos : any;


  constructor(private _ProductosService: ProductosService) { }

  ngOnInit() {

		this.ListarProductos();

  }

  ListarProductos(){
    this.productos = this._ProductosService.getProductos();
  }



}
