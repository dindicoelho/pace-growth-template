# Contributing Guide

## 🎯 Getting Started

Thank you for contributing! Here's how to get started:

### Prerequisites
1. Fork the repository
2. Clone your fork
3. Install dependencies: \`pnpm install\`
4. Create a branch: \`git checkout -b feature/your-feature\`

## 📝 Development Process

### 1. Pick an Issue
- Check existing issues
- Comment to claim it
- Or create a new issue first

### 2. Development
- Write code following our standards
- Add/update tests
- Update documentation
- Test locally

### 3. Commit
Follow our commit convention:
\`\`\`
type(scope): description

[optional body]

[optional footer]
\`\`\`

Types: feat, fix, docs, style, refactor, test, chore

### 4. Pull Request
- Fill PR template completely
- Link related issues
- Ensure CI passes
- Request review

## 🧪 Testing

\`\`\`bash
# Run before submitting PR
pnpm lint
pnpm type-check
pnpm test
pnpm build
\`\`\`

## 📋 Code Standards

### TypeScript
- Strict mode enabled
- Explicit return types
- No \`any\` types

### React
- Functional components
- Custom hooks for logic
- Proper error boundaries

### Styling
- Tailwind utilities
- Mobile-first
- Dark mode support

## 🔍 Review Process

PRs need:
- 2 approvals
- Passing CI
- Updated tests
- Documentation

## 📚 Resources

- [Team Protocols](./docs/TEAM-PROTOCOLS.md)
- [Architecture Guide](./docs/architecture)
- [API Documentation](./docs/api)

## ❓ Questions?

- Open a discussion
- Ask in PR comments
- Check existing docs

Thank you for contributing! 🎉