+++
date = '2024-10-30T17:50:19+08:00'
draft = false
title = 'openssh-server'
+++


## 使用 root 登入

```sh
sudo -i

# 自行設置一個密碼
passwd

# change "PermitRootLogin no"->"PermitRootLogin yes"
vi /etc/ssh/sshd_config
```

## 禁止 root 登入

```sh
# change "PermitRootLogin yes"->"PermitRootLogin no"
sudo vi /etc/ssh/sshd_config

# 重新啟動ssh
sudo service ssh restart

```
