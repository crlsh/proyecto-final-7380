import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(private router: Router) { }//se inyecta en el constructor el servicio Router 
                                          //Esto importa la clase Router 

  ngOnInit(): void {
  }
  volverHome(){
    this.router.navigate(['']) //se agrega la routa a donde navegar
  }

}
