import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../consultas.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  constructor(private consultas: ConsultasService) { };

  productos: any = [ ];

  categorias: any = [ ];

  ngOnInit():void {
    this.obtenerProductos();
    /*
    this.obtenerCategorias();
    this.filtrarProducto();
    this.filtrarProductoCategorias();
    */
  }

    obtenerProductos(){
      this.consultas.getProductos().subscribe(res => {
        this.productos = res;
        console.log(res);
      })
    }
   /*
    obtenerCategorias(){
      this.consultas.getCategorias().subscribe(res => {
        console.log(res);
      })
    }

    filtrarProducto(){
      this.consultas.getProducto().subscribe(res => {
        console.log(res);
      })
    }

    filtrarProductoCategorias(){
      this.consultas.getProductosPorCategoria(this.categoria).subscribe(res => {
        console.log(res);
      })
    }
*/
    categoria : string ="";

    filtrarProductoPorCategorias (ev:any){
      console.log(ev);
      this.categoria = ev.target.value;
      console.log()

    }
}
