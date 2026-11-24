; Inno Setup Script - KANDIL BODRUMU Kurulum Paketi

#define MyAppName "KANDİL BODRUMU"
#define MyAppVersion "1.0.0"
#define MyAppPublisher "AGY"
#define MyAppExeName "KANDiL BODRUMU.exe"
#define SourceDir "d:\Games\sutun kırma\electron-build\dist\KANDiL BODRUMU-win32-x64"
#define OutputDir "d:\Games\sutun kırma\CIKTILAR (APK ve EXE)"

[Setup]
; Temel Uygulama Bilgileri
AppId={{D8C9B543-A78E-45E9-95E2-F4A708170B92}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
DefaultDirName={autopf}\{#MyAppName}
DefaultGroupName={#MyAppName}
AllowNoIcons=yes
OutputDir={#OutputDir}
OutputBaseFilename=KANDIL_BODRUMU_Setup
SetupIconFile=d:\Games\sutun kırma\electron-build\icon.ico
Compression=lzma2/fast
SolidCompression=no
WizardStyle=modern
PrivilegesRequired=lowest
DisableProgramGroupPage=yes

[Languages]
Name: "turkish"; MessagesFile: "compiler:Languages\Turkish.isl"
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "{#SourceDir}\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "d:\Games\sutun kırma\electron-build\icon.ico"; DestDir: "{app}"; Flags: ignoreversion

[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\icon.ico"
Name: "{group}\{cm:UninstallProgram,{#MyAppName}}"; Filename: "{uninstallexe}"
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\icon.ico"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent
