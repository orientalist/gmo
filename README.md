# Node.js URL Redirector

## 簡介
這是一個基於 Node.js 的 URL 重定向服務，它能根據傳入的參數解密調查數據並生成相應的重定向 URL。此服務在處理特定的查詢參數後，會重定向用戶至不同的 URL，依據調查結果中的標籤資訊。

## 功能
- 接收 `svid` 和 `hash` 參數進行處理
- 解密傳入的哈希數據以獲取調查內容
- 根據調查結果的標籤信息決定 URL 重定向的參數
- 303 重定向至指定的 URL

## 安裝與使用方式
1. 確保你的環境中已經安裝了 Node.js。
2. 將此專案 clone 下來：
    ```bash
    git clone https://github.com/你的帳號/Node.js-URL-Redirector.git
    ```
3. 在專案目錄中安裝依賴：
    ```bash
    npm install
    ```
4. 配置必要的環境變數，更新 `SURVEYCAKE_DOMAIN`、`hash_key` 和 `iv_key` 到代碼中。
5. 部署至雲端服務或本地環境。

## 必要的依賴模組清單
- `axios`: 用於發送 HTTP 請求。
- `crypto`: Node.js 內建模組，用於數據加密和解密。

## 授權條款
本專案使用 MIT 授權條款。請參閱 [LICENSE](LICENSE) 文件以獲取更多詳細信息。
```

此 README.md 文件已概述專案的關鍵信息，非常適合上傳至 GitHub，也方便其他開發者理解及使用此代碼。