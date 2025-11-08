import { Component } from '@angular/core';
import { MenuSuperior } from '../menu-superior/menu-superior';
import { MenuRodape } from '../menu-rodape/menu-rodape';

@Component({
  selector: 'app-inicio',
  imports: [MenuSuperior, MenuRodape],
  templateUrl: 'inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}
