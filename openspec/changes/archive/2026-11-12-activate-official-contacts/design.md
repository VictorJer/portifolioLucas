# Design

## Context

Ver `proposal.md` para a motivação. `CONTACT` centraliza os destinos em `src/app/data/content.ts`. A função `whatsappUrl` já gera mensagens por plano e aceita números com 10 a 15 dígitos. Os componentes de planos e rodapé já alternam entre links e avisos de indisponibilidade.

Este registro resolve a interação entre a nova configuração padrão e os testes existentes: `app.spec.ts` limpa os contatos em `afterEach`, e seu cenário de indisponibilidade depende implicitamente dos valores vazios iniciais.

## Goals / Non-Goals

**Goals:** Preservar o fluxo existente e tornar a verificação dos estados configurado e vazio independente da ordem dos testes.

**Non-Goals:** Alterar templates, criar serviços de contato, automatizar envio de mensagens ou validar contas externas.

## Decisions

- Preencher `CONTACT` diretamente com `554988107298` e a URL completa fornecida. Essa configuração já é consumida pela interface; variáveis de ambiente ou um serviço remoto acrescentariam complexidade sem necessidade para dois contatos públicos estáticos.
- Remover somente pontuação e espaços do telefone informado. Não inferir ou acrescentar um nono dígito: o destino deve refletir o dado fornecido pelo usuário.
- Capturar uma cópia dos contatos oficiais importados no início da suíte, restaurá-los antes/depois de cada caso e esvaziá-los explicitamente no cenário de ausência. Usar os destinos oficiais no cenário de configuração e verificar os seis links, suas mensagens e os atributos de abertura segura. A alternativa de continuar limpando globalmente mantém dependência de ordem e pode ocultar a ausência da configuração padrão.
- Reaproveitar os testes de cálculo e geração de mensagens existentes. Não criar uma suíte paralela para esta alteração de configuração.

## Risks / Trade-offs

- [Destino informado pode não corresponder a uma conta disponível] → Preservar os dados exatos e distinguir verificação da URL de confirmação de conta; não enviar mensagens durante QA.
- [Mutação do objeto compartilhado durante os testes] → Restaurar uma cópia dos valores originais e preparar explicitamente o estado de cada cenário que o altera.

## Migration Plan

Aplicar a configuração e o ajuste de preparação dos testes, executar `npm test -- --watch=false` e `npm run build`. Publicar pelo processo habitual do projeto quando solicitado. Para reverter a ativação, restaurar os valores vazios anteriores; os avisos e botões desabilitados existentes voltam a ser exibidos.
