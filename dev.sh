#!/usr/bin/env bash
# Helper de desenvolvimento do SeuInvestimento.
# Uso: ./dev.sh [up|down|logs|build|restart|prisma|seed]
set -euo pipefail

COMPOSE="docker compose -f docker-compose.dev.yml"

case "${1:-up}" in
  up)
    $COMPOSE up -d --build
    echo "Frontend:  http://localhost:${FRONTEND_PORT:-3000}"
    echo "Backend:   http://localhost:${BACKEND_PORT:-3001}"
    echo "API Docs:  http://localhost:${BACKEND_PORT:-3001}/docs"
    echo "MinIO:     http://localhost:9001"
    ;;
  down)
    $COMPOSE down
    ;;
  logs)
    $COMPOSE logs -f "${2:-}"
    ;;
  build)
    $COMPOSE build
    ;;
  restart)
    $COMPOSE restart "${2:-}"
    ;;
  prisma)
    # ex.: ./dev.sh prisma migrate dev --name init
    shift
    $COMPOSE exec backend npx prisma "$@"
    ;;
  seed)
    $COMPOSE exec backend npm run seed
    ;;
  *)
    echo "Uso: ./dev.sh [up|down|logs|build|restart|prisma|seed]"
    exit 1
    ;;
esac
