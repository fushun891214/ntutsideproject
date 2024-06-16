<script setup>
  // 當組件掛載到DOM時觸發的鉤子函數
  onMounted(() => {
    // 獲取表單元素
    const form = document.getElementById("form");
    // 獲取結果顯示元素
    const result = document.getElementById("result");

    // 為表單添加提交事件監聽器
    form.addEventListener("submit", function (e) {
      // 阻止表單的默認提交行為
      e.preventDefault();
      // 為表單添加驗證類
      form.classList.add("was-validated");
      // 如果表單驗證不通過，聚焦到第一個無效字段並返回
      if (!form.checkValidity()) {
        form.querySelectorAll(":invalid")[0].focus();
        return;
      }
      // 獲取表單數據並轉換為JSON格式
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      // 顯示“正在發送...”消息
      result.innerHTML = "Sending...";

      // 發送表單數據到API
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          // 處理API響應
          let json = await response.json();
          if (response.status == 200) {
            result.classList.add("text-green-500");
            result.innerHTML = json.message;
          } else {
            console.log(response);
            result.classList.add("text-red-500");
            result.innerHTML = json.message;
          }
        })
        .catch((error) => {
          // 處理錯誤
          console.log(error);
          result.innerHTML = "Something went wrong!";
        })
        .then(function () {
          // 重置表單
          form.reset();
          form.classList.remove("was-validated");
          setTimeout(() => {
            result.style.display = "none";
          }, 5000);
        });
    });
  });
</script>

<template>
  <!-- 要使此聯繫表單正常工作，請從 https://web3forms.com/ 獲取您的免費訪問密鑰 -->
  <!-- 然後，您將在您的電子郵件收件箱中獲取所有表單提交 -->
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    id="form"
    class="needs-validation"
    novalidate
  >
    <!-- 隱藏的訪問密鑰字段 -->
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
    <!-- 隱藏的防機器人檢查字段 -->
    <input
      type="checkbox"
      class="hidden"
      style="display: none"
      name="botcheck"
    />
    <div class="mb-5">
      <!-- 全名輸入字段 -->
      <input
        type="text"
        placeholder="Full Name"
        required
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        name="name"
      />
      <!-- 無效反饋消息 -->
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please provide your full name.
      </div>
    </div>
    <div class="mb-5">
      <!-- 電子郵件輸入字段 -->
      <label for="email_address" class="sr-only">Email Address</label>
      <input
        id="email_address"
        type="email"
        placeholder="Email Address"
        name="email"
        required
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      />
      <!-- 無效反饋消息 -->
      <div class="empty-feedback text-red-400 text-sm mt-1">
        Please provide your email address.
      </div>
      <div class="invalid-feedback text-red-400 text-sm mt-1">
        Please provide a valid email address.
      </div>
    </div>
    <div class="mb-3">
      <!-- 訊息輸入字段 -->
      <textarea
        name="message"
        required
        placeholder="Your Message"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      ></textarea>
      <!-- 無效反饋消息 -->
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please enter your message.
      </div>
    </div>
    <!-- 提交按鈕 -->
    <LandingButton type="submit" size="lg" block>Send Message</LandingButton>
    <!-- 結果顯示區域 -->
    <div id="result" class="mt-3 text-center"></div>
  </form>
</template>

<style>
  /* 無效反饋樣式 */
  .invalid-feedback,
  .empty-feedback {
    display: none;
  }

  /* 當表單驗證失敗時顯示空的反饋消息 */
  .was-validated :placeholder-shown:invalid ~ .empty-feedback {
    display: block;
  }

  /* 當表單驗證失敗時顯示無效的反饋消息 */
  .was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
    display: block;
  }

  /* 無效狀態的輸入框樣式 */
  .is-invalid,
  .was-validated :invalid {
    border-color: #dc3545;
  }
</style>
