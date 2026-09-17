# Lightweight Local HTTP Server for SMAN 10 Kota Bekasi Web Portal
$port = 3000
$path = $PSScriptRoot
if (-not $path) { $path = Get-Location }

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Cyan
    Write-Host "   PORTAL WEB & CMS SMA NEGERI 10 KOTA BEKASI AKTIF!" -ForegroundColor Green
    Write-Host "   URL: $prefix" -ForegroundColor Yellow
    Write-Host "   Folder: $path" -ForegroundColor Gray
    Write-Host "   Password Admin CMS: sman10bks" -ForegroundColor Magenta
    Write-Host "   Tekan Ctrl+C di terminal ini untuk mematikan server." -ForegroundColor Gray
    Write-Host "==========================================================" -ForegroundColor Cyan

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        try {
            $urlPath = $request.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($urlPath)) {
                $urlPath = "index.html"
            }

            $localFile = Join-Path $path $urlPath

            if (Test-Path $localFile -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($localFile).ToLower()
                $mime = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".htm"  { "text/html; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".json" { "application/json; charset=utf-8" }
                    ".png"  { "image/png" }
                    ".jpg"  { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    ".svg"  { "image/svg+xml" }
                    ".ico"  { "image/x-icon" }
                    ".webm" { "video/webm" }
                    ".mp4"  { "video/mp4" }
                    Default { "application/octet-stream" }
                }

                $bytes = [System.IO.File]::ReadAllBytes($localFile)
                $response.ContentType = $mime
                $response.ContentLength64 = $bytes.Length
                $response.StatusCode = 200

                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $response.StatusCode = 404
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 File Not Found")
                $response.ContentLength64 = $errBytes.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
                }
            }
        } catch {
            Write-Host "Request handling error: $_" -ForegroundColor DarkGray
        } finally {
            $response.OutputStream.Close()
        }
    }
} catch {
    Write-Host "Server listener stopped: $_" -ForegroundColor Red
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    $listener.Close()
}
