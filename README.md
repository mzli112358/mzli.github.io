# 个人学术主页

这是 Mingzhe Li 的个人学术主页，托管在 GitHub Pages 上。网站展示了个人简介、研究成果、论文发表和项目作品集。

## 🌐 访问地址

网站地址：https://mzli112358.github.io

## 📁 项目结构

```
.
├── index.html              # 主页（个人简介）
├── portfolio/              # 作品集目录
│   ├── index.html          # 作品集主页
│   └── llm-agent.html      # LLM Agent 项目详情
├── publication/            # 论文目录
├── assets/                 # 静态资源目录
│   ├── components/         # 可复用组件
│   │   ├── navbar.html     # 导航栏组件
│   │   └── sidebar.html    # 侧边栏组件
│   ├── css/                # 样式文件
│   │   ├── main.css        # 主样式表
│   │   └── academicons.css # 学术图标样式
│   ├── js/                 # JavaScript 文件
│   │   ├── load-components.js # 组件加载脚本
│   │   └── ...             # 其他 JS 库
│   └── images/             # 图片资源
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions 部署配置
```

## 🚀 技术栈

- **前端框架**：纯 HTML/CSS/JavaScript
- **部署方式**：GitHub Pages + GitHub Actions
- **组件化**：使用 JavaScript 动态加载公共组件（导航栏、侧边栏）
- **数学公式**：MathJax 支持 LaTeX 数学公式渲染
- **数据可视化**：Plotly.js

## 🛠️ 本地开发

1. **克隆仓库**
   ```bash
   git clone https://github.com/mzli112358/mzli112358.github.io.git
   cd mzli112358.github.io
   ```

2. **本地预览**
   
   由于使用了动态组件加载，建议使用本地服务器预览：
   
   ```bash
   # 使用 Python 3
   python -m http.server 8000
   
   # 或使用 Node.js
   npx http-server
   
   # 或使用 PHP
   php -S localhost:8000
   ```
   
   然后在浏览器中访问 `http://localhost:8000`

## 📝 添加新内容

### 添加新论文

1. 在 `publication/` 目录下创建新的 HTML 文件
2. 参考现有论文页面的格式
3. 在主页的论文列表中添加链接

### 添加新项目

1. 在 `portfolio/` 目录下创建新的 HTML 文件
2. 参考现有项目的格式
3. 在作品集页面中添加链接

### 修改公共组件

- **导航栏**：编辑 `assets/components/navbar.html`
- **侧边栏**：编辑 `assets/components/sidebar.html`
- 修改后，所有使用这些组件的页面会自动更新

## 🔄 自动部署

项目使用 GitHub Actions 实现自动部署：

- 当代码推送到 `main` 或 `master` 分支时，自动触发部署
- 部署过程会创建 `.nojekyll` 文件，确保 GitHub Pages 正确处理静态文件
- 部署完成后，网站会自动更新

## 📄 许可证

本项目为个人主页，保留所有权利。

## 📧 联系方式

如有问题或建议，欢迎通过以下方式联系：

- GitHub Issues: [提交问题](https://github.com/mzli112358/mzli112358.github.io/issues)
- 个人主页: https://mzli112358.github.io

---

*最后更新：2025年*
