import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { LoggedService } from '../logged.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Propiedades del logged Service


  $estado: BehaviorSubject<boolean>;

  logIn(): void {
    this.loggedService.LogIn()
  }

  logOut(): void {
    this.loggedService.LogOut();
  }

  logState(): void {
    this.loggedService.LogState();
  }

  // propiedades NgbModal

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

    this.$estado = loggedService.logged$
  }



  ngOnInit(): void {
    this.$estado.subscribe
  }

}
