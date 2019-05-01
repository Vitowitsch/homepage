@echo off
START /W powershell -file "%~dp0%\removeChromeRegistryKeys.ps1"
timeout /T 1 > nul
start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --profile-directory=Default