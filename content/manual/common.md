---
title: 常用指令
---

# Linux 常用指令

## 系統查看指令

```sh
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

```sh
free -m                        # 查看記憶體使用量和交換區使用量
df -h                          # 查看各分區使用情況
du -sh folder/                 # 查看指定目錄的大小
grep MemTotal /proc/meminfo    # 查看記憶體總量
grep MemFree /proc/meminfo     # 查看空閒記憶體量
uptime                         # 查看系統執行時間、使用者數、負載
cat /proc/loadavg              # 查看系統負載
```

## 磁碟和分區情況

```sh
mount | column -t     # 查看掛接的分區狀態
fdisk -l              # 查看所有分區
swapon -s             # 查看所有交換分區
hdparm -i /dev/hda    # 查看磁碟參數(僅適用於IDE裝置)
dmesg | grep IDE      # 查看啟動時IDE裝置檢測狀況
```

## 網路查看

```sh
ifconfig         # 查看所有網路介面的屬性
iptables -L      # 查看防火牆設定
route -n         # 查看路由表
netstat -lntp    # 查看所有監聽埠
netstat -antp    # 查看所有已經建立的連接
netstat -s       # 查看網路統計訊息
```

## 進程查看

```sh
ps -ef    # 查看所有進程
top       # 即時顯示進程狀態
```

## 使用者查看

```sh
w                          # 查看活動使用者
id username                # 查看指定使用者訊息
last                       # 查看使用者登入日誌
cut -d: -f1 /etc/passwd    # 查看系統所有使用者
cut -d: -f1 /etc/group     # 查看系統所有組
crontab -l                 # 查看目前使用者的計劃任務
```

## 文件壓縮

### .tar

套件名稱：tar

```sh
tar cvf FileName.tar DirName    # 加壓
tar xvf FileName.tar            # 解壓
```

### .gz

套件名稱：gzip

```sh
gzip FileName           # 加壓
gunzip FileName.gz      # 解壓
gzip -d FileName.gz     # 解壓
```

### .tar.gz

套件名稱：gzip

```sh
tar zcvf FileName.tar.gz DirName    # 加壓
tar zxvf FileName.tar.gz            # 解壓
```

### .bz

```sh
#　加壓：unkown

bzip2 -d FileName.bz    # 解壓
bunzip2 FileName.bz     # 解壓
```

### .tar.bz

```sh
# 加壓：unkown

tar jxvf FileName.tar.bz    # 解壓
```

### .bz2

套件名稱：bzip2

```sh
bzip2 -z FileName       # 加壓
bzip2 -d FileName.bz2   # 解壓1
bunzip2 FileName.bz2    # 解壓2
```

### .tar.bz2

套件名稱：bzip2、lbzip2`(parallel)`

```sh
tar jcvf FileName.tar.bz2 DirName               # 加壓
tar -I lbzip2 -cvf FileName.tar.bz2 DirName     # 加壓
tar jxvf FileName.tar.bz2                       # 解壓
```

### .xz

套件名稱：xz-utils

```sh
xz -z FileName      # 加壓
xz -d FileName.xz   # 解壓
```

### .tar.xz

套件名稱：xz-utils

```sh
tar Jcvf FileName.tar.xz DirName    # 加壓
tar Jxvf FileName.tar.xz            # 解壓
```

### .Z

```sh
compress FileName       # 加壓
uncompress FileName.Z   # 解壓
```

### .tar.Z

```sh
tar Zcvf FileName.tar.Z DirName # 加壓
tar Zxvf FileName.tar.Z         # 解壓
```

### .tgz

套件名稱：gzip

```sh
tar zcvf FileName.tgz FileName  # 加壓
tar zxvf FileName.tgz           # 解壓
```

### .tar.tgz

套件名稱：gzip

```sh
tar zcvf FileName.tar.tgz FileName  # 加壓
tar zxvf FileName.tar.tgz           # 解壓
```

### .7z

套件名稱：p7zip-full

```sh
7z a FileName.7z FileName               # 加壓
7z a FileName.7z FileName -p PASSWORD   # 使用密碼 (PASSWORD) 壓縮
7z x FileName.7z                        # 解壓
```

### .zip

套件名稱：zip

```sh
zip -r FileName.zip DirName # 加壓
unzip FileName.zip          # 解壓
```

### .rar

套件名稱：rar、unrar

```sh
rar a FileName.rar DirName  # 加壓
rar e FileName.rar          # 解壓
unrar e FileName.rar        # 解壓
rar x FileName.rar DirName  # 解壓3：在指定目錄內解壓縮。
```

### .lha

套件名稱：lha

```sh
lha -a FileName.lha FileName    # 加壓
lha -e FileName.lha             # 解壓
```
