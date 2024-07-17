---
title: Docker 常用命令
---

# Docker 常用命令

## 列出所有容器

```sh
docker ps -aq
```

## 停止所有容器

```sh
docker stop $(docker ps -aq)
```

## 移除所有容器

```sh
docker rm $(docker ps -aq)
```

## 移除所有映像

```sh
docker rmi $(docker images -q)
```
