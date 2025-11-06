import { Component } from '@angular/core';
import { MenuSuperior } from '../menu-superior/menu-superior';

@Component({
  selector: 'app-inicio',
  imports: [MenuSuperior],
  template: `
    <app-menu-superior></app-menu-superior>
    <p>
      inicio works!
    </p>

  `,
  styleUrl: './inicio.css',
})
export class Inicio {

}
