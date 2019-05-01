param([switch]$Elevated)
function Check-Admin {
    $currentUser = New-Object Security.Principal.WindowsPrincipal $([Security.Principal.WindowsIdentity]::GetCurrent())
    $currentUser.IsInRole([Security.Principal.WindowsBuiltinRole]::Administrator)
}
if ((Check-Admin) -eq $false)  {
    if ($elevated) {
        # could not elevate, quit
    }
    else {
        $proc = Start-Process powershell.exe -Verb RunAs -Wait -ArgumentList ('-noprofile -file "{0}" -elevated' -f ($myinvocation.MyCommand.Definition))
    }
    exit
}
   
$exists = Test-Path HKLM:\Software\Policies\Google\Chrome\ExtensionAllowedTypes
if ($exists) {
    Write-Host "Removed ExtensionAllowedTypes"
    Remove-Item HKLM:\Software\Policies\Google\Chrome\ExtensionAllowedTypes
}
$exists = Test-Path HKLM:\Software\Policies\Google\Chrome\ExtensionInstallBlacklist
if ($exists) {
    Write-Host "Removed ExtensionInstallBlacklist"
    Remove-Item HKLM:\Software\Policies\Google\Chrome\ExtensionInstallBlacklist
}
$exists = Test-Path HKLM:\Software\Policies\Google\Chrome\ExtensionInstallForcelist
$exists = $false
if ($exists) {
    Write-Host "Removed ExtensionInstallForcelist"
    Remove-Item HKLM:\Software\Policies\Google\Chrome\ExtensionInstallForcelist
}

$prop = (Get-ItemProperty -Path HKLM:\Software\Policies\Google\Chrome -Name HideWebStoreIcon).HideWebStoreIcon
if ($prop -eq 1) {
    Write-Host "Set HideWebStoreIcon to 0"
    New-ItemProperty -Path HKLM:\Software\Policies\Google\Chrome -Name HideWebStoreIcon -Value 0 -PropertyType DWORD -Force | Out-Null
}

$prop = (Get-ItemProperty -Path HKLM:\Software\Policies\Google\Chrome -Name DisablePluginFinder).DisablePluginFinder
if ($prop -eq 1) {
    Write-Host "Set DisablePluginFinder to 0"
    New-ItemProperty -Path HKLM:\Software\Policies\Google\Chrome -Name DisablePluginFinder -Value 0 -PropertyType DWORD -Force | Out-Null
}
New-ItemProperty -Path HKLM:\Software\Policies\Google\Chrome -Name SigninAllowed -Value 1 -PropertyType DWORD -Force | Out-Null