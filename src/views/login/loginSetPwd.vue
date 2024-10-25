<template>

  <div class="login-setting-pwd">
    <div class="logon-content">
      <img class="icon" src="@/assets/img/tabbar/tabbar_home_selected.png" alt="">
      <span class="title">共享游 | 一折玩正版</span>
    </div>
    <div class="close-content" @click="closeBtnClick()">
      <img class="close" src="@/assets/img/common/close.png" alt="">
    </div>
    <div class="input-content-bg">
      <span class="input-content-title">设置账号密码</span>
      <div class="pwd-input-bg">
        <a-input class="pwd-input" v-model:value="code" placeholder="6至12位数字字母符号均可" :bordered="false" />
      </div>
      <div class="next-content-bg">
        <span class="next-btn" @click="nextBtnClick()">下次再说</span>
      </div>

    </div>
  </div>

</template>

<script setup>
import useMainStore from '@/stores/modules/main';
import { storeToRefs } from 'pinia';
const mainStore = useMainStore()
const { isShowLogin } = storeToRefs(mainStore)

// 关闭按钮点击
const closeBtnClick = () => {
  console.log("点击了关闭");
  isShowLogin.value = false
}
</script>

<style lang="less" scoped>
.login-setting-pwd {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  width: 500px;
  height: 280px;

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

  .input-content-bg {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    margin-top: 95px;

    .input-content-title {
      font-family: "AlimamaShuHeiTi";
      font-size: 16px;
      color: #747C86;
    }

    .pwd-input-bg {
      margin-top: 30px;
      background-color: #32353C;
      width: 320px;
      height: 40px;
      border-radius: 3px;

      display: flex;
      justify-content: start;
      align-items: center;

      .pwd-input {
        background-color: transparent;
        color: #A6A6A6;
        font-family: "AlibabaPuHuiTi";
        font-size: 16px;
      }

      .pwd-input::placeholder {
        color: #747C86;
      }
    }

    .next-content-bg {
      display: flex;
      justify-content: end;
      width: 320px;
      margin-top: 10px;
      color: #747C86;
      font-family: "AlibabaPuHuiTi";
      font-size: 16px;
      cursor: pointer;
    }
  }

}
</style>