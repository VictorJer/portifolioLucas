# official-contact Specification

## Purpose

Permitir que visitantes iniciem o atendimento sobre os planos pelo WhatsApp oficial e acessem o perfil oficial do Lucas no Instagram.

## Requirements

### Requirement: Contratação pelo WhatsApp oficial
O site SHALL disponibilizar os seis botões de planos como links para o WhatsApp `554988107298`, com mensagem preenchida contendo nome, duração, parcelas e total do respectivo plano.

#### Scenario: Contatos oficiais configurados
- **WHEN** o visitante acessa a seção de planos com os contatos oficiais configurados
- **THEN** os seis botões estão disponíveis como links para `https://wa.me/554988107298` com o parâmetro `text` correspondente ao plano
- **AND** os avisos de WhatsApp em configuração não são exibidos

### Requirement: Instagram oficial no rodapé
O site SHALL apresentar no rodapé um link para `https://www.instagram.com/lucasfrancisco_physique/` quando o Instagram oficial estiver configurado.

#### Scenario: Acesso ao Instagram configurado
- **WHEN** o visitante acessa o rodapé com o Instagram oficial configurado
- **THEN** encontra o link para o perfil oficial
- **AND** o aviso de Instagram oficial em breve não é exibido

### Requirement: Abertura dos contatos externos
Os links oficiais de WhatsApp e Instagram SHALL abrir em nova aba com proteção `noopener noreferrer` e identificação acessível do destino.

#### Scenario: Destinos externos disponíveis
- **WHEN** os contatos oficiais estão configurados
- **THEN** os links de contato usam nova aba e as proteções definidas
- **AND** seus nomes acessíveis identificam o WhatsApp ou Instagram e a abertura em nova aba

### Requirement: Ausência de contatos configurados
O site SHALL preservar os estados de indisponibilidade quando os respectivos contatos estiverem vazios, sem gerar destinos fictícios.

#### Scenario: WhatsApp vazio
- **WHEN** o WhatsApp não está configurado
- **THEN** os seis botões de contratação estão desabilitados e o site informa que o WhatsApp oficial está em configuração
- **AND** não há links de contratação para WhatsApp

#### Scenario: Instagram vazio
- **WHEN** o Instagram não está configurado
- **THEN** o rodapé apresenta o aviso de Instagram oficial em breve em lugar do link
