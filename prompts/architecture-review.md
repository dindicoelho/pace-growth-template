# Architecture Review Prompt

Use este prompt para revisar a arquitetura do projeto:

---

Analise a arquitetura atual do projeto pace-growth-template.

## Pontos de Análise:

### 1. Estrutura e Organização
- Separação de concerns está adequada?
- Features modulares bem definidas?
- Acoplamento entre módulos?

### 2. Patterns e Best Practices
- SOLID principles sendo seguidos?
- Design patterns apropriados?
- Anti-patterns presentes?

### 3. Escalabilidade
- Bottlenecks potenciais?
- Pontos de falha únicos?
- Preparado para crescimento 10x?

### 4. Performance
- Queries N+1?
- Caching strategy adequada?
- Bundle splitting otimizado?
- Lazy loading implementado?

### 5. Segurança
- Autenticação robusta?
- Autorização granular?
- Input validation completa?
- Secrets management seguro?

### 6. Maintainability
- Código duplicado?
- Complexidade ciclomática alta?
- Documentação adequada?
- Testes suficientes?

## Output Esperado:

1. **Issues Críticas** (resolver imediatamente)
2. **Melhorias Recomendadas** (próximo sprint)
3. **Considerações Futuras** (backlog)
4. **Pontos Positivos** (manter/replicar)

Forneça código exemplo para cada sugestão.