import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto'
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  listAll():Observable<Producto[]>{
    console.log('servicio')
    return this.http.get<Producto[]>('http://localhost:3000/data')
  }
}
