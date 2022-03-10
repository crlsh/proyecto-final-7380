import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,) { } //se inyecta en el constructor el servicio Router 
                                           //Esto importa la clase Router       
  ngOnInit(): void {
  }

  iniciarSesion(){
    this.router.navigate(['login']); //se agrega la routa a donde navegar    
  }

}