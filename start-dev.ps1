# Script para iniciar o servidor de desenvolvimento
Write-Host "Iniciando servidor de desenvolvimento..." -ForegroundColor Green

# Verificar se node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "Instalando dependências..." -ForegroundColor Yellow
    npm install
}

# Tentar rodar o vite
try {
    $vitePath = "node_modules\.bin\vite.cmd"
    if (Test-Path $vitePath) {
        Write-Host "Usando Vite do node_modules..." -ForegroundColor Green
        & $vitePath
    } else {
        Write-Host "Usando npx vite..." -ForegroundColor Yellow
        npx vite
    }
} catch {
    Write-Host "Erro ao iniciar servidor: $_" -ForegroundColor Red
    Write-Host "Tentando com node diretamente..." -ForegroundColor Yellow
    node node_modules/vite/dist/node/cli.js
}

