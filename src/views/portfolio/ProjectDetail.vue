<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { categories, projects as allProjects } from '@/data/projects';
import { ArrowLeft, VideoPlay, Position, Check, Download, ShoppingCart } from '@element-plus/icons-vue';

const route = useRoute();
const projectId = route.params.projectId as string;

// 项目数据库
const projectsData = allProjects;

// 根据ID获取项目数据
const project = computed(() => {
  return projectsData.find(p => p.id === projectId);
});

// 定义打开链接的方法
const openLink = (url: string) => {
  window.open(url, '_blank');
};

// 获取状态对应的标签类型
const getStatusType = computed(() => {
  if (!project.value) return 'info';

  switch (project.value.status) {
    case '已完成':
      return 'success';
    case '进行中':
      return 'warning';
    case '已废弃':
      return 'danger';
    default:
      return 'info';
  }
});

// 复制提取码功能
const copyExtractCode = (code: string) => {
  navigator.clipboard.writeText(code)
    .then(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      ElMessage({
        message: '提取码已复制到剪贴板',
        type: 'success',
      });
    })
    .catch(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      ElMessage.error({
        message: '复制失败，请手动复制',
      });
    });
};

// 轮播设置
const carouselHeight = ref('500px');

// 添加滚动到指定区域的函数
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div v-if="project" class="project-detail">
    <!-- 返回按钮 -->
    <div class="back-navigation">
      <router-link to="/portfolio" class="back-link">
        <el-icon>
          <ArrowLeft />
        </el-icon> 返回作品集
      </router-link>
    </div>

    <!-- 项目英雄区 -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="project-title">{{ project.title }}</h1>
        <div class="project-meta">
          <el-tag>{{categories.find(cat => cat.id === project?.category)?.name}}</el-tag>
          <el-tag :type="getStatusType">{{ project.status }}</el-tag>
          <span>版本：v{{ project.version }}</span>
          <span>更新时间：{{ project.date }}</span>
        </div>
        <p class="project-brief">{{ project.description }}</p>
        <div v-if="project.links">
          <el-button v-if="project.links.demo" type="primary" @click="openLink(project.links.demo)">
            <el-icon>
              <VideoPlay />
            </el-icon> 在线演示
          </el-button>
          <el-button v-if="project.links.github" @click="openLink(project.links.github)">
            <el-icon>
              <Position />
            </el-icon> 查看源码
          </el-button>
        </div>

        <!-- 下载区域导航按钮 -->
        <el-button v-if="project.download_links && (project.download_links.github || project.download_links.lanzou)"
          type="success" @click="scrollToSection('down')">
          <el-icon>
            <Download />
          </el-icon> 查看下载
        </el-button>

        <!-- 购买区域导航按钮 -->
        <el-button v-if="project.buy_links && (project.buy_links.afdian || project.buy_links.mbd)" type="danger"
          @click="scrollToSection('buy')">
          <el-icon>
            <ShoppingCart />
          </el-icon> 查看购买
        </el-button>

      </div>
    </div>

    <!-- 项目展示轮播 -->
    <div v-if="project.images && project.images.length > 0">
      <el-carousel :height="carouselHeight" indicator-position="outside" arrow="always" type="card">
        <el-carousel-item v-for="(image, index) in project.images" :key="index">
          <el-image :src="image" :preview-src-list="project.images" :initial-index="index" preview-teleported
            fit="contain" alt="项目截图" @click.stop />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 主要内容区域 -->
    <div class="content-wrapper">
      <!-- 项目介绍 -->
      <section class="content-section">
        <h2 class="section-title">项目介绍</h2>
        <div class="section-content">
          <p class="project-description">{{ project.fullDescription }}</p>
        </div>
      </section>

      <!-- 核心功能 -->
      <section class="content-section">
        <h2 class="section-title">核心功能</h2>
        <div class="section-content feature-grid">
          <div v-for="(feature, index) in project.features" :key="index" class="feature-item">
            <div class="feature-icon">
              <el-icon>
                <Check />
              </el-icon>
            </div>
            <div class="feature-text">{{ feature }}</div>
          </div>
        </div>
      </section>

      <!-- 技术栈 -->
      <section class="content-section">
        <h2 class="section-title">技术栈</h2>
        <div class="section-content">
          <div class="tech-stack">
            <div v-for="tech in project.techStack" :key="tech" class="tech-item">
              <el-tag effect="light">{{ tech }}</el-tag>
            </div>
          </div>
        </div>
      </section>

      <!-- 下载链接 -->
      <section id="down" class="content-section"
        v-if="project.download_links && (project.download_links.github || project.download_links.lanzou)">
        <h2 class="section-title">下载链接</h2>
        <div class="section-content">
          <!-- GitHub下载链接 -->
          <el-button v-if="project.download_links.github" @click="openLink(project.download_links.github)"
            type="success" size="large">
            <el-icon>
              <Position />
            </el-icon>
            GitHub 下载
          </el-button>

          <!-- 蓝奏云下载链接 -->
          <template v-if="project.download_links.lanzou">
            <el-button @click="openLink(project.download_links.lanzou.url)" type="primary" size="large">
              <el-icon>
                <Download />
              </el-icon>
              蓝奏云下载
            </el-button>
            <template v-if="project.download_links.lanzou.extractCode">
              <span>提取码:</span>
              <el-tag type="info" size="large" style="cursor: pointer"
                @click="copyExtractCode(project.download_links.lanzou.extractCode)">
                {{ project.download_links.lanzou.extractCode }}
              </el-tag>
            </template>
          </template>
        </div>
      </section>

      <!-- 购买链接 -->
      <section id="buy" class="content-section"
        v-if="project.buy_links && (project.buy_links.afdian || project.buy_links.mbd)">
        <h2 class="section-title">购买链接</h2>
        <div class="section-content">
          <el-button v-if="project.buy_links.afdian" @click="openLink(project.buy_links.afdian)" type="danger"
            size="large">
            <el-icon>
              <ShoppingCart />
            </el-icon>
            从爱发电购买
          </el-button>

          <el-button v-if="project.buy_links.mbd" @click="openLink(project.buy_links.mbd)" type="warning" size="large">
            <el-icon>
              <ShoppingCart />
            </el-icon>
            从面包多购买
          </el-button>
        </div>
      </section>

      <!-- 结束 -->
    </div>
  </div>
  <div v-else class="project-not-found">
    <el-result icon="warning" title="项目未找到" :sub-title="`无法找到ID为 ${projectId} 的项目`">
      <template #extra>
        <router-link to="/portfolio" class="back-portfolio-link">
          返回作品列表
        </router-link>
      </template>
    </el-result>
  </div>
</template>

<style scoped>
/* 项目详情页 */
.project-detail {
  max-width: 80%;
  margin: 0 auto;
  padding: 0;
}


/* 返回按钮 */
.back-navigation {
  padding: 1.5rem 2rem;
}

.back-link {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #606266;
  text-decoration: none;
  font-weight: 500;
}

.back-link:hover {
  color: #409eff;
}

/* 英雄区域 */
.hero-section {
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 10px;
  margin-bottom: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-blend-mode: overlay;
  position: relative;
  overflow: hidden;
}

/* 第一层渐变 */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg,
      rgba(0, 123, 255, 0.8) 0%,
      rgba(102, 16, 242, 0.8) 100%);
  z-index: 1;
}

/* 第二层渐变（轻微的动态效果） */
.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 70%);
  z-index: 1;
  animation: pulse 6s ease-in-out infinite;
  opacity: 0.8;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
  position: relative;
  z-index: 2;
}

/* 项目标题 */
.project-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.project-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.project-brief {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}


/* 内容区布局 */
.content-wrapper {
  display: grid;
  gap: 2rem;
  background: white;
}

.content-section {
  padding: 2rem;
  border-bottom: 1px solid #ebeef5;
}

.content-section:last-child {
  border-bottom: none;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #303133;
  position: relative;
  padding-left: 1rem;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: #409eff;
  border-radius: 2px;
}

.section-content {
  color: #606266;
}

.project-description {
  line-height: 1.8;
  text-align: justify;
  padding: 1rem;
  background-color: #f9f9f9;
  border-left: 4px solid #409eff;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.02em;
  font-size: 20px;
  /* 增大字体大小 */
  font-weight: 400;
  /* 适当加粗 */
}

/* 功能列表 */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.feature-icon {
  color: #409eff;
  font-size: 1.25rem;
  padding-top: 2px;
}

.feature-text {
  font-size: 1rem;
  line-height: 1.6;
}

/* 技术栈 */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tech-item {
  margin-bottom: 0.5rem;
}


/* 项目未找到 */
.project-not-found {
  text-align: center;
  padding: 5rem 1rem;
}

/* 响应式调整 */
@media (max-width: 992px) {

  .hero-section {
    height: 350px;
  }

  .project-title {
    font-size: 2.5rem;
  }

}

.back-portfolio-link {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1.5rem;
  background: var(--primary-gradient);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .hero-section {
    height: 300px;
  }

  .project-title {
    font-size: 2rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .carousel-height {
    height: 300px;
  }
}
</style>
