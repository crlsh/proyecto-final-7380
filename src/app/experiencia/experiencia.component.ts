import { Component, OnInit } from '@angular/core';
import { EXPERIENCIA } from '../base-datos';

@Component({
  selector: 'experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia = EXPERIENCIA;
  
  constructor() { }

  ngOnInit(): void {

   
  }

}
