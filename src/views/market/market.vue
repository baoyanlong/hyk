<template>
  <div class="market">
    <img class="top-img" src="@/assets/img/test/game_banner.jpg" alt="">
    <homeSearch/>
    <marketTopOptionBar v-model:currentSelectIndex="currentOptionBarIndex"/>
    <marketSingleGameList v-if="currentOptionBarIndex === 0"/>
    <marketCombineGameList v-else/>
    <div class="pagination-bg">
      <a-pagination class="pagination" 
      v-model:current="currentPageNum" 
      :pageSize="20" 
      :total="200"
      :showSizeChanger="false"
      @change="pageChange()" show-less-items />
    </div>
  </div>
</template>

<script setup>
// 导入页面组件
import homeSearch from '../home/homeSearch.vue';
import marketTopOptionBar from './components/marketTopOptionBar.vue';
import marketSingleGameList from './components/marketSingleGameList.vue';
import marketCombineGameList from './components/marketCombineGameList.vue';
import { ref } from 'vue';

// 选项栏选中的索引
const currentOptionBarIndex = ref(0);
const currentPageNum = ref(1);

const pageChange = () => {
  console.log(currentPageNum.value)
}
</script>

<style lang="less" scoped>
.market {
  padding-top: 80px;
  width: var(--page-width);
  margin: 0 auto;

  color: #fff;
  background-color: rgb(8, 2, 17);

  .top-img {
    width: 100%;
  }

  .pagination-bg {
    display: flex;
    justify-content: center;

    margin-top: 20px;
    margin-bottom: 80px;
    .pagination {
      
      // background-color: #212B45;
      ::v-deep .ant-pagination-item {
        border: 0px;
        background-color: transparent; /* 未选中项背景色 */
        font-family: "AlibabaPuHuiTi";
        font-size:20px;
        font-weight: 700;
        a {
          color: #747C86;
        }
      }

      ::v-deep .ant-pagination-item-active {
        background-color: transparent; /* 选中项背景色 */
        font-family: "AlibabaPuHuiTi";
        font-size:20px;
        font-weight: 700;

        a {
          color: #ffffff;
        }
      }

      ::v-deep .ant-pagination-item-link span {
        color: #747C86; /* 链接颜色 */
        font-family: "AlibabaPuHuiTi";
        font-size:20px;
        font-weight: 700;
      }
    }
  }
}
</style>