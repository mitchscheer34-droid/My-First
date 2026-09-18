# PowerShell Practice List

A small beginner-friendly web app for saving PowerShell commands you want to practice.

## What it does

- Lets you type a PowerShell command
- Adds the command to a practice list
- Lets you press **Enter** or click **Add command**
- Lets you remove commands from the list
- Shows a message when a command is added or removed

## Example commands

You can add commands such as:

```powershell
Get-Location
Get-ChildItem
Get-Help Get-ChildItem -Examples
New-Item -Name practice -ItemType Directory
sfc /scannow
dism.exe /Online /Cleanup-Image /RestoreHealth
gpupdate /force
ipconfig /flushdns
ipconfig /release
ipconfig /renew
EnterPS-Session
```

## Project files

```text
powerShell-practice-list/
├── index.html
├── script.js
└── README.md
```

- `index.html` contains the webpage structure.
- `script.js` contains the interactive JavaScript behavior.
- `README.md` explains the project for GitHub visitors.

## Run it locally

1. Download or clone the repository.
2. Open the project folder.
3. Double-click `index.html`.
4. The project will open in your default web browser.

## Built with

- HTML
- JavaScript

## Future ideas

- Save the command list in the browser with local storage.
- Add command descriptions and examples.
- Add categories such as files, folders, help, and system information.
- Add a search box.
- Add a dark mode option.

## Author

Mitchell Scheer
