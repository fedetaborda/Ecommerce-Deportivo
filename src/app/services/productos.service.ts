import { Injectable } from '@angular/core';


@Injectable()
export class ProductosService {

  private productos:any = [
    {
      productos:"ZAPATILLAS DE RUNNING ULTRA BOOST STREET",
      image: "../../assets/img/zapatillas/BA7838_01_standard.jpg",
      marca:"Adidas",
      estado:"Activo",
      precio:"$3.399",
      stock:"52",
      vendidos:"27"
    },
    {
      productos:"ZAPATILLAS DE RUNNING ULTRA BOOST STREET",
      image: "../../assets/img/zapatillas/BA7839_01_standard.jpg",
      marca:"Adidas",
      estado:"Activo",
      precio:"$3.399",
      stock:"26",
      vendidos:"36"
    },
    {
      productos:"ZAPATILLAS DE RUNNING PURE BOOST",
      image: "../../assets/img/zapatillas/BA8895_01_standard.jpg",
      marca:"Adidas",
      estado:"Activo",
      precio:"$2.599",
      stock:"23",
      vendidos:"30"
    },
    {
      productos:"ZAPATILLAS DE RUNNING ULTRABOOST ALL TERRAIN LTD",
      image: "../../assets/img/zapatillas/BA8900_01_standard.jpg",
      marca:"Adidas",
      estado:"Activo",
      precio:"$4.399",
      stock:"16",
      vendidos:"60"
    },
    {
      productos:"ZAPATILLAS DE RUNNING PURE BOOST",
      image: "../../assets/img/zapatillas/BB3453_00_plp_standard.jpg",
      marca:"Adidas",
      estado:"Activo",
      precio:"$2.899",
      stock:"55",
      vendidos:"26"
    },
    {
      productos:"ZAPATILLAS DE RUNNING ULTRA BOOST STREET",
      image: "../../assets/img/zapatillas/S80613_01_standard.jpg",
      marca:"Adidas",
      estado:"Activo",
      precio:"$3.560",
      stock:"29",
      vendidos:"23"
    },
    {
      productos:"ZAPATILLAS DE RUNNING ADIZERO TEMPO 8",
      image: "../../assets/img/zapatillas/BB3501_01_standard.jpg",
      marca:"Adidas",
      estado:"Activo",
      precio:"$2.899",
      stock:"55",
      vendidos:"26"
    },
    {
      productos:"ZAPATILLAS DE RUNNING ADIZERO ACER",
      image: "../../assets/img/zapatillas/BB3502_00_plp_standard.jpg",
      marca:"Adidas",
      estado:"Activo",
      precio:"$2.899",
      stock:"55",
      vendidos:"26"
    },
    {
      productos:"ZAPATILLAS DE RUNNING ADIZERO TEMPO 23",
      image: "../../assets/img/zapatillas/BW1201_00_plp_standard.jpg",
      marca:"Adidas",
      estado:"Activo",
      precio:"$2.899",
      stock:"55",
      vendidos:"26"
    }
  ]

  constructor() {

   }

   getProductos(){

     return this.productos;
   }

   getProducto( idx: string ){
    return this.productos[idx];
  }


}
