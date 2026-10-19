import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Sobre } from './components/sobre/sobre';
import { Habilidades } from './components/habilidades/habilidades';
import { HabilidadesFronte } from './components/habilidadeFronte/habilidadeFront';
import { Projetos } from './components/projetos/projetos';

@Component({
  imports: [Navbar, Sobre, Habilidades, HabilidadesFronte, Projetos], // Hander Bory = RouterOutlet
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  // Raiz/Startuo do Projeto
}
