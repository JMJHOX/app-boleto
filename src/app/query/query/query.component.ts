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

 settings = {
  mode: 'inline',
  noDataMessage:'',
  actions:{
    add:false,
    position:"right",
    columnTitle:''

  },
  edit: {
    editButtonContent:'Cambiar' ,
    saveButtonContent: 'Actualizar',
    cancelButtonContent:'Cancelar',
    confirmSave: true
  },
  add: { confirmCreate: true },
  delete:{
    confirmDelete:true,
    deleteButtonContent:'Borrar'
  },
  columns:
  {
    codigo: {
      title: 'Código',
      editable:false
    },
    nombre: {
      title: 'Nombre'
    },
    apellido: {
      title: 'Apellido'
    },
    activo: {
      title: 'Matriculado',
      editable:false,
      valuePrepareFunction: (value:any) =>
       {return value?"SI":"NO";}
      },
    boleto: {
      title: 'Boleto',
      valuePrepareFunction: (value:any) => {
        return value?"SI":"NO";
       }
    }
  }
};
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
  });

  }

 async onEditConfirm(event:any) {
  if (window.confirm('¿Desea guardar los cambios?')) {
    console.log(event.newData)
    //call to remote api, remember that you have to await this
    await this.BoletoService.updateBoleto(event.newData.codigo,event.newData).subscribe((data:any)=>{console.log(data);});
    event.confirm.resolve(event.newData);
  } else {
    event.confirm.reject();
  }
}

 async onDeleteConfirm(event:any) {
    if (window.confirm('¿Está seguro de borrar este registro?')) {
      console.log("Borrado")

       await this.BoletoService.deleteBoleto(event.data.codigo).subscribe((data:any)=>{console.log(data);});
      //call to remote api, remember that you have to await this
      return event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
  onCreateConfirm(event:any) {
    if (window.confirm('Are you sure you want to savesd?')) {
      console.log("Creado")
      //call to remote api, remember that you have to await this
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }

  }
}
