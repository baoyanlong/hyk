<template>
  <div class="my-wallet-info">
    <div class="my-wallet-info-header">
      <span class="my-wallet-info-header-title1">我的钱包</span>
      <span class="my-wallet-info-header-title2">闲置游戏不如换点零花钱</span>
    </div>
    <div class="my-wallet-info-content">
      <div class="my-wallet-info-content-item">
        <span class="my-wallet-info-content-title">可用余额</span>
        <span class="my-wallet-info-content-label">9999.99 元</span>
        <span class="my-wallet-info-content-label2">前往提现</span>
      </div>
      <div class="my-wallet-info-content-item">
        <span class="my-wallet-info-content-title">暂冻余额</span>
        <span class="my-wallet-info-content-label">9999.99 元</span>
        <span class="my-wallet-info-content-label2">交易获得的余额冻结24小时后自动转可用余额</span>
      </div>
      <div class="my-wallet-info-content-item">
        <span class="my-wallet-info-content-title">提现支付宝</span>
        <span class="my-wallet-info-content-label">182****3373/立即绑定</span>
        <span class="my-wallet-info-content-label2">重新绑定</span>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.my-wallet-info {
  margin-left: 9px;
}

.my-wallet-info-header {
  display: flex;
  justify-content: start;
  align-items: end;
  height: 28px;
  width: 221px;
  background: linear-gradient(90deg, #212B45 0%, #191A1D 100%);

  padding-bottom: 4px;

  .my-wallet-info-header-title1 {
    margin-left: 7px;
    font-family: "AlimamaShuHeiTi";
    font-size:16px;
    color: #A6A6A6;
    // background-color: rgb(230, 38, 61);
  }

  .my-wallet-info-header-title2 {
    margin-left: 8px;
    margin-bottom: 2px;
    font-family: "AlibabaPuHuiTi";
    font-size:10px;
    color: #F5B464;
    // background-color: rgb(130, 38, 61);
  }
}

.my-wallet-info-content {
  background-color: #1E2329;
  width: 435px;
  padding: 20px 0px 20px 20px;
  height: 128px;

  .my-wallet-info-content-item {

    height: 26px;

    display: flex;
    justify-content: start;
    align-items: center;

    .my-wallet-info-content-title {
      width: 64px;
      font-family: "AlibabaPuHuiTi";
      font-size:10px;
      color: #747C86;
    }
    .my-wallet-info-content-label {
      width: 128px;
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