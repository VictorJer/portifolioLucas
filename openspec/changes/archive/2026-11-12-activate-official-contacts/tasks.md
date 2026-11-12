# Tasks

## 1. Ativação dos contatos e verificação dos estados

- [x] 1.1 Preencher `CONTACT` em `src/app/data/content.ts` com WhatsApp `554988107298` e Instagram `https://www.instagram.com/lucasfrancisco_physique/`; conferir os valores exatos no diff, preservando os demais conteúdos.
- [x] 1.2 Ajustar a preparação de `src/app/app.spec.ts` para restaurar os contatos originais antes/depois dos casos e esvaziá-los explicitamente no cenário de indisponibilidade; executar `npm test -- --watch=false` para verificar os dois estados sem dependência de ordem.
- [x] 1.3 Adequar o cenário existente de contatos configurados para verificar os seis links oficiais de WhatsApp, mensagens por plano, Instagram oficial, ausência dos avisos pendentes e atributos de nova aba/acessibilidade/proteção; confirmar aprovação com `npm test -- --watch=false`, preservando os testes de preços e mensagens existentes.

## 2. Integração

- [x] 2.1 Executar `npm run build` e confirmar geração bem-sucedida; revisar o diff final para assegurar que a aplicação altera somente a configuração dos contatos e os testes necessários, sem modificar layout, preços ou adicionar funcionalidades.
