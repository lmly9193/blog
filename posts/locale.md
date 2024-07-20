---
title: 系統本地化
date: 2024-07-21
tags: []
published: true
---

# 系統本地化

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
