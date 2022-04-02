import { Component, OnInit } from '@angular/core';
import { LoggedService } from '../logged.service';


@Component({
  selector: 'educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

$estado: any
 educacion = [

  {
    id: 1,
    institucion: "ASDF asDFDF",
    titulo: "asdfasd asdñfasdf ",
    egreso: 1111,
    
  },
  {
    id: 2,
    institucion: "ASDF asDFDF",
    titulo: "asdfasd asdñfasdf ",
    egreso: 1111,
    
  },
  {
    id: 3,
    institucion: "ASDF asDFDF",
    titulo: "asdfasd asdñfasdf ",
    egreso: 1111,
  }
];


openEdForm(item: any,modo: any){console.log(item, modo)};

  constructor(private loggedService:LoggedService) { }

  ngOnInit(): void {
    this.$estado = this.loggedService.logged$;
  }

}
