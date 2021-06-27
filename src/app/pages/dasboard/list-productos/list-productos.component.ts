import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../../models/producto'
@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {
productos:Producto[]=[]
  constructor(private productosService:ProductosService) { }

  ngOnInit(): void {
    this.productosService.listAll().subscribe(data=>this.productos=data)
  }

}
