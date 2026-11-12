# transformation-gallery Specification

## Purpose

Permitir que visitantes comparem os registros de antes e depois fornecidos pelo responsável pelo site, em uma seção acessível integrada à apresentação do método e dos planos.

## Requirements

### Requirement: Seção de resultados integrada à página
A página SHALL apresentar uma seção “Antes e depois”, identificada por `resultados`, entre Método 360 e Planos, com título associado semanticamente à seção.

#### Scenario: Visitante percorre o conteúdo
- **WHEN** o visitante percorre a página após a seção Método 360
- **THEN** encontra a seção de antes e depois antes dos planos disponíveis

### Requirement: Comparações completas e fiéis aos materiais
A seção SHALL exibir dois cards usando as montagens fornecidas em `dps.jpg` e `dps2.jpg`, ou versões otimizadas equivalentes, sem recortar, distorcer ou ocultar datas e rótulos. A seção MUST NOT acrescentar nomes, depoimentos ou métricas não fornecidos.

#### Scenario: Visitante visualiza os dois registros
- **WHEN** as imagens são carregadas
- **THEN** o primeiro card mostra a montagem de 07/05/2026 e 25/10/2026 e o segundo a de 05/09/2026 e 24/10/2026
- **AND** ambas permanecem completas e com suas proporções originais

### Requirement: Layout responsivo das comparações
A seção SHALL apresentar os cards em duas colunas a partir de 768 pixels de largura e em uma coluna abaixo desse limite, sem rolagem horizontal da página a partir de 320 pixels de largura.

#### Scenario: Acesso pelo celular
- **WHEN** o visitante acessa a página em uma viewport de 375 pixels
- **THEN** os dois cards aparecem empilhados e suas imagens cabem na largura disponível

#### Scenario: Acesso por tela ampla
- **WHEN** o visitante acessa a página em uma viewport de 1280 pixels
- **THEN** os dois cards aparecem lado a lado com as montagens completas

### Requirement: Navegação e chamada para planos
A navegação principal SHALL incluir um link “Resultados” para `#resultados`. A seção SHALL incluir o CTA “Conheça os planos” para `#planos`, operável por teclado e com indicação visível de foco.

#### Scenario: Acesso pelo menu móvel
- **WHEN** o visitante seleciona “Resultados” no menu móvel aberto
- **THEN** a navegação aponta para a seção de resultados e o menu fecha

#### Scenario: Visitante escolhe conhecer os planos
- **WHEN** o visitante aciona “Conheça os planos”
- **THEN** a navegação aponta para a seção de planos existente

### Requirement: Alternativas textuais e estabilidade das imagens
Cada montagem SHALL possuir descrição textual que identifique o antes e depois e as respectivas datas, sem depender exclusivamente do texto da imagem. O carregamento SHALL reservar a proporção da imagem e ser adiado até sua aproximação da área visível.

#### Scenario: Leitura por tecnologia assistiva
- **WHEN** um leitor de tela percorre as montagens
- **THEN** identifica cada comparação e as datas dos dois registros por texto alternativo ou legenda acessível

#### Scenario: Carregamento das imagens
- **WHEN** o navegador carrega as imagens da seção
- **THEN** o espaço proporcional de cada imagem já está reservado e as imagens usam carregamento tardio
