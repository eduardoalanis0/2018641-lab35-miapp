import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

constructor(private rutaActiva: ActivatedRoute){}

idProducto : string = '';


ngOnInit(): void {
  this.idProducto = this.rutaActiva.snapshot.params['']
}

filtrarProducto(){
  
}

}
