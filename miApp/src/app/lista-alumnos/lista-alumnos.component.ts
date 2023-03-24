import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit{
  
  constructor() { }
  ngOnInit():void {
    
  }


  nombre = "Eduardo";
  alumnos: any = ["Pablo", "Martin", "Brandon", "Orlando", "Ximena", "Andrea"];
  
}



