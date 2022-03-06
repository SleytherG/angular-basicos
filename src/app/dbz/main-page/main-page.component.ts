import {Component, EventEmitter} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // personajes: Personaje[] = [];

  constructor() {
    // this.personajes = this.dbzService.personajes;
  }

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }






}
