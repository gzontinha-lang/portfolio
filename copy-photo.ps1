# Script para copiar a foto
$sourceDir = Get-ChildItem -Directory | Where-Object { $_.Name -like "*public*images*" }
if ($sourceDir) {
    $foto = Get-ChildItem -Path $sourceDir.FullName -Filter "*.png" | Select-Object -First 1
    if ($foto) {
        New-Item -ItemType Directory -Force -Path "public\images" | Out-Null
        Copy-Item -LiteralPath $foto.FullName -Destination "public\images\guilherme-foto.png" -Force
        Write-Host "Foto copiada com sucesso: $($foto.Name)"
    } else {
        Write-Host "Arquivo PNG nao encontrado na pasta"
    }
} else {
    Write-Host "Pasta nao encontrada"
}

