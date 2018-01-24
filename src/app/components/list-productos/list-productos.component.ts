import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Servicios
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  private productos : any;

  constructor(private _ProductosService: ProductosService,
              private router:Router) { }

  ngOnInit() {

    this.ListarProductos();

  }

  ListarProductos(){
    this.productos = this._ProductosService.getProductos();
  }

  detalleProducto( idx:number ){
    this.router.navigate( ['/detalle-producto',idx] );
  }

}
