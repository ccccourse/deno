# Deno 安裝

在 windows 中，請先用《系統管理員身分》進行下列指令。
(用 vscode 也請按滑鼠右鍵啟動 vscode 之後才做這件事)

```
PS D:\ccc> choco install deno
Chocolatey v0.10.11
Installing the following packages:
deno
By installing you accept licenses for the packages.
Progress: Downloading deno 1.0.0... 100%

deno v1.0.0 [Approved]
deno package files install completed. Performing other installation steps.
The package deno wants to run 'chocolateyinstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[N]o/[P]rint): y

Downloading deno 64 bit
  from 'https://github.com/denoland/deno/releases/download/v1.0.0/deno-x86_64-pc-windows-msvc.zip'
Progress: 100% - Completed download of C:\Users\user\AppData\Local\Temp\chocolatey\deno\1.0.0\deno-x86_64-pc-windows-msvc.zip (14.22 MB).
Download of deno-x86_64-pc-windows-msvc.zip (14.22 MB) completed.
Hashes match.
Extracting C:\Users\user\AppData\Local\Temp\chocolatey\deno\1.0.0\deno-x86_64-pc-windows-msvc.zip to C:\ProgramData\chocolatey\lib\deno...
C:\ProgramData\chocolatey\lib\deno
Run 'deno --help' to get started
 ShimGen has successfully created a shim for deno.exe
 The install of deno was successful.
  Software installed to 'C:\ProgramData\chocolatey\lib\deno'

Chocolatey installed 1/1 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).

Enjoy using Chocolatey? Explore more amazing features to take your
experience to the next level at
 https://chocolatey.org/compare
```
