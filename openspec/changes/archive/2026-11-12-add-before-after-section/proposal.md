# Proposal

## Why

A landing page apresenta o profissional, o método e os planos, mas ainda não mostra comparações visuais de evolução. As imagens fornecidas `dps.jpg` e `dps2.jpg` permitem adicionar essa evidência antes da decisão de contratação.

## What Changes

- Adicionar uma seção “Antes e depois” entre Método 360 e Planos.
- Exibir dois cards com as montagens completas fornecidas, preservando datas, rótulos e proporções.
- Adaptar os cards para duas colunas em telas amplas e uma coluna no celular.
- Incluir navegação para `#resultados` e CTA “Conheça os planos” para `#planos`.
- Usar descrições acessíveis e não inventar nomes, depoimentos ou métricas.

## Capabilities

### New Capabilities

- `transformation-gallery`: apresentação acessível e responsiva de comparações de antes e depois na landing page.

### Modified Capabilities

Nenhuma. Não há capacidades cadastradas no OpenSpec; esta adição complementa o `SPEC.md` existente sem alterar preços ou requisitos das demais seções.

## Impact

Novo componente Angular de resultados; integração em `src/app/app.ts` e `app.html`; navegação em `components/navbar/navbar.html`; coleção de conteúdo em `src/app/data/content.ts`; imagens locais em `public/img/`; testes de integração existentes. Reutilizar estilos e fontes atuais, sem dependências novas, backend, upload ou edição de imagens pelo visitante.
