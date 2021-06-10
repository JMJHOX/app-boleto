import { Component, OnInit, SimpleChange, ViewChild } from '@angular/core';

import { MatTable, MatTableDataSource } from '@angular/material/table';

import { BoletosService } from 'src/app/services/boletos.service';
import { LoadingService } from 'src/app/services/loading.service';
import {BoletoUser} from '../../shared/models/boleto.model';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})

export class QueryComponent implements OnInit {
  items:BoletoUser[]=[];
  loading$ = this.loader.loading$;
  DataSource = new MatTableDataSource(this.items);
  displayedColumns: string[] = [
  "codigo",
 "nombre",
 "apellido",
 "activo",
 "boleto"
 ];

  constructor(public BoletoService:BoletosService, public loader: LoadingService) {

  }


  ngOnInit(): void {
    //Cargamos los datos a mostrar

    this.getData();

  }
  async getData(){
    this.BoletoService.getBoletos().subscribe(
      (data:any)=>{console.log(data);
    this.items=data;
    this.DataSource.data=this.items;});

  }


}
