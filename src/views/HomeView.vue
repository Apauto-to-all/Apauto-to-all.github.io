<script setup lang="ts">
</script>

<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="gradient-text">欢迎来到我的技术世界</h1>
        <p class="subtitle">我是Apauto-to-all，一名充满激情的开发者</p>
        <a href="https://github.com/apauto-to-all" target="_blank" rel="noopener noreferrer">
          <el-button type="primary" size="large" class="gradient-btn">探索我的作品</el-button>
        </a>
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
</style>
