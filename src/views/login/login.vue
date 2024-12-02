<template>
  <div class="login-bg">
    <loginSetPwd v-if="isSetPwd"/>
    <div v-else class="login">
      <div class="logon-content">
        <img class="icon" src="@/assets/img/tabbar/tabbar_home_selected.png" alt="">
        <span class="title">共享游 | 一折玩正版</span>
      </div>
      <div class="close-content" @click="closeBtnClick()">
        <img class="close" src="@/assets/img/common/close.png" alt="">
      </div>
      <div class="input-content">
        <span class="input-content-title">短信登录 / 注册</span>
        <div class="mobile-input-bg">
          <span class="mobile-input-title">+86</span>
          <a-input class="mobile-input" v-model:value="mobilePhone" placeholder="请输入手机号" :bordered="false" />
        </div>
        <div class="code-input-bg">
          <img class="code-input-icon" src="@/assets/img/common/mail.png" alt="">
          <a-input class="code-input" v-model:value="code" placeholder="请输入验证码" :bordered="false" />
          <span class="send-code-btn" @click="sendVerificationCode()">{{ isCountingDown ? `重新发送${countdown}s` : '发送验证码' }}</span>
        </div>
        <div class="input-bottom-bg">
          <span class="forget-btn" @click="codeBtnClick()">忘记密码?</span>
          <span class="info-label">验证码错误</span>
          <span class="change-login-btn" @click="codeBtnClick()">密码登录</span>
        </div>
        <div class="agreement-bg">
          <img class="icon" src="@/assets/img/common/check_select.png" alt="">
          <span>我已详细阅读并同意</span>
          <span>《服务协议》</span>
          <span>和</span>
          <span>《隐私协议》</span>
        </div>
        <a-button class="login-button" type="primary"
        @click="clickLoginButton()" 
        style="background-color: #A1CD44; 
        width: 320px; 
        height: 40px;
        border-radius: 3px; 
        font-family: 'AlimamaShuHeiTi';
        font-size:20px;
        color: #000000
        ">登录</a-button>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import loginSetPwd from './loginSetPwd.vue';
import { ref } from 'vue';
import useMainStore from '@/stores/modules/main';
import { storeToRefs } from 'pinia';
const mainStore = useMainStore()
const { isShowLogin } = storeToRefs(mainStore)

// 是否展示设置密码
const isSetPwd = ref(false)
// 手机号
const mobilePhone = ref("")
// 验证码
const code = ref("")
const countdown = ref(0);
const isCountingDown = ref(false);
let timer = null;

// 关闭按钮点击
const closeBtnClick = () => {
  console.log("点击了关闭");
  isShowLogin.value = false
}

// 发送验证码按钮点击
const codeBtnClick = () => {
  console.log("点击了发送验证码")
  isSetPwd.value = true
}

// 发送验证码函数
const sendVerificationCode = () => {
  if (!mobilePhone.value) {
    alert("请先输入手机号");
    return;
  }
  // 假设调用发送验证码的 API
  console.log("验证码已发送至手机号:", mobilePhone.value);
  startCountdown();
}

// 启动倒计时
const startCountdown = () => {
  if (isCountingDown.value) {
    console.log("正在倒计时")
    return
  }
  countdown.value = 60;
  isCountingDown.value = true;
  timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer);
      isCountingDown.value = false;
    }
  }, 1000);
}

// 登录
const clickLoginButton = () => {
  console.log("点击登录")
}
</script>

<style lang="less" scoped>
.login-bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  width: 500px;
  height: 410px;

  background-color: #181A21;

  .logon-content {
    position: absolute;
    left: 17px;
    top: 17px;
    width: 235px;
    height: 42px;

    display: flex;
    justify-content: start;
    align-items: center;
    
    .icon {
      width: 42px;
      height: 42px;
    }

    .title {
      margin-left: 10px;
      font-family: "AlimamaShuHeiTi";
      font-size: 20px;
      color: #747C86;
    }
  }

  .close-content {
    position: absolute;
    right: 23px;
    top: 17px;
    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #747C86;
    border-radius: 3px;

    cursor: pointer;

    .close {
      width: 20px;
      height: 20px;
    }
  }

  .input-content {
    margin-top: 95px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    .input-content-title {
      font-family: "AlimamaShuHeiTi";
      font-size: 16px;
      color: #747C86;
    }

    .mobile-input-bg {
      margin-top: 30px;
      background-color: #32353C;
      width: 320px;
      height: 40px;
      border-radius: 3px;

      display: flex;
      justify-content: start;
      align-items: center;

      .mobile-input-title {
        width: 34px;
        margin-left: 13px;
        font-family: "AlibabaPuHuiTi";
        font-size: 16px;
        color: #747C86;
      }

      .mobile-input {
        background-color: transparent;
        color: #A6A6A6;
        font-family: "AlibabaPuHuiTi";
        font-size: 16px;
      }

      .mobile-input::placeholder {
        color: #747C86; 
      }
    }


    .code-input-bg {

      margin-top: 30px;
      background-color: #32353C;
      width: 320px;
      height: 40px;
      border-radius: 3px;

      display: flex;
      justify-content: start;
      align-items: center;

      .code-input-icon {
        margin-left: 13px;
        margin-right: 10px;
        width: 20px;
        height: 20px;
      }

      .code-input {
        background-color: transparent;
        color: #A6A6A6;
        font-family: "AlibabaPuHuiTi";
        font-size: 16px;
      }

      .code-input::placeholder {
        color: #747C86; 
      }

      .send-code-btn {
        // width: 150px; 
        margin-right: 10px;
        text-align: center;
        white-space: nowrap;

        font-family: "AlibabaPuHuiTi";
        font-size: 16px;
        color: #A6A6A6;
        cursor: pointer;
      }
    }

    .input-bottom-bg {
      margin-top: 10px;
      width: 320px;
      height: 22px;
      display: flex;
      justify-content:space-between;
      align-items: center;

      .forget-btn {
        font-family: "AlibabaPuHuiTi";
        font-size: 16px;
        color: #747C86;
        cursor: pointer;
      }

      .info-label {
        font-family: "AlibabaPuHuiTi";
        font-size: 16px;
        color: #FF5733;
      }
      .change-login-btn {
        // width: 150px;
        // margin-right: 5px;
        text-align: center;
        font-family: "AlibabaPuHuiTi";
        font-size: 16px;
        color: #747C86;
        cursor: pointer;
      }
    }

    .agreement-bg {
      margin-top: 35px;
      // width: 320px;
      height: 22px;
      display: flex;
      justify-content:start;
      align-items: center;

      .icon {
        margin-right: 3px;
      }
      span {
        font-family: "AlibabaPuHuiTi";
        font-size: 16px;
        color: #747C86;
      }
      
    }
  }

  .login-button {
    margin-top: 10px;
    border-radius: 0px;
    padding-top: 4px;
  }
}
</style>