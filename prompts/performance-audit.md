markdown# Performance Audit Prompt

Realize auditoria completa de performance:

---

Analise a performance do projeto pace-growth-template.

## Checklist de Performance:

### Frontend
- [ ] Bundle size analysis
- [ ] Code splitting adequado
- [ ] Images otimizadas (WebP, lazy loading)
- [ ] Fonts otimizadas (subsetting, preload)
- [ ] CSS crítico inline
- [ ] JavaScript não-bloqueante
- [ ] Service Worker para cache
- [ ] Prefetch/Preconnect recursos

### Backend
- [ ] Database queries otimizadas
- [ ] Índices apropriados
- [ ] N+1 queries eliminadas
- [ ] Caching estratégico (Redis)
- [ ] Rate limiting implementado
- [ ] Compression (gzip/brotli)
- [ ] CDN para assets
- [ ] API pagination

### Métricas Alvo:
- Lighthouse Score: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Bundle Size: < 500KB
- API Response (p95): < 200ms

## Análise Necessária:

1. **Current Metrics**
   - Run Lighthouse audit
   - Measure bundle size
   - Profile API endpoints

2. **Bottlenecks Identificados**
   - List top 5 performance issues
   - Impact de cada issue
   - Effort para resolver

3. **Optimization Plan**
   ```typescript
   // Exemplo de otimização
   // ANTES:
   const users = await db.user.findMany()
   for (const user of users) {
     user.posts = await db.post.findMany({ where: { userId: user.id }})
   }
   
   // DEPOIS:
   const users = await db.user.findMany({
     include: { posts: true }
   })

Monitoring Setup

Performance budgets
Alertas de degradação
Dashboard métricas



Priorize quick wins com alto impacto.

## **3. `prompts/security-scan.md`**
```markdown
# Security Scan Prompt

Execute análise de segurança completa:

---

Faça security scan no projeto pace-growth-template.

## OWASP Top 10 Checklist:

### 1. Injection
- [ ] SQL Injection prevenido (parameterized queries)
- [ ] NoSQL Injection prevenido
- [ ] Command Injection prevenido
- [ ] LDAP Injection prevenido

### 2. Broken Authentication
- [ ] Passwords hasheados (bcrypt/argon2)
- [ ] Session management seguro
- [ ] MFA disponível
- [ ] Brute force protection

### 3. Sensitive Data Exposure
- [ ] HTTPS everywhere
- [ ] Data encryption at rest
- [ ] PII mascarado em logs
- [ ] Secrets em variáveis ambiente

### 4. XML External Entities (XXE)
- [ ] XML parsing seguro
- [ ] DTD processing desabilitado

### 5. Broken Access Control
- [ ] Authorization em todas rotas
- [ ] RBAC implementado
- [ ] Principle of least privilege
- [ ] CORS configurado corretamente

### 6. Security Misconfiguration
- [ ] Headers de segurança (CSP, HSTS, etc)
- [ ] Error handling sem expor detalhes
- [ ] Dependências atualizadas
- [ ] Configurações default alteradas

### 7. Cross-Site Scripting (XSS)
- [ ] Input sanitization
- [ ] Output encoding
- [ ] CSP implementado
- [ ] React escape by default

### 8. Insecure Deserialization
- [ ] JSON schema validation
- [ ] Type checking
- [ ] Input validation

### 9. Using Components with Known Vulnerabilities
- [ ] npm audit regularmente
- [ ] Dependabot configurado
- [ ] License compliance

### 10. Insufficient Logging & Monitoring
- [ ] Logs de segurança
- [ ] Alertas configurados
- [ ] Audit trail completo
- [ ] Incident response plan

## Security Headers Check:
```typescript
// Next.js config
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }
]
Output:

Vulnerabilidades Críticas (fix imediato)
Riscos Médios (próximo sprint)
Melhorias Recomendadas (backlog)
Código de Correção (exemplos)


## **4. `prompts/test-generation.md`**
```markdown
# Test Generation Prompt

Gere testes abrangentes para o código:

---

Crie testes para [COMPONENTE/FUNÇÃO] no projeto pace-growth-template.

## Requisitos de Teste:

### Coverage Goals
- Statements: > 90%
- Branches: > 85%
- Functions: > 90%
- Lines: > 90%

### Tipos de Teste Necessários:

#### 1. Unit Tests
```typescript
// Exemplo estrutura
describe('ComponentName', () => {
  describe('Happy Path', () => {
    it('should render correctly with props', () => {})
    it('should handle user interaction', () => {})
  })
  
  describe('Edge Cases', () => {
    it('should handle null/undefined props', () => {})
    it('should handle empty arrays', () => {})
    it('should handle max values', () => {})
  })
  
  describe('Error Scenarios', () => {
    it('should show error state', () => {})
    it('should recover from errors', () => {})
  })
})
2. Integration Tests
typescript// API endpoint tests
describe('POST /api/v1/users', () => {
  it('should create user with valid data', async () => {})
  it('should validate required fields', async () => {})
  it('should handle duplicate emails', async () => {})
  it('should enforce rate limiting', async () => {})
})
3. E2E Tests (Critical Paths)
typescript// User journey tests
test('complete purchase flow', async ({ page }) => {
  // Login
  // Browse products
  // Add to cart
  // Checkout
  // Payment
  // Confirmation
})
Test Cases para Gerar:
Happy Path

Comportamento normal esperado
Fluxo completo sem erros

Edge Cases

Valores limites (0, -1, MAX_INT)
Arrays vazios
Strings vazias/null/undefined
Caracteres especiais
Timezone diferentes
Locales diferentes

Error Handling

Network failures
Invalid input
Timeout scenarios
Rate limiting
Auth failures
Server errors (500, 503)

Performance

Large datasets
Concurrent requests
Memory leaks
Slow network

Security

SQL injection attempts
XSS attempts
Invalid tokens
Expired sessions
CORS violations

Mocking Strategy:
typescript// Mock external services
jest.mock('@/lib/api-client')
jest.mock('@/services/email')

// Mock environment
process.env.NODE_ENV = 'test'

// Mock timers if needed
jest.useFakeTimers()
Gere testes que:

São independentes
São determinísticos
São rápidos
Testam comportamento, não implementação
Têm nomes descritivos


## **5. `prompts/database-optimization.md`**
```markdown
# Database Optimization Prompt

Otimize queries e estrutura do banco:

---

Analise e otimize o database do projeto pace-growth-template.

## Análise Necessária:

### 1. Schema Review
- [ ] Normalização adequada (3NF)?
- [ ] Desnormalização estratégica onde necessário?
- [ ] Tipos de dados apropriados?
- [ ] Constraints definidas?

### 2. Indexing Strategy
```sql
-- Analyze missing indexes
SELECT 
  schemaname,
  tablename,
  attname,
  n_distinct,
  most_common_vals
FROM pg_stats
WHERE schemaname = 'public'
  AND n_distinct > 100
  AND attname NOT IN (
    SELECT column_name 
    FROM information_schema.key_column_usage
  );
3. Query Performance

Identificar queries lentas (> 100ms)
Encontrar N+1 queries
Otimizar JOINs complexos
Implementar query caching

4. Optimization Techniques
Indexes Necessários:
sql-- Foreign keys
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_comments_post_id ON comments(post_id);

-- Search fields
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_title_gin ON posts USING gin(to_tsvector('english', title));

-- Composite indexes for common queries
CREATE INDEX idx_posts_user_created ON posts(user_id, created_at DESC);
Query Optimizations:
typescript// ANTES: N+1 Query
const posts = await db.post.findMany()
for (const post of posts) {
  post.comments = await db.comment.findMany({ 
    where: { postId: post.id } 
  })
}

// DEPOIS: Single Query with Join
const posts = await db.post.findMany({
  include: {
    comments: {
      orderBy: { createdAt: 'desc' },
      take: 10
    }
  }
})
Database Views:
sql-- Materialized view for expensive aggregations
CREATE MATERIALIZED VIEW user_statistics AS
SELECT 
  user_id,
  COUNT(DISTINCT post_id) as post_count,
  SUM(view_count) as total_views,
  AVG(comment_count) as avg_comments
FROM posts
GROUP BY user_id;

-- Refresh periodically
REFRESH MATERIALIZED VIEW CONCURRENTLY user_statistics;
5. Monitoring Queries:
sql-- Slow queries
SELECT 
  query,
  mean_exec_time,
  calls,
  total_exec_time
FROM pg_stat_statements
WHERE mean_exec_time > 100
ORDER BY mean_exec_time DESC
LIMIT 20;

-- Table sizes
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
Output Esperado:

Lista de indexes para criar
Queries para otimizar (antes/depois)
Schema changes recomendadas
Caching strategy
Monitoring dashboard setup

