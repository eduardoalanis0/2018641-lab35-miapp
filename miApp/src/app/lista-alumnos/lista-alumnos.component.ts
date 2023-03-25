import { Component, OnInit } from '@angular/core';


import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit{
  
  constructor(private actionSheetCtrl: ActionSheetController) { }
 
  ngOnInit():void { }

  nombre = "Eduardo";
  alumnos: any = ["Pablo", "Martin", "Brandon", "Orlando", "Ximena", "Andrea"];
  
  mostrarMensaje(){
    alert('hola mundo');
  }

  async presentarActionSheet(alumno:string) {
    const actioSheet = await this.actionSheetCtrl.create({
      header: 'Confirmar que quieres eliminar este registro',
      buttons:[
        {
          text: 'Eliminar',
          role: 'destructive',
          data: {
            action: 'delete'
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel'
          },
        }
      ]
    });
    await actioSheet.present();
    const result = await actioSheet.onDidDismiss();
    if (result.data?.action == "delete" ){
      const index = this.alumnos.findIndex((a:string) => a == alumno);
      this.alumnos.splice(index,1);
      document.getElementById('slidign_$[alumno]')?.remove();
    }
    console.log(this.alumnos);
  }
}



