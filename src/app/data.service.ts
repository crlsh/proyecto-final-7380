import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

// Base de datos "en el server"
export class DataService implements InMemoryDbService {
  createDb() {
    const xp = [

      {
        id: 1,
        empresa: "AAAA",
        puesto: "asdf",
        ingreso: 1111,
        egreso: 2222,
        descripcion: "Lorem ipsum  sit amet  amet cons facere nemo quibusdam namconsectetur adipisicing elit"
      },
      {
        id: 2,
        empresa: "BBBB",
        puesto: "asdf",
        ingreso: 1111,
        egreso: 2222,
        descripcion: "Lorem ipsum  sit amet  amet cons facere nemo quibusdam namconsectetur adipisicing elit"
      },
      {
        id: 3,
        empresa: "CCCC",
        puesto: "asdf",
        ingreso: 3333,
        egreso: 4444,
        descripcion: "psum  sit amet cons facere nemo quibusdam nam amet cons facere nemo quibusdam nam ratione volup"
      }

    ];
    return { xp };
  }
}


