# Proposal

## Why

Os contatos estão vazios, mantendo os seis botões de contratação indisponíveis e o Instagram com aviso de configuração pendente. O usuário forneceu os contatos oficiais para habilitar os caminhos de atendimento já existentes.

## What Changes

- Configurar o WhatsApp informado como `554988107298`, removendo apenas a formatação de `+55 49 8810-7298`, sem acrescentar dígitos.
- Configurar o Instagram como `https://www.instagram.com/lucasfrancisco_physique/`.
- Ativar os seis links de planos com suas mensagens existentes e o link do Instagram no rodapé.
- Adequar a preparação dos testes para cobrir contatos oficiais e contatos vazios sem depender da ordem de execução.
- Manter layout, planos, mensagens e navegação existentes; nenhuma seção ou formulário novo será criado.

## Capabilities

### New Capabilities

- `official-contact`: Contratação por WhatsApp e acesso ao Instagram usando os contatos oficiais configurados.

### Modified Capabilities

Nenhuma.

## Impact

- Configuração em `src/app/data/content.ts` e preparação/verificação dos cenários em `src/app/app.spec.ts`.
- Reutiliza `whatsappUrl`, os botões de planos e o rodapé existentes, sem novas dependências, backend ou APIs.
- A alteração configura os destinos; não comprova a existência ou disponibilidade das contas externas.
