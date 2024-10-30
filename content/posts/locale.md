+++
date = '2024-10-30T17:50:19+08:00'
draft = false
title = '系統本地化'
+++


## 交互式

```sh
dpkg-reconfigure locales
dpkg-reconfigure tzdata
```

## 非交互

```sh
tzselect
echo "" >> .bashrc
echo "export LC_ALL=zh_TW.UTF-8" >> .profile
echo "export LANG=zh_TW.UTF-8" >> .profile
echo "export LANGUAGE=zh_TW.UTF-8" >> .profile
echo "export TZ='Asia/Taipei'" >> .profile
```
