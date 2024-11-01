---
title: "比較 Linux 不同的背景執行方法"
date: "2024-10-30T17:50:19+08:00"
draft: false
slug: "nohup-compared"
tags: ["Linux", "Trick"]
---

```sh
# 背景執行
nohup node server.js &
nohup node server.js &> nohup.txt &
tail –f nohup.txt
```

## 只使用 `nohup`

```sh
nohup command [arg...]
```

無法`標準輸入`，`標準輸出`和`錯誤訊息`輸出到`nohup.out`文件中，關閉終端機後命令仍然會運行。例如：執行`nohup sh test.sh`腳本命令後，終端機不能接收任何入、標準輸出和標準錯誤會輸入到當前目錄的`nohup.out`文件。即使關閉終端機退後，當前會話依然繼續運行。

## 只使用 `&`

```sh
command [arg...] [&]
```

可以`標準輸入`但無法將`標準輸出`和`錯誤訊息`輸出到`nohup.out`文件中。關閉終端機後，命令會就馬上停止。例如：執行`sh test.sh &`腳本命令後關閉終端機，對應的任務也立刻停止。

## `nohup` 和 `&` 一起使用

```sh
nohup command [arg...] &
```

可以`標準輸入`，也能將`標準輸出`和`錯誤訊息`輸出到文件中`nohup.out`中，關閉終端機後命令仍然會運行。例如：執行`nohup sh test.sh &`命令後，既能`標準輸入`，也能將`標準輸出`和`錯誤訊息`輸出到`nohup.out`文件中，即使關閉終端機，當前會話依然繼續運行。

## `nohup`、 `&` 、 `>`

```sh
nohup command >file 2>&1 &
```

上面命令可以拆分成三部分`nohup command &`、`>file`和`2>&1`，前兩部份應該是基本知識。

`2>&1`的部分是將`錯誤訊息(2)`重定向到`標準輸出(1)`。而`標準輸出(1)`是輸入到`file`文件中，所以`錯誤訊息(2)`、`標準輸出(1)`都寫入到`file`文件中。參數說明如下

`/dev/null`表示空設備文件。使用此參數不輸出任何的日誌。
`0`表示 stdin(standard input) 標準輸入
`1`表示 stdout(standard output) 標準輸出
`2`表示 stderr(standard error) 標準錯誤訊息

如果`2>&1`的部分換成

- `2>error`表示將`錯誤訊息(2)`重定向到`error`文件中
- `2>&1`表示將`錯誤訊息(2)`重定向到`標準輸出(1)`
- `2>&1 >file`表示將`錯誤訊息(2)`重定向到`標準輸出(1)`，而`標準輸出(1)`輸入到`file`中，也就是`錯誤訊息(2)`、`標準輸出(1)`都輸入到`file`中，等於`1>file 2>&1`。

例子：

```sh
nohup starMailWeb.sh >mail.log 2>&1 &
```

後台運行`starMailWeb.sh`，並且將`標準輸出(1)`、`標準錯誤(2)`等日誌寫入到 mail.log 文件中。
