# 香浓咖啡网站

一个使用 Next.js 16 构建的咖啡店介绍网站。

## 功能特点

- 响应式设计，适配所有设备
- 首页展示咖啡店特色
- 菜单页面展示所有产品
- 关于我们页面介绍咖啡店历史
- 联系我们页面包含留言功能
- 数据库支持（菜单和留言管理）

## 技术栈

- Next.js 16
- TypeScript
- Tailwind CSS
- Neon 数据库
- Drizzle ORM

## 本地开发

### 1. 安装依赖

```bash
npm install
```

### 2. 设置环境变量

复制 `.env.example` 文件为 `.env.local`：

```bash
cp .env.example .env.local
```

然后编辑 `.env.local` 文件，设置您的数据库连接 URL：

```
DATABASE_URL=your_database_url_here
```

### 3. 数据库设置

#### 创建数据库

1. 访问 [Neon](https://neon.tech/) 创建账户
2. 创建新项目
3. 获取连接字符串（Connection String）
4. 将连接字符串添加到 `.env.local` 文件

#### 初始化数据库

推送 schema 到数据库：

```bash
npm run db:push
```

添加初始数据：

```bash
npm run db:seed
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

## 部署到 Vercel

### 第一阶段：无数据库版本

1. 推送代码到 GitHub：
```bash
git add .
git commit -m "feat: 初始版本"
git push origin main
```

2. 在 Vercel 中导入 GitHub 仓库

3. 部署完成后，记录项目 URL

### 第二阶段：数据库版本

1. 创建 Neon 数据库（参考上述步骤）

2. 在 Vercel 项目设置中添加环境变量：
   - `DATABASE_URL`: 您的 Neon 数据库连接字符串

3. 重新部署项目

## 数据库管理

### 查看数据

```bash
npm run db:studio
```

### 推送 schema 变更

```bash
npm run db:push
```

## 项目结构

```
├── app/                  # Next.js App Router
│   ├── api/             # API 路由
│   ├── about/           # 关于我们页面
│   ├── contact/         # 联系我们页面
│   ├── menu/            # 菜单页面
│   ├── globals.css      # 全局样式
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 首页
├── lib/
│   └── db/              # 数据库相关文件
│       ├── index.ts     # 数据库连接
│       ├── schema.ts    # 数据模型
│       └── seed.ts      # 初始数据
├── public/              # 静态文件
├── drizzle/             # 数据库迁移文件
├── .env.example         # 环境变量示例
└── drizzle.config.ts    # Drizzle 配置
```

## 许可证

MIT
