import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private productosService:ProductosService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
this.productosService.listDetail(id).subscribe(data=>{
  console.log(data)
})
  }

}
