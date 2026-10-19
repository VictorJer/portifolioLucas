import { Component } from '@angular/core';

interface Habilidade {
  imagem: string;
  titulo: string;
  descricao: string;
}

@Component({
  imports: [],
  selector: 'app-habilidades',
  templateUrl: './habilidades.html',
})
export class Habilidades {
  public readonly habilidades: Habilidade[] = [
    {
      titulo: 'Git/Github',
      descricao: 'Controle de versão e colaboração em projetos de software.',
      imagem: 'https://skillicons.dev/icons?i=github',
    },
    {
      titulo: 'VsCode',
      descricao: 'Editor de texto para desenvolvimento de aplicações.',
      imagem: 'https://skillicons.dev/icons?i=vscode',
    },
    {
      titulo: 'Docker',
      descricao:
        'Plataforma para desenvolvimento, entrega e operação de aplicações em contêineres.',
      imagem: 'https://skillicons.dev/icons?i=docker',
    },
    {
      titulo: 'Azure',
      descricao: 'Plataforma de computação em nuvem da Microsoft.',
      imagem: 'https://skillicons.dev/icons?i=azure',
    },
    {
      titulo: '.NET',
      descricao: 'Plataforma de desenvolvimento de software da Microsoft.',
      imagem: 'https://skillicons.dev/icons?i=dotnet',
    },
  ];
}
