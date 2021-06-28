import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../../models/producto'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {
productos:Producto[]=[]
  constructor(private productosService:ProductosService, private router:Router) { }

  ngOnInit(): void {
    this.productosService.listAll().subscribe(data=>this.productos=data)
  }
detail(id:number){
this.router.navigate(['/dasboard/detail', id])
}
}
