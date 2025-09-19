# PowerShell script to run the development server
Write-Host "🚀 Starting Portfolio Development Server..." -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found. Make sure you're in the portfolio directory." -ForegroundColor Red
    exit 1
}

# Install dependencies if needed
Write-Host "📦 Checking dependencies..." -ForegroundColor Yellow
npm install

# Start development server
Write-Host "🔥 Starting Next.js development server..." -ForegroundColor Cyan
Write-Host "📍 Server will be available at: http://localhost:3000" -ForegroundColor Green
Write-Host "⚠️  Ignore Console Ninja warnings - they don't affect functionality" -ForegroundColor Yellow
Write-Host ""

npm run dev
