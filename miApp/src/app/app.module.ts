import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { IonicModule } from '@ionic/angular';
import { ProductosComponent } from './productos/productos.component';
<<<<<<< HEAD
import { BuscarComponent } from './buscar/buscar.component';
=======

import {HttpClientModule} from '@angular/common/http';
import { BuscarComponent } from './buscar/buscar.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
>>>>>>> Practica9

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    ProductosComponent,
<<<<<<< HEAD
    BuscarComponent
=======
    BuscarComponent,
    VistaProductoComponent
>>>>>>> Practica9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
