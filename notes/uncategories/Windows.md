---
title: Windows
---

# Windows

## 環境變數

| 變數                     | 意義                                                     |
|:------------------------ |:-------------------------------------------------------- |
| %ALLUSERSPROFILE%        | All Users設定檔的資料夾位置。                            |
| %APPDATA%                | 目前使用者的Application Data資料夾位置。                 |
| %CD%                     | 目前的工作資料夾。                                       |
| %CLIENTNAME%             | 目前使用者的NETBIOS電腦名稱。                            |
| %CMDCMDLINE%             | 處理目前命令提示字元視窗命令的cmd.exe的完整路徑。        |
| %CMDEXTVERSION%          | 目前Command Processor Extensions的版本。                 |
| %COMPUTERNAME%           | 電腦名稱。                                               |
| %COMSPEC%                | 命令提示字元視窗的解譯程式路徑，通常與%CMDCMDLINE%相同。 |
| %CommonProgramFiles%     | Common Files資料夾的路徑。                               |
| %DATE%                   | 目前的系統日期。                                         |
| %ERRORLEVEL%             | 最近執行過的命令的錯誤碼；非零的值表示發生過的錯誤碼。   |
| %HOMESHARE%              | 目前使用者共用資料夾的網路路徑。                         |
| %HomeDrive%              | 使用者目錄的磁碟機。                                     |
| %HomePath%               | 使用者家目錄。                                           |
| %LOGONSEVER%             | 目前使用者所登入的網路控制器名稱。                       |
| %NUMBER_OF_PROCESSORS%   | 電腦的處理器數量。                                       |
| %OS%                     | 作業系統名稱，其值固定為Windows_NT                       |
| %PATHEXT%                | 作業系統是為執行檔的副檔名。                             |
| %PROCESSOR_ARCHITECTURE% | 處理器的架構名稱，例如x86。                              |
| %PROCESSOR_IDENTFIER%    | 說明處理器的文字（不一定會有此環境變數）。               |
| %PROCESSOR_LEVEL%        | 處理器的model number。                                   |
| %PROCESSOR_REVISION%     | 處理器的revision number。                                |
| %PROMPT%                 | 目前解譯程式的命令提示字串。                             |
| %Path%                   | 執行檔的搜尋路徑。                                       |
| %ProgramFiles%           | 應用程式目錄，預設是C:\Program Files。                   |
| %ProgramFiles(x86)%      | 應用程式目錄，預設是C:\Program Files (x86)。             |
| %RANDOM%                 | 顯示0到32767之間的十進位整數亂數。                       |
| %SESSIONNAME%            | 連上終端伺服器的session names。                          |
| %SystemDirectory%        | 系統目錄，預設是C:\WINNT\System32或C:\WINDOWS\System32。 |
| %SystemDrive%            | 系統磁碟機，預設是C:。                                   |
| %SystemRoot%             | 系統根目錄，預設是C:\WINNT或C:\WINDOWS。                 |
| %TIME%                   | 目前的系統時間。                                         |
| %Temp%、%Tmp%            | 暫存檔目錄。                                             |
| %USERPROFILE%            | 目前使用者的設定檔路徑。                                 |
| %UserDomain%             | 包含使用者帳號的網域名稱，或者電腦名稱。                 |
| %UserName%               | 使用者帳號名稱。                                         |
| %WinDir%                 | Windows目錄，預設是C:\WINNT或C:\WINDOWS。                |


## 常見通訊埠

常見的服務及其對通訊埠和功能列表

| 通訊埠      | 協議    | 服務                                            |
| ----------- | ------- | ----------------------------------------------- |
| 20          | TCP     | 檔案傳輸協議 (FTP) 資料                         |
| 21          | TCP     | FTP 伺服器                                      |
| 22          | TCP     | SSH                                             |
| 23          | TCP     | Telnet 遠程登錄伺服器                           |
| 25          | TCP     | 簡單郵件傳輸協議 (SMTP)                         |
| 53          | TCP/UDP | 域名系統 (DNS)                                  |
| 67/68       | UDP     | 動態主機配置協議 (DHCP)                         |
| 69          | UDP     | 普通 FTP (TFTP)                                 |
| 80          | TCP     | 超文本傳輸協議 - 用於傳輸網頁 (HTTP)            |
| 110         | TCP     | 郵局協議 3 (POP3) - 用於接收電子郵件            |
| 123         | UDP     | 網路時間協議 (NTP)                              |
| 137/138/139 | TCP/UDP | 網路 BIOS                                       |
| 143         | TCP     | 網際網路資訊存取協定（IMAP） - 用於檢索電子郵件 |
| 161/162     | TCP/UDP | 簡單網路管理協定（SNMP)                         |
| 179         | TCP     | 邊界閘道器協定 (BGP)                            |
| 389         | TCP/UDP | 輕型目錄存取協定 (LDAP)                         |
| 443         | TCP     | 超文字SSL/TLS傳輸安全協定或QUIC (HTTPS)         |
| 636         | TCP/UDP | LDAP over TLS 加密傳輸 (LDAPS）                 |
| 989/990     | TCP     | 基於 SSL/TLS 的 FTP (FTPS)                      |

> 參考：[Service Name and Transport Protocol Port Number Registry - IANA ](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml)
