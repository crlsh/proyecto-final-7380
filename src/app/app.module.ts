import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


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
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) //se importa la clase RouterModule y se le indica la const donde estan las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
