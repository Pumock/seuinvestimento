@echo off
REM Helper de desenvolvimento do SeuInvestimento (Windows).
REM Uso: dev.bat [up|down|logs|build|restart|seed]
setlocal
set COMPOSE=docker compose -f docker-compose.dev.yml

if "%1"=="" goto up
if "%1"=="up" goto up
if "%1"=="down" goto down
if "%1"=="logs" goto logs
if "%1"=="build" goto build
if "%1"=="restart" goto restart
if "%1"=="seed" goto seed
goto usage

:up
%COMPOSE% up -d --build
echo Frontend:  http://localhost:3000
echo Backend:   http://localhost:3001
echo API Docs:  http://localhost:3001/docs
echo MinIO:     http://localhost:9001
goto end

:down
%COMPOSE% down
goto end

:logs
%COMPOSE% logs -f %2
goto end

:build
%COMPOSE% build
goto end

:restart
%COMPOSE% restart %2
goto end

:seed
%COMPOSE% exec backend npm run seed
goto end

:usage
echo Uso: dev.bat [up^|down^|logs^|build^|restart^|seed]

:end
endlocal
