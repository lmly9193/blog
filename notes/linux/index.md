---
title: Linux
---

## Linux 目錄配置

- Linux 目錄樹配置標準參考：[FHS (Filesystem Hierarchy Standard)](https://www.pathname.com/fhs/)
- FHS 定義的目錄資訊，主要分為下表四種

|          | shareable                        | unshareable               |
| -------- | -------------------------------- | ------------------------- |
| static   | `/usr`<br>`/opt`                 | `/etc`<br>`/boot`         |
| variable | `/var/mail`<br>`/var/spool/news` | `/var/run`<br>`/var/lock` |

### 基本目錄

`/etc`，`/bin`，`/dev`，`/lib`，`/sbin` 這五個次目錄都要與根目錄一起，不可為獨立的磁碟分割區。

| 目錄     | 介紹                                                                                                                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/bin`   | 放單人維護模式下還能夠被操作的指令，如：`ls`、`mv`、`rm`。                                                                                                                                       |
| `/boot`  | 放系統核心及開機相關檔案                                                                                                                                                                         |
| `/dev`   | 在 Linux 系統中，任何裝置與周邊設備都是以檔案的型態存在於這個目錄中。透過目錄下的檔案就可以存取某個裝置了                                                                                        |
| `/etc`   | 系統的主要設定檔都放在這個目錄內，如：人員的帳號密碼檔，各種服務的啟始檔。一般來說這個目錄下的個檔案屬性是可以讓一般使用者查閱的，但只有 root 有權限修改。FHS 建議不要放置可執行檔在這個目錄中。 |
| `/root`  | 系統管理員的家目錄。                                                                                                                                                                             |
| `/home`  | 使用者的家目錄 如： `~`代表目前使用者的家目錄，`~ubuntu`代表 ubuntu 的家目錄                                                                                                                     |
| `/lib`   | 系統的函式庫非常多，而 `/lib` 放置的則是開機時會用到的函式庫，以及在 `/bin` 或是 `/sbin` 底下指令會呼叫的函式庫。                                                                                |
| `/media` | 放置可移除的裝置。                                                                                                                                                                               |
| `/mnt`   | 軟碟及光碟預設掛載的地方。如果你想要暫時掛載某些額外的裝置，一般建議可議放置在這個目錄中。                                                                                                       |
| `/opt`   | 這是給第三方協定軟體放置的目錄。                                                                                                                                                                 |
| `/sbin`  | 放置在這個目錄下的為開機過程中所需要的，裡面包含了開機，修復，還原系統所需要的指令                                                                                                               |
| `/srv`   | Service 的縮寫，是一些網路服務啟動後，這些服務所需要取用的資料目錄。如： WWW、FTP                                                                                                                |
| `/tmp`   | 這個是讓一般使用者或是正在執行的程式暫時放置檔案的地方。                                                                                                                                         |

#### 其他目錄

| 目錄    | 介紹                                                                                                                                                     |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/proc` | 這個目錄本身是一個「虛擬檔案系統」，他放置的資料都是在記憶體當中，如：系統核心、行程資訊、週邊以及網路的狀態的鞥等。這個目錄下的資料都是放在記憶體當中。 |
| `/sys`  | 跟 `/proc` 非常類似，也是紀錄與核心相關的資訊。                                                                                                          |

##### `/usr` 目錄

依據 FHS 的基本定義，`/usr` 裡面放置的資料屬於「可分享的」與「不可變動的」。
此目錄包括許多子目錄，用來存放系統指令、安裝程式及套件。
有點類似 Windows 的 `C:\Windows\` + `C:\Program Files\` 的綜合體.

> usr 是 Unix Software Resource 的縮寫，是 Unix 作業系統軟體資源所放置的目錄。

| 目錄           | 介紹                                                                         |
| -------------- | ---------------------------------------------------------------------------- |
| `/usr/bin`     | 絕大部份使用者可以使用的指令都放在這。與/bin 的差別在於是否與開機過程有關    |
| `/usr/include` | C/C++ 等程式語言的 header 檔&include 檔放置處。                              |
| `/usr/lib`     | 包含各應用軟體的函式庫，目標檔案，以及不被一般使用者慣用的執行檔或 script。  |
| `/usr/local`   | 系統管理員在本機自行安裝自己下載的軟體，建議安裝到此目錄，這樣會便於管理。   |
| `/usr/sbin`    | 非系統正常運作所需要的系統指令。如： daemon。                                |
| `/usr/share`   | 放置共享文件的地方，在這個目錄下放置的資料幾乎是不分硬體架構均可讀取的資料。 |
| `/usr/src`     | 一般原始碼建議放置到這裡。                                                   |

##### `/var` 目錄

如果 `/usr` 是安裝時會佔用較大硬碟容量的目錄，那麼 `/var` 就是在系統用作之後才會漸漸佔用硬碟容量的目錄。
因為 `/var` 目錄主要針對常態性變動的檔案，包含快取、日誌以及一些軟體運作所產生的檔案，或是 MySQL 資料庫的檔案等等.

| 目錄          | 介紹                                                                                                                                                                 |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/var/cache/` | 應用程式本身運中過程中會產生的一些暫存檔。                                                                                                                           |
| `/var/lib/`   | 程式本身執行的過程中。需要使用到的資料檔案放置的目錄。在此目錄下各自的疃體應該要有各自的目錄。如： MySQL 的資料庫放置到 `/var/lib/mysql/`。                          |
| `/var/lock/`  | 某些裝置或是檔案資源一次只能被一個應用程式所使用，如果同時有兩個程式使用該裝置時，就可能產生一些錯誤的狀況，因此就得要將該裝置上鎖，以確保該裝置只會給單一程式使用。 |
| `/var/log/`   | 登入檔放置的目錄。                                                                                                                                                   |
| `/var/mail/`  | 放置個人電子郵件信箱的目錄。                                                                                                                                         |
| `/var/run/`   | 某些程式或是服務啟動後，會將他們的 PID 放置在這個目錄下。                                                                                                            |
| `/var/spool/` | 放置一些佇列資料。如：主機收到電子郵件後，放於 `/var/spool/mail`。                                                                                                   |

### 練習題

1. Linux 目錄樹配置標準 FHS，主要定義那三段目錄？
   > 1. 最上層根目錄 `/`
   > 2. 次層 `/usr`
   > 3. 次層 `/var` 的目錄內容。
2. Linux 目錄樹配置標準 FHS，定義的目錄資訊，主要分為那四種？
   > 1. shareable
   > 2. unshareable
   > 3. static
   > 4. variable.
3. 目錄 `/usr` 在 Linux 目錄樹配置標準 FHS 中，包含那兩種資訊？
   > 1. shareable
   > 2. static.
4. 目錄 `/etc` 在 Linux 目錄樹配置標準 FHS 中，包含那兩種資訊？
   > 1. unshareable
   > 2. static.
5. 目錄 `/boot` 在 Linux 目錄樹配置標準 FHS 中，包含那兩種資訊？
   > 1. unshareable
   > 2. static.
6. 目錄 `/var/mail` 在 Linux 目錄樹配置標準 FHS 中，包含那兩種資訊？
   > 1. shareable
   > 2. variable.
7. 目錄 `/var/run` 在 Linux 目錄樹配置標準 FHS 中，包含那兩種資訊？
   > 1. unshareable
   > 2. variable.
8. Linux 系統中，有那五個次目錄必須與根目錄同一分割槽，不可獨立分割？
   > `/etc`，`/bin`，`/dev`，`/lib`，`/sbin` 等五個次目錄。
9. Linux 安裝套件主要放在那個目錄？
   > `/usr`
10. Linux 設定檔放在那個目錄？
    > `/etc`
11. Linux 常用的指令，例如： `ls`，放在那個目錄？
    > `/bin`
12. Linux 系統中，次目錄 `/bin` 主要放那些類型的檔案？
    > 放常用執行檔。
13. Linux 系統中，次目錄 `/boot` 主要放那些類型的檔案？
    > 放 Linux 核心及開機相關檔案。
14. Linux 系統中，次目錄 `/dev` 主要放那些類型的檔案？
    > 放裝置有關的檔案，Linux 把裝置當成檔案看待。
15. Linux 系統中，次目錄 `/etc` 主要放那些類型的檔案？
    > 放系統在開機過程需要讀取的檔案。
16. Linux 系統中，次目錄 `/etc/rc.d` 主要放那些類型的檔案？
    > 記錄開關機過程中的 scripts 檔案。
17. Linux 系統中，次目錄 `/etc/init.d` 主要放那些類型的檔案？
    > 放所有服務預設的啟動 scripts。
18. Linux 系統中，次目錄 `/etx/X11` 主要放那些類型的檔案？
    > 放 X window 有關的設定檔。
19. Linux 系統中，次目錄 `/home` 主要放那些類型的檔案？
    > 使用者的家目錄，放使用者個人檔案及設定。
20. Linux 系統中，次目錄 `/lib` 主要放那些類型的檔案？
    > 放 Linux 執行或編譯程式時要使用的函式庫。
21. Linux 系統中，次目錄 `/mnt` 主要放那些類型的檔案？
    > 軟碟及光碟預設掛載的地方。
22. Linux 系統中，次目錄 `/root` 主要放那些類型的檔案？
    > 系統管理員的家目錄，放系統管理員個人檔案及設定。
23. Linux 系統中，次目錄 `/sbin` 主要放那些類型的檔案？
    > 放系統管理常用的程式。
24. Linux 系統中，次目錄 `/tmp` 主要放那些類型的檔案？
    > 一般使用者暫時存放檔案的地方。
25. Linux 系統中，次目錄 `/usr` 主要放那些類型的檔案？
    > 此目錄包括許多子目錄，用來存放系統指令、安裝程式及套件。
26. Linux 系統中，次目錄 `/usr/man` 主要放那些類型的檔案？
    > 放程式的說明檔。
27. Linux 系統中，次目錄 `/usr/bin` 主要放那些類型的檔案？
    > 放使用者可執行的程式執行檔。
28. Linux 系統中，次目錄 `/usr/sbin` 主要放那些類型的檔案？
    > 放系統管理員可用之程式。
29. Linux 系統中，次目錄 `/usr/share` 主要放那些類型的檔案？
    > 放安裝的程式及套件。
30. Linux 系統中，次目錄 `/usr/src` 主要放那些類型的檔案？
    > 放核心原始碼。
31. Linux 系統中，次目錄 `/var` 主要放那些類型的檔案？
    > 放系統執行中，常態性變動的檔案。
32. Linux 系統中，次目錄 `/var/log` 主要放那些類型的檔案？
    > 登錄檔。
33. Linux 系統中，次目錄 `/var/spool` 主要放那些類型的檔案？
    > 放一些佇列資料。例如主機收到電子郵件後，放於 `/var/spool/mail`。

## 系統本地化
### 交互式

```shell
dpkg-reconfigure tzdata
dpkg-reconfigure locales
```

### 非交互

```shell
tzselect
echo "" >> .bashrc
echo "export LC_ALL=zh_TW.UTF-8" >> .profile
echo "export LANG=zh_TW.UTF-8" >> .profile
echo "export LANGUAGE=zh_TW.UTF-8" >> .profile
echo "export TZ='Asia/Taipei'" >> .profile
```

```shell
$ passwd --help
Usage: passwd [options] [LOGIN]

Options:
  -a, --all                     報告所有帳戶的密碼狀態
  -d, --delete                  刪除指定帳戶的密碼
  -e, --expire                  強制使指定帳戶的密碼過期
  -h, --help                    顯示此幫助訊息並退出
  -k, --keep-tokens             只有在密碼過期時才更改密碼
  -i, --inactive INACTIVE       在密碼過期後將密碼設置為 INACTIVE
  -l, --lock                    鎖定指定帳戶的密碼
  -n, --mindays MIN_DAYS        將密碼更改前的最小天數設置為 MIN_DAYS
  -q, --quiet                   靜默模式
  -r, --repository REPOSITORY   在 REPOSITORY 存儲庫中更改密碼
  -R, --root CHROOT_DIR         切換到的目錄
  -S, --status                  報告指定帳戶的密碼狀態
  -u, --unlock                  解鎖指定帳戶的密碼
  -w, --warndays WARN_DAYS      將密碼過期警告天數設置為 WARN_DAYS
  -x, --maxdays MAX_DAYS        將密碼更改前的最大天數設置為 MAX_DAYS
```

## 修改密碼(自己)

```shell
$ passwd
```

## 修改密碼(其他使用者)

```shell
$ passwd username
```

## 查看用戶狀態

```shell
$ passwd -S username
```

## 修改群組密碼

```shell
passwd -g GroupName
```

## 列出所有帳號

```shell
cat /etc/passwd
```

## sshd_config

### 使用 root 登入

```shell
$ sudo -i

$ passwd
# 自行設置一個密碼

$ vi /etc/ssh/sshd_config
# change "PermitRootLogin no"->"PermitRootLogin yes"
```

### 禁止 root 登入

```shell
$ sudo vi /etc/ssh/sshd_config
# change "PermitRootLogin yes"->"PermitRootLogin no"

$ sudo service ssh restart
# 重新啟動ssh

```

## ssh-keygen

```shell:line-numbers
$ ssh-keygen --help
unknown option -- -
usage: ssh-keygen [-q] [-b bits] [-C comment] [-f output_keyfile] [-m format] [-t dsa | ecdsa | ecdsa-sk | ed25519 | ed25519-sk | rsa] [-N new_passphrase] [-O option] [-w provider]
       ssh-keygen -p [-f keyfile] [-m format] [-N new_passphrase] [-P old_passphrase]
       ssh-keygen -i [-f input_keyfile] [-m key_format]
       ssh-keygen -e [-f input_keyfile] [-m key_format]
       ssh-keygen -y [-f input_keyfile]
       ssh-keygen -c [-C comment] [-f keyfile] [-P passphrase]
       ssh-keygen -l [-v] [-E fingerprint_hash] [-f input_keyfile]
       ssh-keygen -B [-f input_keyfile]
       ssh-keygen -D pkcs11
       ssh-keygen -F hostname [-lv] [-f known_hosts_file]
       ssh-keygen -H [-f known_hosts_file]
       ssh-keygen -K [-w provider]
       ssh-keygen -R hostname [-f known_hosts_file]
       ssh-keygen -r hostname [-g] [-f input_keyfile]
       ssh-keygen -M generate [-O option] output_file
       ssh-keygen -M screen [-f input_file] [-O option] output_file
       ssh-keygen -I certificate_identity -s ca_key [-hU] [-D pkcs11_provider] [-n principals] [-O option] [-V validity_interval] [-z serial_number] file ...
       ssh-keygen -L [-f input_keyfile]
       ssh-keygen -A [-f prefix_path]
       ssh-keygen -k -f krl_file [-u] [-s ca_public] [-z version_number] file ...
       ssh-keygen -Q -f krl_file file ...
       ssh-keygen -Y find-principals -s signature_file -f allowed_signers_file
       ssh-keygen -Y check-novalidate -n namespace -s signature_file
       ssh-keygen -Y sign -f key_file -n namespace file ...
       ssh-keygen -Y verify -f allowed_signers_file -I signer_identity -n namespace -s signature_file [-r revocation_file]

$ ssh-keygen -t rsa -f ~/.ssh/id_rsa -C username
```

## 建立使用者帳號

```shell
$ adduser username
# 程式會提示輸入密碼，剩下的欄位都可以直接按 Enter 跳過不填。

$ usermod -aG sudo username
# 加入sudo群組
```

```shell
$ adduser --help
adduser [--home DIR] [--shell SHELL] [--no-create-home] [--uid ID] [--firstuid ID] [--lastuid ID] [--gecos GECOS] [--ingroup GROUP | --gid ID] [--disabled-password] [--disabled-login] [--add_extra_groups] [--encrypt-home] USER
   新增一般使用者

adduser --system [--home DIR] [--shell SHELL] [--no-create-home] [--uid ID] [--gecos GECOS] [--group | --ingroup GROUP | --gid ID] [--disabled-password] [--disabled-login] [--add_extra_groups] USER
   新增系統使用者

adduser --group [--gid ID] GROUP
addgroup [--gid ID] GROUP
   新增一個使用者群組

addgroup --system [--gid ID] GROUP
   新增一個系統群組

adduser USER GROUP
   將現有使用者加入現有的群組

general options:
  --quiet | -q      不要將處理資訊輸出到 stdout
  --force-badname   允許不符合 NAME_REGEX[_SYSTEM] 設定變數的使用者名稱
  --extrausers      使用額外的使用者作為資料庫
  --help | -h       使用說明訊息
  --version | -v    版本號碼和版權資訊
  --conf | -c FILE  使用 FILE 作為設定檔案
```

```shell
$ usermod --help
Usage: usermod [options] LOGIN

Options:
  -b, --badnames                允許使用不良名稱
  -c, --comment COMMENT         GECOS 欄位的新值
  -d, --home HOME_DIR           用戶帳戶的新家目錄
  -e, --expiredate EXPIRE_DATE  將帳戶到期日期設置為 EXPIRE_DATE
  -f, --inactive INACTIVE       在帳戶過期後將密碼設置為 INACTIVE
  -g, --gid GROUP               將 GROUP 強制用作新的主要組
  -G, --groups GROUPS           新的輔助 GROUP 清單
  -a, --append                  在不刪除用戶從其他組中刪除的情況下，將用戶附加到 -G 選項提到的補充 GROUP 中
  -h, --help                    顯示此幫助消息並退出
  -l, --login NEW_LOGIN         登錄名稱的新值
  -L, --lock                    鎖定用戶帳戶
  -m, --move-home               將家目錄的內容移動到新位置（僅使用 -d）
  -o, --non-unique              允許使用重複（非唯一）UID
  -p, --password PASSWORD       使用加密密碼設置新密碼
  -R, --root CHROOT_DIR         chroot 到的目錄
  -P, --prefix PREFIX_DIR       位於 /etc/* 檔案所在的前綴目錄
  -s, --shell SHELL             用戶帳戶的新登錄 Shell
  -u, --uid UID                 用戶帳戶的新 UID
  -U, --unlock                  解鎖用戶帳戶
  -v, --add-subuids FIRST-LAST  添加下屬 UID 範圍
  -V, --del-subuids FIRST-LAST  刪除下屬 UID 範圍
  -w, --add-subgids FIRST-LAST  添加下屬 GID 範圍
  -W, --del-subgids FIRST-LAST  刪除下屬 GID 範圍
  -Z, --selinux-user SEUSER     用戶帳戶的新 SELinux 用戶映射
```

## Swap

```shell
# In this example, we will create a swap file of size 1GB using the dd command as follows. Note that bs=1024 means read and write up to 1024 bytes at a time and count = (1024 x 1024)MB size of the file.
dd if=/dev/zero of=/swapfile bs=1024 count=1048576
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
```

$swapon -s 檢查作用
開機自動使用 /swapfile 作為 Swap 空間, 需要修改 /etc/fstab 檔案

```shell
echo "/swapfile swap swap sw 0 0" >> /etc/fstab
```

## 背景執行

```shell
# 背景執行
nohup node server.js &
nohup node server.js &> nohup.txt &
tail –f nohup.txt
```

### 只使用 `nohup`

```shell
nohup command [arg...]
```

無法`標準輸入`，`標準輸出`和`錯誤訊息`輸出到`nohup.out`文件中，關閉終端機後命令仍然會運行。例如：執行`nohup sh test.sh`腳本命令後，終端機不能接收任何入、標準輸出和標準錯誤會輸入到當前目錄的`nohup.out`文件。即使關閉終端機退後，當前會話依然繼續運行。

### 只使用 `&`

```shell
command [arg...] [&]
```

可以`標準輸入`但無法將`標準輸出`和`錯誤訊息`輸出到`nohup.out`文件中。關閉終端機後，命令會就馬上停止。例如：執行`sh test.sh &`腳本命令後關閉終端機，對應的任務也立刻停止。

## `nohup` 和 `&` 一起使用

```shell
nohup command [arg...] &
```

可以`標準輸入`，也能將`標準輸出`和`錯誤訊息`輸出到文件中`nohup.out`中，關閉終端機後命令仍然會運行。例如：執行`nohup sh test.sh &`命令後，既能`標準輸入`，也能將`標準輸出`和`錯誤訊息`輸出到`nohup.out`文件中，即使關閉終端機，當前會話依然繼續運行。

## `nohup`、 `&` 、 `>`

```shell
nohup command >file 2>&1 &
```

上面命令可以拆分成三部分`nohup command &`、`>file`和`2>&1`，前兩部份應該是基本知識。

`2>&1`的部分是將`錯誤訊息(2)`重定向到`標準輸出(1)`。而`標準輸出(1)`是輸入到`file`文件中，所以`錯誤訊息(2)`、`標準輸出(1)`都寫入到`file`文件中。參數說明如下

`/dev/null`表示空設備文件。使用此參數不輸出任何的日誌。
`0`表示 stdin(standard input) 標準輸入
`1`表示 stdout(standard output) 標準輸出
`2`表示 stderr(standard error) 標準錯誤訊息

如果`2>&1`的部分換成

* `2>error`表示將`錯誤訊息(2)`重定向到`error`文件中
* `2>&1`表示將`錯誤訊息(2)`重定向到`標準輸出(1)`
* `2>&1 >file`表示將`錯誤訊息(2)`重定向到`標準輸出(1)`，而`標準輸出(1)`輸入到`file`中，也就是`錯誤訊息(2)`、`標準輸出(1)`都輸入到`file`中，等於`1>file 2>&1`。

例子：

```shell
nohup starMailWeb.sh >mail.log 2>&1 &
```

後台運行`starMailWeb.sh`，並且將`標準輸出(1)`、`標準錯誤(2)`等日誌寫入到 mail.log文件中。


## docker without sudo

```shell
sudo usermod -aG docker $USER
```

## List all containers (only IDs)

```shell
docker ps -aq
```

## Stop all running containers

```shell
docker stop $(docker ps -aq)
```

## Remove all containers

```shell
docker rm $(docker ps -aq)
```

## Remove all images

```shell
docker rmi $(docker images -q)
```

## 系統查看指令

```shell
uname -a                # 查看核心/操作系統/CPU訊息
head -n 1 /etc/issue    # 查看操作系統版本
cat /proc/cpuinfo       # 查看CPU訊息
hostname                # 查看電腦名
lspci -tv               # 列出所有PCI裝置
lsusb -tv               # 列出所有USB裝置
lsmod                   # 列出載入的核心模組
env                     # 查看環境變數
```

## 資源/硬碟占用情況

```shell
free -m                        # 查看記憶體使用量和交換區使用量
df -h                          # 查看各分區使用情況
du -sh folder/                 # 查看指定目錄的大小
grep MemTotal /proc/meminfo    # 查看記憶體總量
grep MemFree /proc/meminfo     # 查看空閒記憶體量
uptime                         # 查看系統執行時間、使用者數、負載
cat /proc/loadavg              # 查看系統負載
```

## 磁碟和分區情況

```shell
mount | column -t     # 查看掛接的分區狀態
fdisk -l              # 查看所有分區
swapon -s             # 查看所有交換分區
hdparm -i /dev/hda    # 查看磁碟參數(僅適用於IDE裝置)
dmesg | grep IDE      # 查看啟動時IDE裝置檢測狀況
```

## 網路查看

```shell
ifconfig         # 查看所有網路介面的屬性
iptables -L      # 查看防火牆設定
route -n         # 查看路由表
netstat -lntp    # 查看所有監聽埠
netstat -antp    # 查看所有已經建立的連接
netstat -s       # 查看網路統計訊息
```

## 進程查看

```shell
ps -ef    # 查看所有進程
top       # 即時顯示進程狀態
```

## 使用者查看

```shell
w                          # 查看活動使用者
id username                # 查看指定使用者訊息
last                       # 查看使用者登入日誌
cut -d: -f1 /etc/passwd    # 查看系統所有使用者
cut -d: -f1 /etc/group     # 查看系統所有組
crontab -l                 # 查看目前使用者的計劃任務
```

## 壓縮指令

## .tar

套件名稱：tar

```shell
tar cvf FileName.tar DirName    # 加壓
tar xvf FileName.tar            # 解壓
```

## .gz

套件名稱：gzip

```shell
gzip FileName           # 加壓
gunzip FileName.gz      # 解壓
gzip -d FileName.gz     # 解壓
```

## .tar.gz

套件名稱：gzip

```shell
tar zcvf FileName.tar.gz DirName    # 加壓
tar zxvf FileName.tar.gz            # 解壓
```

## .bz

```shell
#　加壓：unkown

bzip2 -d FileName.bz    # 解壓
bunzip2 FileName.bz     # 解壓
```

## .tar.bz

```shell
# 加壓：unkown

tar jxvf FileName.tar.bz    # 解壓
```

## .bz2

套件名稱：bzip2

```shell
bzip2 -z FileName       # 加壓
bzip2 -d FileName.bz2   # 解壓1
bunzip2 FileName.bz2    # 解壓2
```

## .tar.bz2

套件名稱：bzip2、lbzip2`(parallel)`

```shell
tar jcvf FileName.tar.bz2 DirName               # 加壓
tar -I lbzip2 -cvf FileName.tar.bz2 DirName     # 加壓
tar jxvf FileName.tar.bz2                       # 解壓
```

## .xz

套件名稱：xz-utils

```shell
xz -z FileName      # 加壓
xz -d FileName.xz   # 解壓
```

## .tar.xz

套件名稱：xz-utils

```shell
tar Jcvf FileName.tar.xz DirName    # 加壓
tar Jxvf FileName.tar.xz            # 解壓
```

## .Z

```shell
compress FileName       # 加壓
uncompress FileName.Z   # 解壓
```

## .tar.Z

```shell
tar Zcvf FileName.tar.Z DirName # 加壓
tar Zxvf FileName.tar.Z         # 解壓
```

## .tgz

套件名稱：gzip

```shell
tar zcvf FileName.tgz FileName  # 加壓
tar zxvf FileName.tgz           # 解壓
```

## .tar.tgz

套件名稱：gzip

```shell
tar zcvf FileName.tar.tgz FileName  # 加壓
tar zxvf FileName.tar.tgz           # 解壓
```

## .7z

套件名稱：p7zip-full

```shell
7z a FileName.7z FileName               # 加壓
7z a FileName.7z FileName -p PASSWORD   # 使用密碼 (PASSWORD) 壓縮
7z x FileName.7z                        # 解壓
```

## .zip

套件名稱：zip

```shell
zip -r FileName.zip DirName # 加壓
unzip FileName.zip          # 解壓
```

## .rar

套件名稱：rar、unrar

```shell
rar a FileName.rar DirName  # 加壓
rar e FileName.rar          # 解壓
unrar e FileName.rar        # 解壓
rar x FileName.rar DirName  # 解壓3：在指定目錄內解壓縮。
```

## .lha

套件名稱：lha

```shell
lha -a FileName.lha FileName    # 加壓
lha -e FileName.lha             # 解壓
```
