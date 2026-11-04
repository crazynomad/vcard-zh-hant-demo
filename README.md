# vCard 繁體中文個人網站

[線上演示](https://crazynomad.github.io/vcard-zh-hant-demo/) · [發布記錄](https://github.com/crazynomad/vcard-zh-hant-demo/actions)

綠皮火車 EP18「0 成本 Vibe Coding 上線指南（網站篇）」的靜態網站示例。沿用 [codewithsadee / vCard](https://github.com/codewithsadee/vcard-personal-portfolio) 的深色卡片與金色點綴，包含「關於我、履歷、精選專案、聯絡」。

人物「林予安」、工作經歷與專案都是虛構示例。`yuan.lin@example.com` 是範例信箱；發布自己的版本前，請換成自己的介紹與公開聯絡方式。

## 免費上線的條件

本範例使用 **公開 GitHub 倉庫 + GitHub Pages + 平台提供的 `github.io` 網址**，不需購買網域，也不使用資料庫、模型 API 或付費服務。GitHub Free 可以從公開倉庫使用 Pages；公開倉庫的原始檔案也會公開。[官方適用範圍](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

這是一個個人介紹／履歷展示站。Pages 有用量與用途限制，不能當作經營交易網站或商業 SaaS 的免費主機；本教學不承諾無限流量或所有類型網站都能免費。[官方限制](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

## 跟著做：不用安裝開發工具

準備一個已驗證電子郵件的 GitHub 帳號，先登入。

### 1. 複製成自己的網站倉庫

在本倉庫右上方點 **Use this template → Create a new repository**。

- **Owner**：選自己的帳號。
- **Repository name**：例如 `my-profile`，使用英文字母、數字或連字號。
- **Visibility**：選 **Public**，本教學走公開倉庫的免費路線。
- 不用勾選 **Include all branches**。

點 **Create repository**。完成後，確認網址已變成 `github.com/你的帳號/my-profile`。複製的是原始檔案，**Pages 設定仍需在自己的新倉庫開啟**。

### 2. 替換最基本的個人資料

在自己的倉庫點 `index.html`，再點鉛筆圖示 **Edit this file**。先搜尋「林予安」，改成自己的姓名；同步修改頁面標題與簡介中的姓名。電子郵件要同時修改文字和 `mailto:` 連結。

點 **Commit changes…**，填入簡短說明，例如 `Update my profile`，將修改提交到 `main`。內容比較多時，可下載到電腦交給 AI 協助修改；[完整替換位置](CUSTOMIZE.md)。

### 3. 開啟 GitHub Pages

在**自己的倉庫**進入 **Settings → Pages**。找到 **Build and deployment**，依序設定：

| 欄位 | 選擇 |
| --- | --- |
| Source | **Deploy from a branch** |
| Branch | **main** |
| Folder | **/ (root)** |

點 **Save**。不必購買網域、填建置命令或新增工作流程檔案；本範例已包含 `.nojekyll`，可直接發布 HTML、CSS、JavaScript。

GitHub 仍會在 **Actions** 中顯示系統產生的 **pages build and deployment**，這是正常的自動發布記錄。[官方設定步驟](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

### 4. 等待發布完成，拿到真正的網址

到 **Actions** 查看最新的 **pages build and deployment**，等待綠色成功狀態。回到 **Settings → Pages**，打開頁面提供的 **Visit site** 網址。

專案網站通常是 `https://你的帳號.github.io/my-profile/`。請以 Pages 設定頁顯示的網址為準，分享這個 HTTPS 網址；GitHub 倉庫頁和電腦上的 `localhost` 都不是這個網站的公開地址。

依序檢查：四個分頁能切換、專案能篩選和開啟詳情、`/#resume` 重新整理後仍顯示履歷。再用手機或另一個瀏覽器開啟同一個連結。

聯絡頁是 `mailto:` 郵件連結，會開啟訪客的郵件程式。本範例沒有網頁寄信服務，範例信箱也不會收件。

### 5. 再改一句話，確認更新也會上線

回到 `index.html`，修改個人介紹中的一句話，再提交到 `main`。確認 Actions 出現新的成功記錄，再刷新公開網站查看變更。不需再次設定 Pages，也不會產生新的網站網址。

若暫時看到舊內容，先確認最新發布成功，再強制重新整理：macOS 用 `Command + Shift + R`，Windows 用 `Ctrl + F5`。

## 已經有寫好的網站：給 Agent 的部署任務

先把 Agent 的工作目錄切到自己的網站資料夾。若是這份模板，可直接使用下方提示；若是別的網站，讓 Agent 先確認是否能靜態發布。需要伺服器執行的功能不能直接照搬這條路線。

```text
請把目前資料夾裡的個人網站發布到我 GitHub 帳號下的新公開倉庫 my-profile，
使用 GitHub Pages 的平台網址，不購買網域或啟用付費服務。

先確認這是可直接發布的靜態網站，檢查 index.html、相對資源路徑及 .nojekyll。
只提交本網站需要的檔案，保留原作者授權，不上傳 .env、密碼、私人文件或無關檔案。
登入與授權由我完成，不要要求我把密碼或 token 貼進聊天。

使用 main 分支根目錄發布。完成後提供 HTTPS 網址，
驗證圖片、中文頁籤、專案篩選與詳情，以及重新整理後的顯示。
再提交一個小的文字修改，確認自動更新成功，記錄遇到的問題與處理方式。
如果發現需要後端，先指出哪些功能不能在 Pages 執行。
```

## 卡住時先看這裡

| 現象 | 先檢查 |
| --- | --- |
| Pages 找不到 `main` | 倉庫是否已有檔案與第一次提交；刷新設定頁 |
| 網站 404 | 最新發布是否成功、網址是否包含倉庫名稱、`index.html` 是否在根目錄 |
| CSS 或頭像不見 | 保留 `./assets/...` 相對路徑與大小寫；不要直接改成 `/assets/...` |
| 改名後頁籤不能切換 | 顯示文字可以改；`data-target`、`data-page` 和對應 `id` 必須保持配對 |
| GitHub 上已修改，網站仍是舊版 | 是否提交到發布分支、最新 Actions 是否成功，再強制刷新 |
| 聯絡點下去沒有寄出 | 這是郵件程式入口，並非寄信後端；需自行完成郵件撰寫與寄送 |

## 檔案與授權

- `index.html`：內容與結構；`assets/css/`：原樣式與繁中覆寫；`assets/js/script.js`：分頁、篩選、詳情互動。
- `.nojekyll`：直接發布靜態檔案；`assets/images/`：示意頭像與 favicon。
- [內容修改指南](CUSTOMIZE.md)；[MIT LICENSE](LICENSE)。

上游基線為 `927f09a6ef894a24cc8aef7a2e51f8e93ac306f7`；繁中演示版來源提交為 `d0d12d93694ed85c456dc596baee859f5704dce9`。原模板由 codewithsadee 製作，保留原始版權聲明與頁尾來源。替換圖片或案例時，請使用自己有權使用的素材。
