<template>
  <div class="combine-game-item-right">
    <span class="title">{{ item.name }}</span>
    <div class="combine-game-item-right-item seller">
      <span class="label">卖家描述:</span>
      <span class="content">{{ item.sellerDescription }}</span>
    </div>
    <div class="combine-game-item-right-item">
      <span class="label">标签:</span>
      <span class="content">{{ item.label }}</span>
    </div>
    <div class="combine-game-item-right-item">
      <span class="label">游戏平台:</span>
      <span class="content">{{ item.platform }}</span>
    </div>
    <div class="combine-game-item-right-item">
      <span class="label">综合评价:</span>
      <span class="content">{{ item.evaluation }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item:{}
}) 
</script>

<style lang="less" scoped>
.combine-game-item-right {

  display: flex;
  flex-direction: column;

  width: 310px;

  padding-left: 20px;
  padding-top: 17px;

  margin-left: 10px;

  background-color: #1E2329FF;

  .combine-game-item-right-item {
    display: flex;

    margin-top: 17px;

    
  }
  .seller {
    display: flex;
    flex-direction: column;

    .span {
      // white-space: normal;
    }
  }
  .title {
    font-family: "AlimamaShuHeiTi-Bold";
    font-size:12px;
    color: #FFFFFFFF;
  }
  .label {
    font-family: "Alibaba_PuHuiTi";
    font-size:8px;
    color: #FFFFFFFF;
  }
  .content {
    margin-left: 3px;
    font-family: "Alibaba_PuHuiTi";
    font-size:8px;
    color: #9E9E9EFF;
  }
}
</style>