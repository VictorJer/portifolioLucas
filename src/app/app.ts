import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Sobre } from './components/sobre/sobre';
import { Projetos } from './components/projetos/projetos';

@Component({
  imports: [Navbar, Sobre, Projetos], // Hander Bory = RouterOutlet
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  // Raiz/Startuo do Projeto
}
