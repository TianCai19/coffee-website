# 咖啡店网站部署指南

## 项目概述

本项目是一个咖啡店介绍网站，使用 Next.js 16 构建，已完成以下阶段：

✅ 第一阶段：无数据库版本（已完成）
- 静态页面展示
- 首页、菜单、关于我们、联系我们页面
- 已推送到 GitHub：https://github.com/TianCai19/coffee-website

✅ 第二阶段：数据库版本（代码已完成）
- 动态菜单数据
- 留言功能
- Neon 数据库集成

## 当前状态

### 已完成的工作

1. ✅ 创建 Next.js 16 项目结构
2. ✅ 设计咖啡店网站内容和布局
3. ✅ 实现咖啡店介绍页面（无数据库版本）
4. ✅ 部署到 Vercel（无数据库版本）- 需要您手动部署
5. ✅ 创建云端数据库配置
6. ✅ 配置数据库连接和环境变量
7. 🔄 本地数据库初始化和测试
8. ⏳ 部署到 Vercel（有数据库版本）

## 下一步操作

### 步骤 1：手动部署无数据库版本到 Vercel

由于 Vercel CLI 需要交互式登录，请按以下步骤手动部署：

1. 访问 [https://vercel.com/new](https://vercel.com/new)
2. 点击 "Import Git Repository"
3. 选择仓库：`TianCai19/coffee-website`
4. 点击 "Deploy"
5. 等待部署完成，记录项目 URL

### 步骤 2：创建 Neon 数据库

1. 访问 [https://neon.tech](https://neon.tech) 并创建账户
2. 点击 "New Project"
3. 填写项目信息：
   - Name: `coffee-website-db`
   - Region: 选择最近的区域
4. 创建项目
5. 在项目页面，点击 "Connect" 查看连接字符串
6. 复制连接字符串（格式：`postgresql://...`）

### 步骤 3：推送数据库版本

1. 推送代码到 GitHub：
```bash
git push origin main
```

2. 在 Vercel 中重新部署：
   - 进入您的 Vercel 项目
   - 点击 "Deployments" 标签
   - 点击最新的部署记录
   - 点击 "Redeploy"

3. 添加环境变量：
   - 在 Vercel 项目设置中，点击 "Environment Variables"
   - 添加：
     - `DATABASE_URL`: 您的 Neon 连接字符串
   - 点击 "Save"
   - 重新部署

### 步骤 4：测试数据库连接

在本地测试数据库连接：

```bash
# 1. 设置环境变量
cp .env.example .env.local
# 编辑 .env.local，添加数据库连接字符串

# 2. 推送数据库 schema
npm run db:push

# 3. 添加初始数据
npm run db:seed

# 4. 启动开发服务器
npm run dev
```

访问 `http://localhost:3000/menu` 查看动态菜单。

## 项目文件结构

```
coffee-website/
├── app/
│   ├── api/
│   │   ├── menu/route.ts        # 菜单 API
│   │   └── contact/route.ts      # 留言 API
│   ├── about/page.tsx            # 关于我们
│   ├── contact/page.tsx          # 联系我们
│   ├── menu/page.tsx             # 菜单页面
│   └── page.tsx                  # 首页
├── lib/db/
│   ├── index.ts                  # 数据库连接
│   ├── schema.ts                 # 数据模型
│   └── seed.ts                   # 初始数据
├── drizzle.config.ts             # Drizzle 配置
├── .env.example                  # 环境变量示例
└── package.json
```

## 技术栈

- **前端框架**: Next.js 16
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **数据库**: Neon (PostgreSQL)
- **ORM**: Drizzle
- **部署**: Vercel
- **版本控制**: GitHub

## 功能特点

### 第一阶段功能
- ✅ 响应式设计
- ✅ 首页展示
- ✅ 菜单展示（静态）
- ✅ 关于我们
- ✅ 联系我们

### 第二阶段功能
- ✅ 动态菜单（从数据库加载）
- ✅ 留言功能（提交到数据库）
- ✅ 数据库管理

## 数据库 Schema

### menu_items 表
- id: 主键
- name: 菜品名称
- description: 描述
- price: 价格
- category: 分类
- image_url: 图片 URL（可选）
- created_at: 创建时间

### messages 表
- id: 主键
- name: 姓名
- email: 邮箱
- phone: 电话（可选）
- message: 留言内容
- created_at: 创建时间

## 常用命令

```bash
# 本地开发
npm run dev

# 构建生产版本
npm run build

# 推送数据库 schema
npm run db:push

# 添加初始数据
npm run db:seed

# 查看数据库
npm run db:studio

# 启动开发服务器
npm start
```

## 环境变量

在 `.env.local` 文件中设置：

```
DATABASE_URL=postgresql://[user]:[password]@[host]:[port]/[database]?sslmode=require
```

在 Vercel 项目设置中设置相同的环境变量。

## 故障排除

### 数据库连接失败

1. 检查 `DATABASE_URL` 环境变量是否正确
2. 确保 Neon 项目状态为 "Active"
3. 检查数据库连接字符串格式

### 菜单数据不显示

1. 确认已运行 `npm run db:seed` 添加初始数据
2. 检查 API 路由是否正确：`/api/menu`
3. 查看浏览器控制台是否有错误信息

### 留言提交失败

1. 检查 API 路由是否正确：`/api/contact`
2. 确认所有必填字段都已填写
3. 查看服务器日志获取详细错误信息

## 支持

如有问题，请检查：
1. Node.js 版本：`node --version`（需要 18+）
2. npm 版本：`npm --version`
3. GitHub 仓库状态
4. Vercel 部署状态

## 下一步计划

部署完成后，您可以：
1. 访问网站确认所有功能正常
2. 通过 `/api/contact` 测试留言功能
3. 使用 `npm run db:studio` 管理数据库
4. 根据需要添加更多功能

---

**部署完成后，您的咖啡店网站将在 Vercel 上正常运行！** ☕
