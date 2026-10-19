import { Component, input, output } from '@angular/core';

interface ProjetoSelecionado {
  titulo: string;
  urlImagem: string;
}

@Component({
  imports: [],
  selector: 'app-modal-projeto',
  templateUrl: './modal-projeto.html',
})
export class ModalProjeto {
  public readonly projeto = input.required<ProjetoSelecionado | undefined>();

  public readonly modalFechado = output<void>();
}
