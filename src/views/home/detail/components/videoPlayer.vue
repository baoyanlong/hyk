<template>
  <div class="video-player-container">
    <!-- 视频标签 -->
    <video ref="video" @timeupdate="updateProgress" @loadedmetadata="initializeVideo" class="video-element">
      <source src="@/assets/img/test/test.mp4" type="video/mp4">
      您的浏览器不支持视频播放。
    </video>

    <!-- 控制栏 -->
    <div class="controls">
      <!-- 播放/暂停按钮 -->
      <button @click="togglePlay">
        <span v-if="isPlaying">暂停</span>
        <span v-else>播放</span>
      </button>

      <!-- 时间进度显示 -->
      <span>{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>

      <!-- 进度条 -->
      <div class="progress-bar-container" @click="seek">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>

      <!-- 音量控制按钮 -->
      <button @click="toggleMute">
        <span v-if="isMuted">🔇</span>
        <span v-else>🔊</span>
      </button>

      <!-- 全屏按钮 -->
      <button @click="toggleFullScreen">
        <span>全屏</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 定义状态和方法
const video = ref(null);
const isPlaying = ref(false);
const isMuted = ref(false);
const duration = ref(0);
const currentTime = ref(0);
const progress = ref(0);

// 初始化视频
const initializeVideo = () => {
  duration.value = video.value.duration;
};

// 播放或暂停视频
const togglePlay = () => {
  if (video.value.paused) {
    video.value.play();
    isPlaying.value = true;
  } else {
    video.value.pause();
    isPlaying.value = false;
  }
};

// 更新视频进度
const updateProgress = () => {
  currentTime.value = video.value.currentTime;
  progress.value = (video.value.currentTime / video.value.duration) * 100;
};

// 格式化时间
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

// 跳转到点击的时间位置
const seek = (event) => {
  const rect = event.target.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const newTime = (clickX / rect.width) * video.value.duration;
  video.value.currentTime = newTime;
};

// 静音或取消静音
const toggleMute = () => {
  video.value.muted = !video.value.muted;
  isMuted.value = video.value.muted;
};

// 切换全屏
const toggleFullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    video.value.requestFullscreen();
  }
};
</script>

<style scoped>
.video-player-container {
  position: relative;
  /* width: 100%; */
  /* max-width: 700px; */
  height: 100%;
  margin: auto;
  background: black;
}
.video-element {
  width: 100%;
  display: block;
}
.controls {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
}
.progress-bar-container {
  flex-grow: 1;
  height: 5px;
  background: #555;
  cursor: pointer;
  margin: 0 10px;
}
.progress-bar {
  height: 100%;
  background: orange;
}
</style>
