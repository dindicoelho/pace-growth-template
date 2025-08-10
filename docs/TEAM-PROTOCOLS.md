# Team Protocols & Standards

## 🎯 Development Philosophy
- **Quality > Speed** (but ship regularly)
- **Test what matters** (not everything)
- **Document decisions** (ADRs)
- **Refactor continuously** (tech debt Fridays)

## 📝 Code Standards

### Git Workflow
main → production (protected)
├── develop → staging (auto-deploy)
│   ├── feature/JIRA-123-description
│   ├── bugfix/JIRA-456-description
│   └── hotfix/JIRA-789-critical-fix
└── release/v1.2.0

### Commit Convention
<type>(<scope>): <subject>
<body>
<footer>
```
Types:

feat: New feature
fix: Bug fix
docs: Documentation only
style: Code style (formatting)
refactor: Code change that neither fixes a bug nor adds a feature
perf: Performance improvement
test: Adding missing tests
chore: Changes to build process or auxiliary tools

Examples:
feat(auth): implement OAuth2 login with Google

- Add Google OAuth provider
- Create callback handler
- Update user model with provider field

Closes #123
Branch Naming
feature/JIRA-123-add-payment-integration
bugfix/JIRA-456-fix-login-redirect
hotfix/JIRA-789-critical-security-patch
release/v2.1.0
✅ Pull Request Process
PR Template
markdown## Description
[What and why]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing done

## Checklist
- [ ] Code follows style guide
- [ ] Self-review completed
- [ ] Comments added where needed
- [ ] Documentation updated
- [ ] No console.logs left
- [ ] No commented code
- [ ] Performance considered
- [ ] Security considered
Review Requirements

2 approvals required (1 must be code owner)
All CI checks must pass
No merge conflicts
Coverage must not decrease

Review SLA

Critical (P0): 2 hours
High (P1): 4 hours
Normal (P2): 24 hours
Low (P3): 48 hours

🧪 Testing Standards
Coverage Requirements

New code: 80% minimum
Overall: 70% minimum
Critical paths: 95% minimum

Test Types
typescript// Unit Test
describe('formatCurrency', () => {
  it('should format BRL currency', () => {
    expect(formatCurrency(1000)).toBe('R$ 1.000,00')
  })
})

// Integration Test
describe('POST /api/users', () => {
  it('should create user with valid data', async () => {
    const response = await request(app)
      .post('/api/users')
      .send(validUserData)
    expect(response.status).toBe(201)
  })
})

// E2E Test
test('user can complete purchase flow', async ({ page }) => {
  await page.goto('/products')
  await page.click('[data-testid="add-to-cart"]')
  await page.click('[data-testid="checkout"]')
  // ...
})
📊 Performance Standards
Metrics

Lighthouse Score: > 90
Bundle Size: < 500KB
First Contentful Paint: < 1.5s
Time to Interactive: < 3.5s
API Response Time (p95): < 200ms

Monitoring

Check performance before each release
Weekly performance reviews
Alerts for degradation > 10%

🔒 Security Standards
Required Checks

 Input validation on all endpoints
 SQL injection prevention (parameterized queries)
 XSS prevention (sanitization)
 CSRF tokens
 Rate limiting
 Authentication on protected routes
 Authorization checks
 Sensitive data encryption
 Security headers configured
 Dependencies vulnerability scan

Security Review
Required for:

Authentication changes
Payment processing
User data handling
Third-party integrations

📈 Monitoring & Alerts
What to Monitor

Application: Errors, performance, usage
Infrastructure: CPU, memory, disk, network
Business: Sign-ups, conversions, churn

Alert Levels

P0 (Critical): Page immediately
P1 (High): Page within 15 min
P2 (Medium): Slack notification
P3 (Low): Email digest

🚀 Deployment Process
Environments

Development: Local machine
Staging: staging.app.com (auto-deploy from develop)
Production: app.com (manual approval required)

Deployment Checklist

 All tests passing
 Code reviewed and approved
 Database migrations tested
 Feature flags configured
 Monitoring alerts configured
 Rollback plan documented
 Stakeholders notified

Rollback Procedure

Identify issue in production
Notify team in #incidents channel
Revert deployment in Vercel/AWS
Run rollback migrations if needed
Verify system stability
Post-mortem within 48h

📝 Documentation Standards
Code Documentation
typescript/**
 * Calculates the monthly recurring revenue (MRR)
 * @param subscriptions - Array of active subscriptions
 * @param includeTrials - Whether to include trial subscriptions
 * @returns Total MRR in cents
 * @example
 * const mrr = calculateMRR(subscriptions, false)
 * console.log(formatCurrency(mrr / 100))
 */
function calculateMRR(
  subscriptions: Subscription[], 
  includeTrials = false
): number {
  // Implementation
}
API Documentation

OpenAPI/Swagger spec required
Examples for each endpoint
Error responses documented
Rate limits specified

Architecture Decision Records (ADRs)
Template: docs/architecture/decisions/ADR-XXX.md
👥 Team Communication
Channels

#general: Announcements
#dev: Development discussion
#incidents: Production issues
#releases: Deployment notifications
#random: Non-work chat

Meetings

Daily Standup: 10:00 AM (15 min)
Sprint Planning: Monday 2:00 PM
Sprint Review: Friday 4:00 PM
Retro: Friday 5:00 PM

On-Call Rotation

Weekly rotation
Primary and secondary on-call
Handoff on Mondays
Compensation: 1 day off per week on-call

📊 Definition of Done
A task is DONE when:

 Code complete and working
 Tests written and passing
 Code reviewed and approved
 Documentation updated
 Deployed to staging
 Product owner approved
 No known bugs
 Performance acceptable
 Security reviewed (if applicable)
 Monitoring added (if applicable)

🎯 Sprint Rituals
Sprint Planning

Review previous sprint metrics
Groom and estimate backlog
Commit to sprint goals
Assign tasks

Daily Standup

What I did yesterday
What I'm doing today
Any blockers

Sprint Review

Demo completed features
Gather feedback
Update roadmap

Retrospective

What went well
What didn't go well
Action items for improvement

📈 Metrics We Track
Engineering Metrics

Velocity (story points/sprint)
Cycle time (idea to production)
Deploy frequency
Mean time to recovery (MTTR)
Change failure rate

Product Metrics

Daily/Monthly Active Users
Feature adoption rate
User satisfaction (NPS)
Churn rate
Revenue metrics

🔥 Incident Response
Severity Levels

SEV1: Complete outage
SEV2: Major functionality broken
SEV3: Minor functionality affected
SEV4: Cosmetic issues

Response Times

SEV1: 5 minutes
SEV2: 15 minutes
SEV3: 1 hour
SEV4: Next business day

Post-Mortem Template

Incident summary
Timeline of events
Root cause analysis
What went well
What went wrong
Action items
Lessons learned
