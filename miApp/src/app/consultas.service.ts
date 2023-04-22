import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService{

  constructor(private http: HttpClient) { }
  

    getProductos(){ //todos
        return this.http.get('https://fakestoreapi.com/products')
    }

    getCategorias(){ //todas

    }

    getProducto(){ //un producto

    }

    getProductorPorCategoria(){ //productos por categoria

    }
  
}
