import { Component } from '@angular/core';

interface ItemNavbar {
  titulo: string;
  url: string;
  icone: string;
}

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  public readonly itens: ItemNavbar[] = [
    { titulo: 'Sobre', url: '#sobre', icone: 'bi bi-person' },
    { titulo: 'Habilidades', url: '#habilidades', icone: 'bi bi-award' },
    { titulo: 'Projetos', url: '#projetos', icone: 'bi bi-card-list' },
  ];
}
