import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

//Servicios
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto:any = {};

  constructor(private _activateroute:ActivatedRoute,
              private _productosservice:ProductosService) { }

  ngOnInit() {

    this._activateroute.params.subscribe( params =>{
        this.producto = this._productosservice.getProducto( params['id'] );
        console.log(this.producto);
    });

  }

}
