import { Component, OnInit } from '@angular/core';
import { EXPERIENCIA } from '../base-datos';
// 1 ---- IMPORTO EL SERVICIO  --------
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { LoggedService } from '../logged.service';

@Component({
  selector: 'experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  // propiedades logged service
  $estado;

  // propiedades ng modal
  experiencia = EXPERIENCIA;
  closeResult: string = ''

  open(content: any) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  constructor(private modalService: NgbModal, private loggedService: LoggedService) {

    this.$estado = loggedService.logged$;
   }


  ngOnInit(): void {
    this.$estado.subscribe
  }

}
