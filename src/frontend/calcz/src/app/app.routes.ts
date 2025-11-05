import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Inicio } from './inicio/inicio';
import { Historico } from './historico/historico';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'inicio', component: Inicio, title: 'Inicio' },
    { path: 'historico', component: Historico, title: 'Historico' }
];

