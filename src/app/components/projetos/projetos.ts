import { Component, signal } from '@angular/core';
import { ModalProjeto } from './modal-projeto/modal-projeto';

interface Projeto {
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlRepositorio: string;
  tecnologias: string[];
}

@Component({
  imports: [ModalProjeto],
  selector: 'app-projetos',
  templateUrl: './projetos.html',
})
export class Projetos {
  public readonly projetoSelecionado = signal<Projeto | undefined>(undefined);

  projetos: Projeto[] = [
    {
      titulo: 'Gerador de Certificados Online',
      descricao:
        'A aplicação permite cadastrar cursos e gerar certificados online para os participantes.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/Os-Gadeias/Gerador-de-Certificados-Online-API',
      tecnologias: [
        'C#',
        'ASP.NET Core',
        'Entity Framework',
        'MassTransit',
        'RabbitMQ',
        'SQL Server',
      ],
    },
    {
      titulo: 'Gadeias cursos',
      descricao:
        'A aplicação permite cadastrar cursos, alunos, tutores, turmas e categorias de cursos.',
      urlImagem: 'img/curso.png',
      urlRepositorio: 'https://github.com/Os-Gadeias/Gerador-de-Certificados-Online-API',
      tecnologias: [
        'C#',
        'ASP.NET Core',
        'Entity Framework',
        'ASP.NET Core Identity',
        'SQL Server',
      ],
    },
  ];

  public selecionadoProjeto(projeto: Projeto): void {
    this.projetoSelecionado.set(projeto);

    console.log(projeto);
  }
}
