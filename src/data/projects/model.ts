// 项目分类
export type ProjectCategory = "web" | "mobile" | "desktop" | "other" | "all";

// 项目分类信息
export interface CategoryInfo {
  id: ProjectCategory;
  name: string;
}

// 项目信息
export interface Project {
  id: string; // 项目ID
  title: string; // 项目名称
  version: string; // 项目版本
  description: string; // 项目简介
  fullDescription: string; // 项目详细介绍
  thumbnail: string; // 缩略图
  images: string[]; // 项目图片
  category: Exclude<ProjectCategory, "all">; // 项目分类，使用定义的类型而非硬编码
  techStack: string[]; // 技术栈
  features: string[]; // 项目特性
  date: string; // 项目日期
  status: "已完成" | "进行中" | "已废弃"; // 项目状态
  links?: {
    // 项目链接
    demo?: string | null; // 演示链接
    github?: string | null; // 项目源码链接
  };
  download_links?: {
    github?: string; // github下载链接
    lanzou?: { // 蓝奏云下载链接
      url: string;
      extractCode?: string;
    };
  };
  buy_links?: {
    mbd?: string; // 面包多购买链接
    afdian?: string; // 爱发电购买链接
  };
}
