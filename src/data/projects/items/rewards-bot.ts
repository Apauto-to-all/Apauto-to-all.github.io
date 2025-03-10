import { type Project } from "../model";
// 在文件顶部导入图片
const image = "https://pic1.imgdb.cn/item/67ce5789066befcec6e24e5f.png";

const project: Project = {
  id: "rewards-bot",
  title: "RewardsBot积分助手",
  version: "1.0.0",
  description: "全自动赚取积分，轻松日入180+积分，我已经兑换了350元卡卷，你还在等什么？",
  fullDescription: `RewardsBot 是一款专为自动化获取 Rewards 积分设计的高效工具，解放双手让积分自动到账的Python桌面应用。通过智能模拟人类操作行为，自动完成每日搜索任务和活动，轻松实现积分最大化，可日入180+积分，17975积分=100元卡卷，每日一元，多账户收益++。

  本工具支持多账户管理、无人值守操作、智能行为模拟，采用双端模拟技术同时支持桌面端和移动端任务。完全本地运行，敏感数据加密存储，确保账户安全。

  我已经兑换了350元卡卷，你还在等什么？本软件为付费软件，支持作者持续更新和维护，感谢支持！`,
  thumbnail: image,
  images: [
    image,
    "https://pic1.imgdb.cn/item/67ce57d3066befcec6e24e71.png",
    "https://pic1.imgdb.cn/item/67ce57d5066befcec6e24e74.png",
    "https://pic1.imgdb.cn/item/67ce57d4066befcec6e24e73.png",
    "https://pic1.imgdb.cn/item/67ce57d5066befcec6e24e75.png",
  ],
  category: "desktop",
  techStack: ["python", "tkinter", "playwright"],
  features: [
    "多账户管理：支持多账户并发处理，自由启用/禁用",
    "无人值守操作：设置后完全自动运行，无需人工干预",
    "智能行为模拟：随机搜索内容、浏览时间和滚动行为",
    "双端模拟技术：同时支持桌面端和移动端任务",
    "账户状态监控：实时显示积分、任务完成情况",
    "安全登录机制：自动填充凭据，保留必要验证步骤",
    "密码安全管理：本地加密存储，支持便捷修改密码",
    "无头模式：可选隐藏浏览器界面，更加节省资源",
    "灵活运行模式：支持自动/手动、有头/无头多种组合",
    "并发度调整：根据电脑性能优化同时运行账户数",
    "异常自动处理：智能应对各类弹窗和验证请求",
    "积分统计追踪：记录总积分与工具获取积分",
    "账户健康监控：自动检测账户异常情况并提醒",
  ],
  date: "2025-03-10",
  status: "已完成",
  links: {
    demo: null,
    github: null,
  },
  download_links: {
    lanzou: {
      // 蓝奏云下载链接
      url: "https://wwaw.lanzoub.com/b00mp9t7hg",
      extractCode: "55t1",
    },
  },
  buy_links: {
    // afdian: "https://afdian.net/item/rewardsbot",
    mbd: "https://mbd.pub/o/bread/aJaTlJpw",
  },
};

export default project;
