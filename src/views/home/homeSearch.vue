<template>
  <div class="home-search">
    <div class="home-search-notice">
      <img src="@/assets/img/common/info_icon.png" alt="">
      <span>特别声明：本站所有游戏均基于官方共享功能，100%正版无阉割，请放心购买！（比条为滾动文本，仅在后台设定展示公告文本时展示）</span>
    </div>
    <div class="home-search-content">
      <div class="home-search-content-i">
        <div class="home-search-content-icon">
          <img src="@/assets/img/home/home_official_icon.png" alt="">
          <span>官方正版</span>
        </div>
        <div class="home-search-content-icon">
          <img src="@/assets/img/home/home_online_icon.png" alt="">
          <span>联机支持</span>
        </div>
        <div class="home-search-content-icon">
          <img src="@/assets/img/home/home_archive_icon.png" alt="">
          <span>存档支持</span>
        </div>
      </div>
      <div class="home-search-content-search">
        <a-input
        class="search_bg" 
        v-model:value="searchText" 
        placeholder="黑神话：悟空，赛博朋克2077，幻兽帕鲁"
        @change="textChange()"
        @pressEnter="pressEnter()"
        >
          <template #suffix>
            <img src="@/assets/img/home/home_search_icon.png" alt="" srcset="" @click="searchClick()">
          </template>
        </a-input>
        <!-- <homeSearchDialog v-show="isShowList"/> -->
        <homeSearchDialogTypetwo v-show="isShowList"/>
      </div>
    </div>

  </div>
</template>

<script setup>
import homeSearchDialog from './components/homeSearchDialog.vue';
import homeSearchDialogTypetwo from './components/homeSearchDialogTypetwo.vue';
import { ref } from 'vue';

// 搜索内容
const searchText = ref('');
// 是否展示搜索列表
const isShowList = ref(false)

const textChange = () => {
  console.log('输入框文案：', searchText.value);
  isShowList.value = searchText.value ? true : false
}

const pressEnter = () => {
  console.log('pressEnter文案：', searchText.value);
  isShowList.value = false
}

const searchClick = () => {
  console.log("searchClick")
}


</script>

<style lang="less" scoped>

.home-search {
  display: flex;
  flex-direction: column;
}

.home-search-notice {
  display: flex;
  align-items: center;

  margin-top: 2px;

  height: 20px;
  background-color: rgba(30, 35, 41, 1);

  img {
    margin-left: 6px;
    width: 14px;
    height: 14px;
  }

  span {
    // line-height: 60px;
    margin-left: 6px;
    font-family: "AlibabaPuHuiTi";
    font-size:12px;
    color: rgba(158, 158, 158, 1);
  }
}

.home-search-content {
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2px;
  background-color: rgba(33, 43, 69, 1);


  .home-search-content-i {
    margin-left: 120px;
    margin-right: 120px;
    width: 100%;

    display: flex;

    align-items: center;
    justify-content: space-around;
    flex-grow: 1;

    .home-search-content-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 22px;
        height: 22px;
      }

      span {
        margin-left: 6px;
        font-family: "AlimamaShuHeiTi";
        font-size:16px;
        color: rgba(166, 168, 179, 1);
      }
    }
  }

  .home-search-content-search {
    position: relative;
    display: flex;
    align-items: center;

    margin-right: 10px;
    height: 26px;
    color: rgb(86, 86, 88);
    background-color: rgb(26, 27, 26);

    
    .search_bg {

      
      background-color: rgba(33, 43, 69, 0.2);
      border: 1px solid rgb(181, 129, 71);
      border-radius: 3px;
      width: 284px;

      ::v-deep .ant-input {
        background-color: rgba(14, 20, 27, 0.2);
        color: rgba(243, 243, 243, 1);
        font-family: "AlibabaPuHuiTi";
        font-size:12px;
      }

      ::v-deep .ant-input-suffix {
      // background-color: rgb(26, 27, 26);
        width: 20px;
        height: 20px;

        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>