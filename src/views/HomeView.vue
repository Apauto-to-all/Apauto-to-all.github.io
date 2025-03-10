<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 增强版 URL 自动修复函数
onMounted(() => {
  // 获取当前URL信息
  const path = window.location.pathname;
  const hash = window.location.hash;
  const search = window.location.search;

  // 如果路径不是根路径且hash为空或只是#/，则需要修复
  if ((path !== '/' && path !== '/index.html') &&
    (hash === '' || hash === '#/' || hash === '#')) {

    // 提取实际路径（移除开头的斜杠）
    const realPath = path.replace(/^\//, '');

    // 忽略静态资源路径
    if (realPath.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/i)) {
      return;
    }

    // 使用 history.replaceState 避免在历史记录中创建额外条目
    window.history.replaceState(null, '', '/');

    // 延迟执行以确保路由已初始化
    setTimeout(() => {
      router.push('/' + realPath + search);
    }, 10);
  }
});
</script>

<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="gradient-text">欢迎来到我的技术世界</h1>
        <p class="subtitle">我是Apauto-to-all，一名充满激情的开发者</p>
        <div class="hero-buttons">
          <a href="https://github.com/apauto-to-all" target="_blank" rel="noopener noreferrer">
            <el-button type="primary" size="large" class="gradient-btn">我的GitHub</el-button>
          </a>
          <router-link to="/portfolio">
            <el-button size="large" class="gradient-btn">查看我的作品集</el-button>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  padding: 5rem 1rem;
  margin-bottom: 3rem;
  background-color: #f8f9fa;
  border-radius: 12px;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: 1.5rem;
  color: #606266;
  margin-bottom: 2.5rem;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  /* 调整这个值来控制按钮间距 */
}
</style>
