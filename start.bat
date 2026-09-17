@echo off
title SMA Negeri 10 Kota Bekasi - Website Resmi & CMS
echo Memulai server portal web SMA Negeri 10 Kota Bekasi...
start http://localhost:3000
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
