# Lucas Physique — Método Evolução 360

Landing page Angular com TypeScript e SCSS, orientada pelo [SPEC.md](SPEC.md) e pelas responsabilidades do [AGENTS.md](AGENTS.md).

A paleta segue a orientação mais recente do usuário de usar verde, vermelho e branco da logo: verde `#18B86A` nos CTAs e destaques, vermelho `#D9334B` em selos e bordas, vermelho `#E84355` em textos e branco `#FFFFFF`, sobre fundo escuro `#080A09`. Os tons da interface foram adaptados para legibilidade. Esta orientação substitui o dourado anteriormente inspirado no PDF e o verde neon do SPEC; preços e condições permanecem os do SPEC. As cores estão centralizadas em `src/styles.scss`.

## Desenvolvimento

```sh
npm ci
npm start
```

Acesse `http://localhost:4200`. A página tem navegação por âncoras, componentes standalone e layout mobile-first. Bootstrap Reboot é importado uma única vez; o menu é controlado pelo Angular, sem JavaScript de Bootstrap ou CDN.

## Conteúdo e contatos oficiais

Edite `src/app/data/content.ts`:

- `CONTACT.whatsapp`: número oficial com DDI e DDD, somente dígitos. Exemplo de formato: `55DDNUMERO`. Enquanto estiver vazio, os seis botões ficam desabilitados e identificam a pendência.
- `CONTACT.instagram`: URL HTTPS do perfil oficial. Enquanto estiver vazia, o rodapé mostra o aviso correspondente.
- `MEDIA.hero`, `MEDIA.bio` e `MEDIA.logo`: caminhos relativos a `public/`, sem barra inicial, por exemplo `img/lucas-hero.webp`. Use apenas fotos e marca oficiais validadas. As fotos têm espaço reservado e a principal carrega com prioridade.
- `PLANS`: valores em centavos. Totais e economia são calculados, usando o Mensal como referência para o mesmo período.

A logo oficial confirmada pelo usuário, `public/img/logo.png`, é usada no cabeçalho, no rodapé e como favicon, preservando suas cores e proporções. A foto oficial fornecida pelo usuário é usada no Hero em `public/img/lucas-francisco.webp`, com transparência e proporções preservadas. O WebP tem aproximadamente 42 kB, convertido do PNG original de 283 kB, sem redimensionamento. A biografia mantém uma composição tipográfica até que uma segunda foto seja configurada.

Antes de publicar, inserir WhatsApp e Instagram oficiais e revisar biografia e método com os materiais completos. O PDF “MÉTODO 360 (1).pdf” foi fornecido como referência de cores e apresenta preços diferentes; não atualizar os preços sem orientação expressa do usuário. Conferir divergências com o SPEC antes de alterar credenciais ou condições. Adicionar `og:image` com URL pública absoluta quando o endereço público for confirmado.

As fontes Inter e Teko são servidas localmente. Suas licenças SIL Open Font License estão em `public/fonts/`.

## Verificação

```sh
npm test -- --watch=false
npm run build
npm run build:pages
```

Os testes cobrem preços do SPEC, totais, economia anual, mensagens de WhatsApp, contatos pendentes, âncoras e menu. Conferir visualmente em 360, 390, 768, 1024 e 1440 pixels, inclusive navegação por teclado, movimento reduzido e compartilhamento.

Validação da implementação em 03/11/2026: 22 testes automatizados aprovados; build de produção para GitHub Pages aprovado, dentro dos budgets. No Edge, as cinco larguras foram verificadas sem rolagem horizontal ou erros de execução/arquivos. Também foram verificados âncoras, menu móvel, foco, link para pular ao conteúdo, movimento reduzido e fontes locais. A análise automatizada axe-core (WCAG 2 A/AA e 2.1 AA) não apontou violações nessas telas; isso não substitui uma auditoria manual completa. Contatos oficiais e imagem de compartilhamento continuam pendentes de validação antes da publicação.

## GitHub Pages

`npm run build:pages` gera `dist/portifolio/browser` com base `/portifolio/`. Caminhos de assets são relativos para funcionar nesse subdiretório. O destino configurado permanece o repositório existente; confirme que a URL final corresponde a esse caminho antes de publicar. Não há dependência de fallback de rotas, pois a navegação usa âncoras.

Depois de validar materiais e contatos, a publicação pode ser feita explicitamente com `npx ng deploy`. Nenhuma publicação faz parte da implementação local.
