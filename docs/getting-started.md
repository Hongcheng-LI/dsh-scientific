# 入门指南

## 这是什么

dsh-scientific 是 DeepSeek Harness（DSH）的科研计算插件套件：文献管理、分子对接、结构可视化、分子动力学，配套研究 skills 与工作流。

**Zotero 插件已独立成仓库**（[Hongcheng-LI/dsh-zotero](https://github.com/Hongcheng-LI/dsh-zotero)），不再位于本仓库 `plugins/` 下；本仓库的 skills/workflows 引用 `zotero_*` 工具时需先单独安装该插件。

## 环境要求

- Node.js ≥ 20
- DSH（DeepSeek Harness）已安装
- 按需：Zotero 7+（zotero 插件）、Vina/PyMOL/ChimeraX/GROMACS（计算插件，见各自 README）

## 安装插件

### Zotero 插件（独立仓库，一行装）

```sh
dsh plugin --profile web add github:Hongcheng-LI/dsh-zotero
```

装好后重启 `dsh web`。

### 本仓库的骨架插件（vina/pymol/chimerax/gromacs）

本仓库是 monorepo，**根目录不是插件包**，按插件目录打包安装：

```sh
git clone https://github.com/Hongcheng-LI/dsh-scientific
cd dsh-scientific && npm install && npm run build
cd plugins/<name> && npm pack
dsh plugin --profile web add ./<name>-*.tgz
```

骨架插件目前不注册工具，安装无副作用。

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
