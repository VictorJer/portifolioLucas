# Design

## Context

Ver `proposal.md` para a motivação. A aplicação usa componentes standalone, dados centralizados em `src/app/data/content.ts` e assets de `public/`. A ordem atual é Hero, Bio, Method e Pricing. O menu móvel fecha ao selecionar uma âncora. Os testes em `app.spec.ts` já verificam âncoras e contatos.

As duas imagens fornecidas são montagens completas: `dps.jpg` (1212 × 1280) e `dps2.jpg` (1280 × 923). Não são um par de imagens separadas. O design é necessário para coordenar componente, conteúdo, navegação e tratamento de proporções diferentes.

## Goals / Non-Goals

**Goals:** integrar um componente isolado, reutilizar os tokens visuais existentes e manter as montagens inteiras com carregamento estável.

**Non-Goals:** comparador arrastável, carrossel, modal, cadastro de resultados, mudança global da identidade visual ou edição das montagens.

## Decisions

1. Criar `ResultsComponent` em `src/app/components/results/`, com template e SCSS próprios, e inseri-lo entre Method e Pricing. Isso mantém a arquitetura existente; incluir tudo no componente raiz dificultaria manutenção.
2. Criar uma coleção readonly `TRANSFORMATIONS` em `data/content.ts`, com id, caminho, texto alternativo, datas, largura e altura intrínsecas. Usar legendas descritivas com as datas, sem nomes ou números de evolução inventados. Uma coleção local é suficiente; não há necessidade de serviço remoto.
3. Usar dois cards estáticos com uma montagem por card. A escolha decorre dos arquivos entregues, que já contêm os dois momentos; um comparador exigiria recortar e realinhar o material. Não cortar nem reconstruir os arquivos.
4. Usar CSS Grid com duas colunas a partir de 768px e uma abaixo disso, `minmax(0, 1fr)`, imagens com largura de 100% e altura automática. Aceitar alturas diferentes e alinhar os cards pelo topo. Uma altura fixa com `object-fit: cover` esconderia conteúdo.
5. Reutilizar `.section`, `.container`, `.eyebrow`, `.button` e variáveis CSS atuais. Há divergência entre o neon sugerido no `SPEC.md` e a paleta atual verde/vermelho/branco; esta mudança seguirá os tokens atuais e não resolverá esse tema global. Atualizar a numeração visual dos planos de 03 para 04 se a nova seção usar 03.
6. Otimizar cópias WebP locais das montagens durante implementação para atender ao `SPEC.md`, preservando os JPG originais. Confirmar visualmente a legibilidade das datas após conversão. Referências relativas como `img/dps.webp` devem funcionar também com o base href `/portifolio/`; não usar `/img/...`.
7. Declarar `width`, `height`, `loading="lazy"` e texto alternativo descritivo. Acrescentar “Resultados” ao menu com o fechamento existente e CTA interno para planos. Isso funciona mesmo enquanto WhatsApp e Instagram oficiais estão vazios.

## Risks / Trade-offs

- Montagens com alturas diferentes → manter proporções originais e priorizar a integridade do conteúdo.
- Datas incorporadas ficam menores no celular → repetir datas em legenda textual legível; verificar em 320px e 375px.
- Compressão pode reduzir a nitidez → conferir os WebP visualmente antes de usar e ajustar qualidade.
- Nova âncora ocupa espaço no menu → verificar menu em tablet e desktop, além do fechamento no celular.

## Migration Plan

Adicionar componente, conteúdo, imagens otimizadas e navegação na mesma entrega; validar testes e builds padrão e com base href de produção. Não há migração de dados. Rollback consiste em remover a integração e os arquivos novos, restaurando a navegação e a numeração anteriores.
