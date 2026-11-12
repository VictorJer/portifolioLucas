# Tasks

## 1. Conteúdo e imagens

- [x] 1.1 Gerar versões WebP de `public/img/dps.jpg` e `dps2.jpg`, mantendo os originais; conferir visualmente que as montagens inteiras, datas e rótulos permanecem legíveis e verificar dimensões e tamanho dos arquivos.
- [x] 1.2 Adicionar a coleção readonly `TRANSFORMATIONS` em `src/app/data/content.ts`, com caminhos relativos, ids únicos, datas, descrições e dimensões das duas montagens; conferir cada registro contra o arquivo correspondente.

## 2. Seção de resultados

- [x] 2.1 Criar o componente standalone `ResultsComponent` com HTML e SCSS próprios, seção `#resultados`, dois cards, legendas com datas, imagens sem cortes, dimensões intrínsecas e carregamento lazy; verificar renderização com duas colunas a partir de 768px e uma abaixo desse limite.
- [x] 2.2 Reutilizar os tokens e classes atuais, incluir título associado à seção e CTA “Conheça os planos” para `#planos`; conferir navegação por teclado e foco visível.

## 3. Integração e navegação

- [x] 3.1 Importar e inserir o componente entre Method e Pricing em `app.ts` e `app.html`, acrescentar “Resultados” ao menu com fechamento no celular e ajustar numeração visual dos planos; conferir ordem e destinos das âncoras no DOM.
- [x] 3.2 Ampliar `src/app/app.spec.ts` para verificar ordem da seção, duas montagens com alternativas textuais, CTA e fechamento do menu ao clicar em Resultados; executar `npm test -- --watch=false` e verificar que os testes anteriores também passam.

## 4. Verificação da página integrada

- [x] 4.1 Conferir a página em 320, 375, 768 e 1280 pixels: ausência de rolagem horizontal, integridade das duas montagens, legibilidade das legendas, menu e acesso aos planos; registrar o resultado da inspeção.
- [x] 4.2 Executar `npm run build` e `npm run build:pages`; confirmar sucesso, assets de resultados presentes e caminhos compatíveis com `/portifolio/`, sem alterar preços ou contatos existentes.

## Registro de verificação

- 12/11/2026: 24 testes passaram em 2 arquivos; builds padrão e Pages concluídos, com base href `/portifolio/` e ambos os WebP presentes na saída.
- Inspeção automatizada em Edge e visual das capturas em 320, 375, 768 e 1280px: nenhuma rolagem horizontal, proporções preservadas, imagens carregadas, legendas legíveis, uma coluna abaixo de 768px e duas a partir desse limite.
- Menu móvel fecha ao escolher Resultados; CTA alcança `#planos` por teclado e apresenta foco visível nas quatro larguras.
- Ajuste mínimo na coluna mobile da biografia (`minmax(0, 1fr)`) eliminou o transbordamento existente em 320px e permitiu cumprir o requisito de largura da página.
- WebP: 93.918 e 113.072 bytes, dimensões originais preservadas; originais JPG mantidos.
