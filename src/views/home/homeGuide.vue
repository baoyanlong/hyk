<template>
  <div class="content">
    <div class="top">
      <div class="top_left">
        <span class="title_one">使用指南</span>
        <span class="title_two">超低折扣玩正版 ro 闲置游戏赚零花</span>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_content">bottom_content</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;

  margin-top: 12px;
  // padding-bottom: 10px;

  background-color: transparent;

  .top {

    .top_left {
      height: 28px;
      width: 262px;
      display: flex;
      align-items: end;
      background: linear-gradient(90deg, #212B45FF 0%, #191A1D00 100%);
      .title_one {
        margin-left: 7px;
        font-family: "AlimamaShuHeiTi";
        font-size:16px;
        color: #FFFFFFFF;
      }
      .title_two {
        margin-left: 10px;
        margin-bottom: 2px;
        font-family: "AlibabaPuHuiTi";
        font-size:10px;
        color: #F5B464FF;
      }
    }
  }
  .bottom {
    height: 300px;
    background-color: #212B45FF;
    padding: 10px 10px;
    .bottom_content {
      width: 100%;
      height: 100%;
      background-color: #1E2329FF;
    }
  }
}
</style>