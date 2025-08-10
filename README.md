# pace-growth-template
Template para produtos em crescimento com processos estabelecidos
# 🚀 PACE Growth Template

> Template profissional para produtos em crescimento com processos estabelecidos

[![CI](https://github.com/dindicoelho/pace-growth-template/actions/workflows/ci.yml/badge.svg)](https://github.com/dindicoelho/pace-growth-template/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📋 Features

- ✅ **Multi-environment:** Development, Staging, Production
- ✅ **CI/CD Pipeline:** GitHub Actions completo
- ✅ **Testing:** Unit, Integration, E2E
- ✅ **Monitoring:** Sentry, Analytics, Performance
- ✅ **Feature Flags:** LaunchDarkly/Unleash ready
- ✅ **Design System:** Componentes UI profissionais
- ✅ **Security:** OWASP compliance, security headers
- ✅ **Performance:** Optimized, cached, lazy-loaded
- ✅ **Documentation:** ADRs, API docs, Storybook

## 🎯 Quick Start

### Prerequisites
- Node.js 20+
- PostgreSQL 15+ (or Supabase)
- Redis (optional)
- pnpm (recommended) or npm

### Installation

\`\`\`bash
# Clone template
git clone https://github.com/dindicoelho/pace-growth-template
cd pace-growth-template

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env.local

# Setup database
pnpm db:migrate
pnpm db:seed

# Start development
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
src/
├── app/              # Next.js App Router
├── features/         # Feature-based modules
│   ├── auth/        # Authentication feature
│   ├── dashboard/   # Dashboard feature
│   └── billing/     # Billing feature
├── components/      # Shared components
│   ├── ui/          # Design system
│   └── shared/      # Business components
├── lib/             # Core utilities
├── services/        # Business logic
├── hooks/           # Custom React hooks
└── types/           # TypeScript types
\`\`\`

## 🛠 Tech Stack

### Core
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3
- **Database:** PostgreSQL + Prisma
- **Authentication:** NextAuth.js

### Infrastructure
- **Hosting:** Vercel
- **Database:** Supabase/Neon
- **CDN:** Cloudflare
- **Monitoring:** Sentry
- **Analytics:** PostHog

### Development
- **Testing:** Jest + Playwright
- **Linting:** ESLint + Prettier
- **CI/CD:** GitHub Actions
- **Documentation:** Storybook

## 📝 Available Scripts

\`\`\`bash
# Development
pnpm dev              # Start dev server
pnpm dev:staging      # Start with staging env

# Building
pnpm build            # Build for production
pnpm build:analyze    # Analyze bundle size

# Testing
pnpm test            # Run all tests
pnpm test:unit       # Unit tests only
pnpm test:e2e        # E2E tests only
pnpm test:coverage   # Coverage report

# Database
pnpm db:migrate      # Run migrations
pnpm db:studio       # Open Prisma Studio
pnpm db:seed         # Seed database

# Quality
pnpm lint            # Lint code
pnpm format          # Format code
pnpm type-check      # TypeScript check
\`\`\`

## 🔒 Environment Variables

See \`.env.example\` for all required variables.

Key variables:
- \`DATABASE_URL\` - PostgreSQL connection
- \`NEXTAUTH_SECRET\` - Auth secret
- \`NEXT_PUBLIC_APP_URL\` - App URL

## 🚀 Deployment

### Staging (Auto-deploy)
Push to \`develop\` branch triggers automatic deployment to staging.

### Production (Manual)
1. Create PR from \`develop\` to \`main\`
2. Get 2 approvals
3. Merge to trigger production deployment
4. Verify deployment at production URL

## 📊 Performance Targets

- Lighthouse Score: > 90
- Bundle Size: < 500KB
- FCP: < 1.5s
- TTI: < 3.5s
- API Response (p95): < 200ms

## 🧪 Testing Strategy

### Coverage Requirements
- Unit Tests: 80%
- Integration: Critical paths
- E2E: User journeys

### Running Tests
\`\`\`bash
# Local
pnpm test

# CI/CD
Automatically runs on PR
\`\`\`

## 📚 Documentation

- [Architecture Decisions](./docs/architecture/decisions)
- [API Documentation](./docs/api)
- [Team Protocols](./docs/TEAM-PROTOCOLS.md)
- [Contributing Guide](./CONTRIBUTING.md)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes (follow conventions)
4. Push to branch
5. Open Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## 📄 License

MIT - see [LICENSE](./LICENSE) file

## 🆘 Support

- Documentation: [docs/](./docs)
- Issues: [GitHub Issues](https://github.com/dindicoelho/pace-growth-template/issues)
- Discussions: [GitHub Discussions](https://github.com/dindicoelho/pace-growth-template/discussions)

---

Built with ❤️ using PACE Framework