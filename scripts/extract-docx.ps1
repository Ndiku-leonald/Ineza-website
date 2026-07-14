param(
    [Parameter(Mandatory = $true)] [string] $InputPath,
    [Parameter(Mandatory = $true)] [string] $OutputDirectory
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem

$resolvedInput = (Resolve-Path -LiteralPath $InputPath).Path
$output = [System.IO.Path]::GetFullPath($OutputDirectory)
New-Item -ItemType Directory -Force -Path $output | Out-Null

$archive = [System.IO.Compression.ZipFile]::OpenRead($resolvedInput)
try {
    $documentEntry = $archive.GetEntry('word/document.xml')
    if (-not $documentEntry) { throw 'word/document.xml was not found.' }

    $reader = [System.IO.StreamReader]::new($documentEntry.Open())
    try { [xml] $xml = $reader.ReadToEnd() } finally { $reader.Dispose() }

    $namespace = [System.Xml.XmlNamespaceManager]::new($xml.NameTable)
    $namespace.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
    $lines = foreach ($paragraph in $xml.SelectNodes('//w:body/w:p', $namespace)) {
        $parts = $paragraph.SelectNodes('.//w:t|.//w:tab|.//w:br', $namespace) | ForEach-Object {
            if ($_.LocalName -eq 't') { $_.'#text' }
            elseif ($_.LocalName -eq 'tab') { "`t" }
            else { "`n" }
        }
        ($parts -join '').TrimEnd()
    }
    [System.IO.File]::WriteAllLines((Join-Path $output 'content.txt'), $lines, [System.Text.UTF8Encoding]::new($false))

    $mediaDirectory = Join-Path $output 'media'
    New-Item -ItemType Directory -Force -Path $mediaDirectory | Out-Null
    foreach ($entry in $archive.Entries | Where-Object { $_.FullName -like 'word/media/*' -and $_.Name }) {
        $target = Join-Path $mediaDirectory ([System.IO.Path]::GetFileName($entry.FullName))
        [System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, $target, $true)
    }
} finally {
    $archive.Dispose()
}
