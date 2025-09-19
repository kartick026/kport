# PowerShell script to build the portfolio
Write-Host "🔨 Building Portfolio..." -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found. Make sure you're in the portfolio directory." -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Build the project
Write-Host "🏗️ Building Next.js application..." -ForegroundColor Cyan
npm run build

Write-Host "✅ Build completed successfully!" -ForegroundColor Green
Write-Host "📁 Output files are in the .next directory" -ForegroundColor Blue
