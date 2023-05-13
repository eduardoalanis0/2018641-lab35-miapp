import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.css']
})
export class VistaDetalleComponent implements OnInit {

  constructor (private rutaActiva: ActivatedRoute){}

  idProducto :string = '';

  ngOnInit(): void {
      this.idProducto = this.rutaActiva.snapshot.params['id']
  }

  filtrarProducto(){
    
  }
}
