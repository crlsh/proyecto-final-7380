import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedService } from '../logged.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// propiedades servicio modal

  
  hide = true;

// propiedades servicios logged 
  $estado: BehaviorSubject<boolean>;

  logIn(): void {
    this.loggedService.LogIn()
  }

  constructor(private router: Router, private loggedService:LoggedService) { 

    this.$estado = loggedService.logged$
  } 

  ngOnInit(): void {
    this.$estado.subscribe
  }
  
  volverHome(){
    this.router.navigate(['']) //se agrega la routa a donde navegar
  }

}
