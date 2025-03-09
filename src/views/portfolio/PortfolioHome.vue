<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { categories, projects as allProjects } from '@/data/projects';

const router = useRouter();
const projects = ref(allProjects);
const showTechCount = 4;

// 处理分类切换
const handleCategoryChange = (category: string) => {
  if (category === 'all') {
    router.push('/portfolio');
  } else {
    router.push(`/portfolio/category/${category}`);
  }
};

// 跳转到项目详情
const goToDetail = (projectId: string) => {
  router.push(`/portfolio/${projectId}`);
};
</script>

<template>
  <div class="container section">
    <!-- 作品集标题区域 -->
    <div class="text-center">
      <h1 class="section-title text-center gradient-text">我的作品集</h1>
    </div>

    <!-- 分类导航 -->
    <div class="category-nav flex-center">
      <el-radio-group @change="handleCategoryChange" default-value="all">
        <el-radio-button v-for="category in categories" :key="category.id" :label="category.id">
          {{ category.name }}
        </el-radio-button>
      </el-radio-group>
    </div>

    <!-- 项目列表 -->
    <div class="projects-grid">
      <el-card v-for="project in projects" :key="project.id" class="project-card" @click="goToDetail(project.id)">
        <!-- 加载图片 -->
        <div class="project-thumbnail">
          <el-image :src="project.thumbnail" fit="cover" :alt="`${project.title}缩略图`"></el-image>
        </div>
        <div class="project-info">
          <!-- 项目标题 -->
          <h3 class="project-title">{{ project.title }}</h3>
          <!-- 项目描述 -->
          <p class="project-description">{{ project.description }}</p>
          <!-- 技术栈 -->
          <div class="project-tech">
            <!-- 如果项目的技术栈数量大于showTechCount个，显示tooltip -->
            <el-tooltip v-if="project.techStack.length > showTechCount" placement="top" effect="light">
              <template #content>
                <div style="display: flex; flex-wrap: wrap; gap: 5px; max-width: 250px;">
                  <el-tag v-for="tech in project.techStack.slice(showTechCount)" :key="tech" size="small"
                    effect="plain">
                    {{ tech }}
                  </el-tag>
                </div>
              </template>
              <div class="project-tech">
                <el-tag v-for="tech in project.techStack.slice(0, showTechCount)" :key="tech" size="small"
                  effect="plain" class="tech-tag">
                  {{ tech }}
                </el-tag>
                <el-tag size="small" type="info" effect="plain">
                  +{{ project.techStack.length - showTechCount }}
                </el-tag>
              </div>
            </el-tooltip>
            <!-- 否则直接显示技术栈 -->
            <template v-else>
              <el-tag v-for="tech in project.techStack" :key="tech" size="small" effect="plain" class="tech-tag">
                {{ tech }}
              </el-tag>
            </template>
          </div>
        </div>
      </el-card>
    </div>

    <!-- 子路由出口 - 用于渲染项目详情和分类页 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.category-nav {
  margin-bottom: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.project-card {
  cursor: pointer;
  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow);
}

.project-thumbnail {
  height: 160px;
  overflow: hidden;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
}

.project-info {
  padding: 0.5rem 0;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.project-description {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  margin-right: 0;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
}

@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
