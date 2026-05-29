# 徐彦彦教师主页项目

本项目是基于 Hugo + Hugo Blox Academic 模板重构的高校教师个人主页，用于展示个人简介、研究方向、课题组风采、主要科研项目、代表性论文、学生培养与联系方式等内容。

## 快速开始

本地预览：

```bash
npm run dev
```

浏览器访问：

```text
http://localhost:1313/
```

生成静态网站：

```bash
npm run build
```

生成后的文件位于 `public/`。该目录是构建产物，默认不作为源码维护；部署时上传 `public/` 目录内容即可。

## 常用修改位置

- 首页入口：`content/_index.md`
- 研究方向：`content/research/index.md`
- 课题组风采：`content/gallery/index.md`
- 主要科研项目：`content/projects/index.md`
- 代表性论文：`content/publications/index.md`
- 专著、专利与获奖：`content/achievements/index.md`
- 学生培养：`content/students/index.md`
- 联系方式：`content/contact/index.md`
- 教师头像与身份信息：`data/authors/me.yaml`
- 顶部导航：`config/_default/menus.yaml`
- 网站标题与基础配置：`config/_default/hugo.yaml`
- 主题颜色与站点参数：`config/_default/params.yaml`
- 自定义样式：`layouts/_partials/hooks/head-end/custom-site-style.html`
- 课题组图片等静态资源：建议放入 `static/uploads/`

## 当前源码结构

```text
config/      Hugo 与 Hugo Blox 配置
content/     首页与各栏目页面内容
data/        教师个人信息
layouts/     自定义模板钩子与样式
static/      可直接访问的静态资源
docs/        使用与部署文档
assets/      头像等主题资源
```

`bak1-ok1-纯文字列表/` 和 `bak2-ok2-增加图片轮播栏/` 是早期版本备份，保留不动；根目录旧静态页文件已清理，当前正式入口为 Hugo 服务或构建后的 `public/index.html`。

## 项目手册

详细的内容维护、图片添加、样式调整和部署说明见：

[docs/使用与部署手册.md](docs/使用与部署手册.md)
