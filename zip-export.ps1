Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$sourceDir = "D:\evdt\rmr-roofing\out"
$zipPath = "D:\evdt\rmr-roofing\out.zip"

if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

$archive = [System.IO.Compression.ZipFile]::Open($zipPath, [System.IO.Compression.ZipArchiveMode]::Create)
Get-ChildItem -Path $sourceDir -Recurse | Where-Object { -not $_.PSIsContainer } | ForEach-Object {
    $relativePath = $_.FullName.Substring($sourceDir.Length + 1).Replace('\', '/')
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $_.FullName, $relativePath, [System.IO.Compression.CompressionLevel]::Optimal)
}
$archive.Dispose()
Write-Host "Successfully created Linux/cPanel compatible out.zip with forward slashes!"
