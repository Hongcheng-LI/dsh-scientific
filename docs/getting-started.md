# 入门指南

## 这是什么

dsh-scientific 是 DeepSeek Harness（DSH）的科研计算插件套件：文献管理、分子对接、结构可视化、分子动力学，配套研究 skills 与工作流。monorepo 结构，`plugins/` 下每个目录是一个可独立安装的 DSH 插件。

## 环境要求

- Node.js ≥ 20
- DSH（DeepSeek Harness）已安装
- 按需：Zotero 7+（zotero 插件）、Vina/PyMOL/ChimeraX/GROMACS（计算插件，见各自 README）

## 安装插件

本仓库是 monorepo，根目录不是插件包，**按插件安装**（`plugins/` 下每个目录是独立插件包）。

方式一：本地打包安装（最直接）：

```sh
git clone https://github.com/Hongcheng-LI/dsh-scientific
cd dsh-scientific && npm install && npm run build
cd plugins/zotero && npm pack
dsh plugin --profile web add ./dsh-zotero-0.1.0.tgz
```

方式二：npm 安装（各插件发布 npm 后）：

```sh
dsh plugin --profile web add dsh-zotero
```

装好后重启 `dsh web`。

> 注：独立的 dsh-zotero 仓库已归档，`plugins/zotero` 是唯一维护位置。

## 安装 skills

DSH 从技能目录发现 skills（`<name>/SKILL.md`）。把本仓库 `skills/` 下需要的目录复制（或符号链接）到你的 DSH 用户技能目录，或在项目根放置。确认方式：会话中问 agent "有哪些可用 skills"。

## 使用

- 文献：让 agent "在我的 Zotero 里搜 XXX"（zotero 插件工具）
- 方法论：说"帮我做 XXX 的文献综述"会触发 `literature-review` skill
- 全流程：按 `workflows/` 的手册逐段执行

## 开发

```sh
git clone https://github.com/Hongcheng-LI/dsh-scientific
cd dsh-scientific
npm install
npm run build   # 构建全部插件
npm test        # 运行全部测试
```

新插件开发见 [plugin-development.md](plugin-development.md)，新 skill 见 [skill-development.md](skill-development.md)。
