import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Thor', 'Capitan Ámerica'];
  heroeRemovido: string  = '';

  borrarHeroe() {
    console.log('Borrando!!');
    this.heroeRemovido = this.heroes.shift() || '';
    console.log(this.heroeRemovido);
  }

}
