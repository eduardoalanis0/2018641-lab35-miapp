import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { BuscarComponent } from './buscar/buscar.component';


const routes: Routes = [
{
  path: 'inicio',
  component: ProductosComponent
},
{
  path: 'buscar',
  component: BuscarComponent
},
{
  path: ' ',
  redirectTo: '/inicio',
  pathMatch: 'full'
}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
