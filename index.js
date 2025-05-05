console.log('Happy developing ✨'); // 開發階段的小提示訊息

document.addEventListener("DOMContentLoaded", function () {
    // 取得兩個下拉選單的 DOM 元素
    const interviewDropdown = document.getElementById("dropdown-interview");
    const storeDropdown = document.getElementById("dropdown-store");

    // 關閉所有的 dropdown（刪除 "show" class）
    function closeAllDropdowns() {
        document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("show"));
    }

    // 點擊 "Interview" 下拉選單的按鈕時切換顯示/隱藏
    interviewDropdown.querySelector(".dropdown-toggle").addEventListener("click", function (e) {
        e.preventDefault();      // 阻止預設行為（例如跳轉）
        e.stopPropagation();     // 阻止事件向上冒泡
        const isShown = interviewDropdown.classList.contains("show");
        closeAllDropdowns();     // 先關閉所有 dropdown
        if (!isShown) interviewDropdown.classList.add("show"); // 如果原本沒打開，就打開
    });

    // 點擊 "Store" 下拉選單的按鈕時切換顯示/隱藏
    storeDropdown.querySelector(".dropdown-toggle").addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        const isShown = storeDropdown.classList.contains("show");
        closeAllDropdowns();
        if (!isShown) storeDropdown.classList.add("show");
    });

    // 點擊頁面其他地方時關閉所有 dropdown
    document.addEventListener("click", function () {
        closeAllDropdowns();
    });

    // 處理密碼欄的顯示/隱藏功能（眼睛圖示切換）
    const toggle = document.getElementById("togglePassword"); // 眼睛圖示
    const password = document.getElementById("password");     // 密碼輸入欄

    if (toggle && password) {
        toggle.addEventListener("click", function () {
            // 切換 input 類型為 password 或 text
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);

            // 切換圖示樣式（fa-eye 與 fa-eye-slash）
            this.classList.toggle("fa-eye");
            this.classList.toggle("fa-eye-slash");
        });
    }

    // 控制「Sign In」按鈕的啟用狀態
    const verifyCheckbox = document.getElementById("verify");   // 驗證 checkbox
    const signBtn = document.querySelector(".sign-btn");        // 登入按鈕

    // 更新按鈕狀態：勾選 checkbox 才能啟用按鈕
    function updateButtonState() {
        if (verifyCheckbox.checked) {
            signBtn.classList.remove("disabled");
            signBtn.disabled = false;
        } else {
            signBtn.classList.add("disabled");
            signBtn.disabled = true;
        }
    }

    // checkbox 改變時觸發更新
    verifyCheckbox.addEventListener("change", updateButtonState);

    // 頁面載入時先執行一次狀態檢查
    updateButtonState();
});
