+++
date = '2024-10-30T17:50:19+08:00'
draft = false
title = 'Laravel'
+++

# Laravel

## 建立新專案

::: code-group

```shell [create-project]
composer create-project laravel/laravel example-app
```

```shell [laravel/installer]
composer global require laravel/installer
laravel new example-app
```

:::

### 設定

#### 目錄權限

安裝 Laravel 後，你必須對一些權限進行設定。目錄 `storage` 及 `bootstrap/cache` 內的子目錄必須是讓網頁伺服器可寫的，否則 Laravel 就無法正常執行。


## 安裝舊專案

1. 您需要先設定 `env` 設定檔，基本上你在整個專案找不到 `.env` 這個檔案，你只會看到 `.env.example` 這個檔案，沒錯，看到 `.example` 就知道這檔案是個範例，你可以複製一個改名為 `.env` 即可，然後開始要修改裡面的參數，哪些必填哪些選填，範例檔案內會有詳細解釋。

2. 您可能需要安裝 `composer` 才能啟用整個網站。
    ```sh
    composer install
    ```

3. 您可能需要安裝 `npm` 才能啟用前端的東西。
    ```sh
    npm install
    ```

4. 你需要產生 `Laravel` 在加密時會需要使用到的密鑰，這點在 `.env.example` 當中有提到。
    ```sh
    php artisan key:generate
    ```

5. 因為會需要使用到資料庫，所以你就去裝一裝你順眼的資料庫，然後去 `env` 設定一下參數吧，如果還沒設定的記得去設定，然後再做資料庫遷移。
    ```sh
    php artisan migrate --seed
    ```

7. 最後你需要把 `storage` 與 `public` 製作個連結，這樣部分檔案才能正常讀取，例如使用者的大頭貼。
    ```
    php artisan storage:link
    ```

## 部屬
```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan storage:link
php artisan migrate
php artisan db:seed
```


## 目錄結構

### 根目錄

* `app` 目錄
  * 正如你預期的那樣，放置應用程式的核心程式碼。我們會深入探討這個目錄。然而，幾乎所有應用程式中的類別都會放在這個目錄。
* `bootstrap` 目錄
  * 放置啟動框架的 `app.php` 檔案。這個目錄也放置一個 `cache` 目錄，其中包含框架為效能最佳化所產生的檔案，像是路由和服務快取的檔案。
* `config` 目錄
  * 顧名思義的就是放置所有應用程式的設定檔。閱讀所有文件並熟悉所有可用的選項會是個好主意。
* `database` 目錄
  * 放置用來資料庫遷移和資料填充的檔案。如果你希望，你也可以使用目錄來存放 SQLite 資料庫。
* `public` 目錄
  * 放置 `index.php` 檔案，這是進入應用程式並自動載入設定的所有請求的入口。這個目錄也放置你的前端資源，像是圖片、JavaScript 和 CSS。
* `resources` 目錄
  * 放置你的視圖以及原生、尚未編譯過的資源，像是 LESS、SASS 或 JavaScript。這個目錄也放置你所有的語系檔案。
* `routes` 目錄
  * 放置所有為應用程式定義的路由。預設的 Laravel 已包含幾個路由：
    * `web.php` 檔案包含 RouteServiceProvider 在 web 中介層群組中放置的路由，它會提供 Session 狀態、CSRF 保護和 Cookie 加密。如果你的應用程式沒有提供無狀態的 RESTful API，那麼你的所有路由可能會在 `web.php` 中定義。
    * `api.php` 檔案包含 RouteServiceProvider 在 api 中介層群組中放置的路由。它會提供速率限制。這些路由是無狀態的，所以經由這些路由進入應用程式需要 token 進行認證，並且不能存取 Session 狀態。
    * `console.php` 檔案是你可以定義所有基於閉包的終端指令的地方。每個閉包綁定一個指令實例，並可以使用簡單的方法來對每個指令的 IO 方法交換資料。就算這個檔案沒有定義 HTTP 路由，它也會根據指令端口（路由）來定義到你的應用程式。
    * `channels.php` 檔案是你可以註冊應用程式支援的所有事件廣播頻道的地方。
* `storage` 目錄
  * 放置你編譯 Blade 模板、檔案形式的 Session 、檔案快取和其他由框架產生的檔案。這個目錄被區分成：
    * `app` 目錄可以被用於儲存任何由應用程式產生的檔案。
      * `storage/app/public` 目錄可被用於儲存使用者產生的檔案，像是個人資料上的頭像，這會被公開存取的。你應該建立 `public/storage` 連結（symbolic link），然後指到 `storage/app/public` 這個資料夾，你可以使用 `php artisan storage:link` 來建立連結。
    * `framework` 目錄是被用於儲存框架產生的檔案和快取。
    * `logs` 目錄放置你的應用程式的記錄檔。
* `tests` 目錄
  * 放置你的自動化測試。並且已提供一個可以馬上使用的 PHPUnit 測試範例。每個測試類別的字尾都應該加上 Test。你可以使用 `phpunit` 或 `php vendor/bin/phpunit` 來執行測試。
* `vendor` 目錄
  * 目錄放置你的 Composer 依賴項目。

#### App目錄

大部分的應用程式都會放在 `app` 目錄中。
預設這個目錄使用命名空間 App 並藉由 Composer 使用 **PSR-4** 自動載入標準自動載入。

`app` 目錄放置多種額外的目錄，像是 `Console`、`Http` 和 `Providers`。

可以將 `Console` 和 `Http` 目錄看作提供 API 進入應用程式的核心。HTTP 協定和 CLI 都是跟應用程式進行互動的機制，但實際上並不包含應用程式邏輯。換句話說，它們是兩種簡單地釋出指令給應用程式的方法。

`Console` 目錄包含你全部的 Artisan 指令，而 `Http` 目錄包含你的控制器、中介層和請求。

當你使用 Artisan 指令 `make` 產生類別的時候，其他的目錄才會被建立到 `app` 目錄下。例如執行 `make:job` 指令產生任務類別時，`app/Jobs` 目錄才會出現在目錄中。

* `Console` 目錄
  * 包含應用程式所有自定義的 Artisan 指令，這些指令類別可以使用 `make:command` 指令產生。該目錄中有你的控制台核心（註冊自定義的 Artisan 指令）和已定義的排程任務。
* `Events` 目錄
  * 該目錄預設不存在，會在你使用 `event:generate` 或 `make:event` 指令以後才會被建立。如你所料，此 `Events` 目錄是用來放置事件類別的。事件可以被用於當指定動作發生時，通知你應用程式的其它部分，提供了很棒的靈活性及解耦。
* `Exceptions` 目錄
  * 包含應用程式的異常處理程序，同時也是放置你應用程式拋出任何異常的地方。如果你想自定義異常的記錄和渲染，你應該修改此目錄下的 Handler 類別。
* `Http` 目錄
  * 包含了控制器、中介層以及表單請求等，幾乎所有進入應用程式的請求處理都放在這裡。
* `Jobs` 目錄
  * 該目錄預設不存在，可以通過執行 `make:job` 指令建立，`Jobs` 目錄用於存放佇列任務，應用程式中的任務可以被佇列化，也可以在當前請求生命週期內同步執行。同步執行的任務有時也被看作指令，因為它們實現了命令模式。
* `Listeners` 目錄
  * 該目錄預設不存在，可以通過執行 `event:generate` 和 `make:listener` 指令建立。`Listeners` 目錄包含處理事件的類別，事件監聽器接收一個事件並提供對該事件發生後的響應邏輯，例如，`UserRegistered` 事件可以被 `SendWelcomeEmail` 監聽器處理。
* `Mail` 目錄
  * 這個目錄預設不存在，但是可以通過執行 `make:mail` 指令產生，Mail 目錄包含郵件傳送類別，郵件物件允許你在一個地方封裝構建郵件所需的所有業務邏輯，然後使用 `Mail::send` 方法傳送郵件。
* `Notifications` 目錄
  * 這個目錄預設不存在，你可以通過執行 `make:notification` 指令建立， Notifications 目錄包含應用程式傳送的所有通知，比如事件發生通知。Laravel 的通知功能將傳送和驅動方式解耦，你可以透過郵件，也可以透過 Slack、簡訊或者資料庫傳送通知。
* `Policies` 目錄
  * 這個目錄預設不存在，你可以通過執行 `make:policy` 指令來建立， Policies 目錄包含了所有的授權策略類別，策略用於判斷某個使用者是否有許可權去訪問指定資源。更多詳情，請檢視授權文件。
* `Providers` 目錄
  * 包含應用程式的服務提供者。服務提供者在啟動應用程式過程中繫結服務到容器、註冊事件，以及執行其他任務，為即將到來的請求處理做準備。
  在新安裝的 Laravel 應用程式中，該目錄已經包含了一些服務提供者，你可以按需新增自己的服務提供者到該目錄。
* `Rules` 目錄
  * 預設這個目錄並不存在，但會在你執行 Artisan 的 make:rule 指令時為你建立。Rules 目錄放置應用程式自訂驗證規則的物件。Rule 被用於將複雜的驗證邏輯封裝到一個簡單的物件中。想知道更多資訊，請查閱驗證文件。
