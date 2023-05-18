import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { IonicModule } from '@ionic/angular';
import { ProductosComponent } from './productos/productos.component';
import {HttpClientModule} from '@angular/common/http';
import { BuscarComponent } from './buscar/buscar.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    ProductosComponent,
    BuscarComponent,
    VistaProductoComponent,
    VistaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
