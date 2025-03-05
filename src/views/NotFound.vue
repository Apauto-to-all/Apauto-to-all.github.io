<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>页面未找到</h2>
    <p>您访问的页面不存在，请检查 URL 是否正确</p>
    <router-link to="/" class="home-link">返回首页</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 6rem;
  margin-bottom: 0;
  color: var(--primary-color);
}

h2 {
  font-size: 2rem;
  margin-top: 0;
}

.home-link {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1.5rem;
  background: var(--primary-gradient);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}
</style>
