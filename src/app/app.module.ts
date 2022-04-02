import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoggedService } from './logged.service';
import { BtnAgregarComponent } from './shared/btn-agregar/btn-agregar.component';
import { BtnEditarComponent } from './shared/btn-editar/btn-editar.component';
import { BtnEliminarComponent } from './shared/btn-eliminar/btn-eliminar.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { DatosPersonalesComponent } from './header/datos-personales/datos-personales.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { XpComponent } from './xp/xp.component';
import { ServicioDatosService } from './servicio-datos.service';
import { XpformComponent } from './xp/xpform/xpform.component'




//se crea una const del tipo Routes para guardar todas las rutas
//esto importa la clase Routes 
const appRoutes: Routes = [
  {path:'', component:HomeComponent}, //las '' es la ruta al home
  {path:'login', component:LoginComponent} // la ruta al login
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    HomeComponent,
    BtnAgregarComponent,
    BtnEditarComponent,
    BtnEliminarComponent,
 NavbarComponent,
 DatosPersonalesComponent,
 XpComponent,
 XpformComponent,

 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule, //se importa la clase RouterModule y se le indica la const donde estan las rutas
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  
  
    
  ],
  providers: [LoggedService, ServicioDatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
