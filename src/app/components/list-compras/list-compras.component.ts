import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-list-compras',
  templateUrl: './list-compras.component.html',
  styleUrls: ['./list-compras.component.css']
})
export class ListComprasComponent implements OnInit {

  searchText: any;

  compras: any = [];

  public page!: number;

  constructor(private comprasService: ComprasService) { }

  ngOnInit(): void {
    this.getCompras();
  }

  getCompras(){
    this.comprasService.getMisCompras().subscribe(
      res => {
        this.compras = res;
      },
      err => {
        console.log(err)
      }
    )
  }


}
