<template>
  <div class="acount-info">
    <div class="acount-info-header">
      <span class="acount-info-header-title1">账户信息</span>
      <span class="acount-info-header-title2">完善信息 交易秒到账</span>
    </div>
    <div class="acount-info-content">
      <div class="acount-info-content-item">
        <span class="acount-info-content-title">用户ID</span>
        <span class="acount-info-content-label">id2549876564</span>
      </div>
      <div class="acount-info-content-item">
        <span class="acount-info-content-title">绑定手机</span>
        <span class="acount-info-content-label">182****3373/立即绑定</span>
        <span class="my-wallet-info-content-label2">更换手机</span>
      </div>
      <div class="acount-info-content-item">
        <span class="acount-info-content-title">实名信息</span>
        <span class="acount-info-content-label">徐*超/立即认证</span>
      </div>
      <div class="acount-info-content-item">
        <span class="acount-info-content-title">Steam ID</span>
        <span class="acount-info-content-label">76561198991435253/立即绑定</span>
        <span class="my-wallet-info-content-label2">重新绑定</span>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.acount-info-header {
  display: flex;
  justify-content: start;
  align-items: end;
  height: 28px;
  width: 221px;
  background: linear-gradient(90deg, #212B45 0%, #191A1D 100%);

  padding-bottom: 4px;

  .acount-info-header-title1 {
    margin-left: 7px;
    font-family: "AlimamaShuHeiTi";
    font-size:16px;
    color: #A6A6A6;
    // background-color: rgb(230, 38, 61);
  }

  .acount-info-header-title2 {
    margin-left: 8px;
    margin-bottom: 2px;
    font-family: "AlibabaPuHuiTi";
    font-size:10px;
    color: #F5B464;
    // background-color: rgb(130, 38, 61);
  }
}

.acount-info-content {
  background-color: #1E2329;
  width: 435px;
  padding: 20px 0px 20px 20px;
  height: 128px;

  .acount-info-content-item {

    height: 26px;

    display: flex;
    justify-content: start;
    align-items: center;

    .acount-info-content-title {
      width: 64px;
      font-family: "AlibabaPuHuiTi";
      font-size:10px;
      color: #747C86;
    }
    .acount-info-content-label {
      width: 254px;
      font-family: "AlibabaPuHuiTi";
      font-size:10px;
      color: #747C86;
    }
    .my-wallet-info-content-label2 {
      font-family: "AlibabaPuHuiTi";
      font-size:10px;
      color: #747C86;
    }
  }
}
</style>