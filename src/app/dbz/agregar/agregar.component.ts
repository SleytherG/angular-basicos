import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  // @Input() personajesAgregar: Personaje[] = [];
  @Input() nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  };
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  constructor(
    private dbzService: DbzService
  ) {
  }


  agregar() {
    if(this.nuevoPersonaje.nombre.trim().length === 0) {
      return;
    }

    // this.personajesAgregar.push({ nombre: this.nuevoPersonaje.nombre, poder: this.nuevoPersonaje.poder});
    // // this.personajesAgregar.push(this.nuevoPersonaje);
    // this.onNuevoPersonaje.emit({nombre: this.nuevoPersonaje.nombre, poder: this.nuevoPersonaje.poder});
    // this.onNuevoPersonaje.emit(this.nuevoPersonaje);
    this.dbzService.agregarPersonaje({nombre: this.nuevoPersonaje.nombre, poder: this.nuevoPersonaje.poder});

    console.log(this.nuevoPersonaje);
    this.nuevoPersonaje.nombre = '';
    this.nuevoPersonaje.poder = 0;
    // console.log(this.personajesAgregar);
  }
}
