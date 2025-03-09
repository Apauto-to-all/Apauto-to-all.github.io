<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <div class="app-container">
      <el-header class="app-header">
        <div class="logo-container">
          <router-link to="/" class="header-link">
            <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="40" height="40" />
            <h1 class="site-title">Apauto-to-all</h1>
          </router-link>
        </div>
        <el-menu mode="horizontal" :ellipsis="false" class="app-menu" router>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/portfolio">作品集</el-menu-item>
          <el-menu-item index="/about">关于我</el-menu-item>
        </el-menu>
      </el-header>

      <!-- 主要内容区域 -->
      <main class="main-content">
        <RouterView />
      </main>

      <!-- 页脚 -->
      <el-footer class="app-footer">
        <div class="footer-content">
          <div class="footer-copyright">
            <p>© 2025 Apauto-to-all. All rights reserved.</p>
          </div>
          <div class="footer-links">
            <a href="https://github.com/apauto-to-all" target="_blank" class="footer-link">
              <i class="el-icon-position"></i> GitHub
            </a>
          </div>
        </div>
      </el-footer>
    </div>
  </el-config-provider>
</template>



<style scoped>
.header-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  height: auto !important;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.site-title {
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(135deg, #007bff 0%, #6610f2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
}

.app-menu {
  border-bottom: none;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.app-footer {
  text-align: center;
  padding: 1.5rem;
  color: #606266;
  background-color: #f8f9fa;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--primary-color);
  background: linear-gradient(135deg, #007bff 0%, #6610f2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
  }

  .footer-copyright {
    margin-bottom: 0.5rem;
  }
}
</style>
