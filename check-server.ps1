# PowerShell script to check if the development server is running
Write-Host "🔍 Checking Development Server Status..." -ForegroundColor Green

# Check port 3000
$port3000 = netstat -ano | findstr ":3000"
if ($port3000) {
    Write-Host "✅ Server is running on port 3000" -ForegroundColor Green
    Write-Host "🌐 Open your browser to: http://localhost:3000" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Active connections:" -ForegroundColor Yellow
    netstat -ano | findstr ":3000"
} else {
    Write-Host "❌ No server found on port 3000" -ForegroundColor Red
    Write-Host "💡 Run ./dev.ps1 to start the development server" -ForegroundColor Yellow
}

# Check port 3001 as backup
$port3001 = netstat -ano | findstr ":3001"
if ($port3001) {
    Write-Host "✅ Server is running on port 3001" -ForegroundColor Green
    Write-Host "🌐 Open your browser to: http://localhost:3001" -ForegroundColor Cyan
}
