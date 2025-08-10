#!/bin/bash

echo "🚀 Setting up PACE Growth Template..."

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check Node version
NODE_VERSION=$(node -v | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}❌ Node.js 18+ required${NC}"
    exit 1
fi

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo -e "${YELLOW}📦 Installing pnpm...${NC}"
    npm install -g pnpm
fi

# Install dependencies
echo -e "${GREEN}📦 Installing dependencies...${NC}"
pnpm install

# Setup environment
if [ ! -f .env.local ]; then
    echo -e "${GREEN}🔧 Setting up environment...${NC}"
    cp .env.example .env.local
    echo -e "${YELLOW}⚠️  Please update .env.local with your values${NC}"
fi

# Setup database
echo -e "${GREEN}🗄️  Setting up database...${NC}"
pnpm db:migrate
pnpm db:seed

# Setup git hooks
echo -e "${GREEN}🪝 Setting up git hooks...${NC}"
pnpm prepare

echo -e "${GREEN}✅ Setup complete!${NC}"
echo -e "${GREEN}Run 'pnpm dev' to start development${NC}"