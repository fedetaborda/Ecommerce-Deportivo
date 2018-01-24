import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Producto } from "../../model/producto";

@Component({
  selector: 'app-edit-productos',
  templateUrl: './edit-productos.component.html'
})
export class EditProductosComponent implements OnInit {

  private producto:Object = {};

  private productos:any = [];

  imagen ="../../assets/img/zapatillas/nuevo.jpg"

  nuevo:boolean = true

  indice:string=""

  estado:string = "Nuevo Producto"

  constructor() { }

  ngOnInit() {
    this.imagen;
  }

  guardar(){
      
      if( this.indice !=="" ){

        this.productos.splice( this.indice, 1 , this.producto );

        this.producto = {};

        this.indice ="";

        this.estado ="Nuevo Producto"

    }else{

      this.productos.push(this.producto);

      this.producto = {};

    }

  }

  editar(i:string){
    this.producto = this.productos[i];
    this.nuevo=false;
    this.indice = i;
    console.log(i);
    this.estado ="Actualizando Producto"
  }

  eliminar( i:string ) {
    this.productos.splice( i, 1 );
  }


}
