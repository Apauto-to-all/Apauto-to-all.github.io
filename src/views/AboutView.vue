<template>
  <div class="about-container">
    <div class="about-header fade-in">
      <el-avatar :size="120" src="https://avatars.githubusercontent.com/u/107919154?v=4" class="profile-avatar">
        <!-- 如果头像加载失败，显示首字母 -->
        <span>A</span>
      </el-avatar>
      <h1 class="gradient-text">关于我</h1>
      <p class="about-subtitle">技术爱好者 / 程序开发者</p>
    </div>

    <div class="about-section fade-in">
      <h2 class="section-title">个人简介</h2>
      <p class="about-text">
        你好！我是 Apauto-to-all，一名热爱技术和创新的开发者。我专注于自动化技术开发，
        致力于创建高效、用户友好的应用程序和工具。我相信技术的力量可以简化复杂流程，
        提高生产效率，让生活和工作变得更加便捷。
      </p>
      <p class="about-text">
        我热衷于探索新技术，解决具有挑战性的问题，并与开源社区分享我的知识和经验。
      </p>
    </div>

    <!-- 专业技能 -->
    <div class="about-section fade-in">
      <h2 class="section-title">专业技能</h2>
      <div class="skills-container">
        <div class="skill-category">
          <h3>前端开发</h3>
          <div class="skill-tags">
            <el-tag effect="plain">Vue</el-tag>
          </div>
        </div>

        <div class="skill-category">
          <h3>后端开发</h3>
          <div class="skill-tags">
            <el-tag effect="plain">Python</el-tag>
            <el-tag effect="plain">数据库设计</el-tag>
          </div>
        </div>
      </div>
    </div>

    <div class="about-section fade-in">
      <h2 class="section-title">开源贡献</h2>
      <p class="about-text">
        我热衷于开源社区，相信共享知识和代码可以推动技术进步。欢迎访问我的
        <a href="https://github.com/apauto-to-all" target="_blank" class="gradient-text">GitHub主页</a>
        查看我的项目和贡献。
      </p>
    </div>

    <div class="about-section fade-in">
      <h2 class="section-title">联系方式</h2>
      <div class="contact-methods">
        <el-button class="gradient-outline-btn" round>
          <i class="el-icon-message"></i> 无
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.profile-avatar {
  margin-bottom: 1.5rem;
  border: 4px solid transparent;
  background: linear-gradient(white, white) padding-box,
    var(--primary-gradient) border-box;
}

.about-subtitle {
  color: var(--text-light);
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.about-section {
  margin-bottom: 4rem;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.skill-category h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.contact-methods {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .skills-container {
    grid-template-columns: 1fr;
  }

  .contact-methods {
    justify-content: center;
  }
}
</style>
