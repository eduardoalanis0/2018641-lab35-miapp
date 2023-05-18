import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../consultas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private consultasServicio: ConsultasService) {}

  ngOnInit(): void { 
  }

idProducto: number = 0;

producto: any = {}

  buscarProducto(){
    this.consultasServicio.getProducto(this.idProducto).subscribe(res => {
      this.producto = res;

      
      console.log(this.producto)
    })
  }

}
