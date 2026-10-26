$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:8085/')
$listener.Start()
$baseDir = "C:\Users\Lenovo\.gemini\antigravity\scratch\sanjeevani-blood-centre"
Write-Host "Server started at http://localhost:8085/"

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($urlPath)) { $urlPath = 'index.html' }
        
        $filePath = Join-Path $baseDir $urlPath.Replace('/', [IO.Path]::DirectorySeparatorChar)
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [IO.File]::ReadAllBytes($filePath)
            $ext = [IO.Path]::GetExtension($filePath).ToLower()
            switch ($ext) {
                '.html' { $response.ContentType = 'text/html; charset=utf-8' }
                '.css'  { $response.ContentType = 'text/css' }
                '.js'   { $response.ContentType = 'application/javascript' }
                '.png'  { $response.ContentType = 'image/png' }
                '.svg'  { $response.ContentType = 'image/svg+xml' }
                default { $response.ContentType = 'application/octet-stream' }
            }
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes('404 Not Found')
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    } catch {
        break
    }
}
