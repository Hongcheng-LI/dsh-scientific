# dsh-scientific

> **DeepSeek Harness 的科研计算插件套件** —— 让 DSH agent 直接做文献调研、分子对接、结构可视化、分子动力学。

[中文](#中文) | [English](#english)

---

<a name="中文"></a>

## 这是什么

`dsh-scientific` 是面向 **DeepSeek Harness (DSH)** 的科研计算插件 monorepo。把文献调研 → 靶点/配体准备 → 对接筛选 → MD 验证 → 组会汇报这条**全链路**，统一到 DSH 的对话框里，让 agent 用 DSH 工具 + skills 按科研方法论一气呵成。

它**不是另一个 AI 助手** —— 是 DSH 的插件包，不开新窗口、不存新数据；DSH 在哪，它就在哪。

由合成生物学研究者在真实科研工作流中打磨。

## 仓库状态

| 模块 | 状态 | 说明 |
|---|---|---|
| `plugins/zotero` | ✅ 完成 | Zotero 文献库检索/全文/附件/笔记，9 个工具 |
| `plugins/vina` | 🔲 骨架 | AutoDock Vina 分子对接（规划中） |
| `plugins/pymol` | 🔲 骨架 | PyMOL 无头脚本（规划中） |
| `plugins/chimerax` | 🔲 骨架 | ChimeraX 无头脚本（规划中） |
| `plugins/gromacs` | 🔲 骨架 | GROMACS MD 流程（规划中） |
| `skills/` | ✅ 5 个 | literature-review / batch-docking / docking-analysis / molecular-dynamics / journal-club |
| `workflows/` | ✅ 3 个 | literature-research / literature-to-slides / docking-workflow |
| `examples/` | ✅ 2 个 | vina-docking / gromacs-md 配置示例 |

> 骨架插件包结构齐全、装上不弄崩启动；通过 DSH `plugin-check` 审计。等核心算法 + UI 敲定后再注册工具。

## 三层架构

```
┌────────────────────────────────────────────┐
│  Workflows（人读手册，多插件端到端）        │
│  workflows/literature-research.md          │
│  workflows/docking-workflow.md             │
│  workflows/literature-to-slides.md         │
└──────────────────┬─────────────────────────┘
                   │ 引用
┌──────────────────▼─────────────────────────┐
│  Skills（模型读方法论，按 description 触发）│
│  skills/literature-review/                 │
│  skills/batch-docking/                     │
│  skills/docking-analysis/                  │
│  skills/molecular-dynamics/                │
│  skills/journal-club/                      │
└──────────────────┬─────────────────────────┘
                   │ 引用具体工具
┌──────────────────▼─────────────────────────┐
│  Plugins（DSH 工具层）                      │
│  plugins/zotero/   (9 tools, ready)         │
│  plugins/vina/     (skeleton)               │
│  plugins/pymol/    (skeleton)               │
│  plugins/chimerax/ (skeleton)               │
│  plugins/gromacs/  (skeleton)               │
└────────────────────────────────────────────┘
```

- **Plugins** = "能调什么"（DSH 工具）
- **Skills** = "怎么干"（方法论，模型按需触发）
- **Workflows** = "组合起来怎么用"（人读操作手册，含检查点）

## 快速开始

### 1. 装 DSH（WorkBuddy 用户可跳过）

```sh
npm install -g @deepseek-ai/dsh
```

### 2. 克隆并构建插件

```sh
git clone https://github.com/Hongcheng-LI/dsh-scientific
cd dsh-scientific
npm install && npm run build
```

### 3. 安装你需要的插件（按目录逐个）

本仓库是 monorepo，**根目录不是插件包**，必须在 `plugins/<name>/` 目录打包后安装：

```sh
# zotero 是目前唯一完整插件
cd plugins/zotero && npm pack
dsh plugin --profile web add ./dsh-zotero-*.tgz
cd ../..

# 重启 DSH
dsh --profile web
```

骨架插件（vina / pymol / chimerax / gromacs）目前不注册工具，安装也无副作用。

### 4. 试试看

DSH 对话框里说：

> 在我的 Zotero 里搜一下 2023 年以后的 CRISPR 相关论文，挑两篇读全文。

→ 触发 `zotero_search` → `zotero_item` → `zotero_fulltext`，配合 `skills/literature-review/` 工作流。

## 插件清单

| 插件 | 工具数 | 状态 | 前置软件 | 文档 |
|---|---|---|---|---|
| `dsh-zotero` | 9 | ✅ 完成 | Zotero 7+ | [README](plugins/zotero/README.md) |
| `dsh-vina` | 0 | 🔲 骨架 | AutoDock Vina | [README](plugins/vina/README.md) |
| `dsh-pymol` | 0 | 🔲 骨架 | PyMOL | [README](plugins/pymol/README.md) |
| `dsh-chimerax` | 0 | 🔲 骨架 | ChimeraX | [README](plugins/chimerax/README.md) |
| `dsh-gromacs` | 0 | 🔲 骨架 | GROMACS | [README](plugins/gromacs/README.md) |

## Skills & Workflows

- **Skills**（模型按 description 触发）
  - `literature-review` — 系统性文献综述
  - `batch-docking` — 批量对接编排
  - `docking-analysis` — 对接打分表解读
  - `molecular-dynamics` — MD 流程与平衡判据
  - `journal-club` — 组会汇报生成
- **Workflows**（人读手册）
  - [literature-research.md](workflows/literature-research.md) — 从选题到综述
  - [literature-to-slides.md](workflows/literature-to-slides.md) — 文献到组会 PPT
  - [docking-workflow.md](workflows/docking-workflow.md) — 对接全流程

## 开发

```sh
git clone https://github.com/Hongcheng-LI/dsh-scientific
cd dsh-scientific
npm install
npm run build   # 构建全部插件
npm test        # 跑全部测试
```

- 写新插件 → [docs/plugin-development.md](docs/plugin-development.md)
- 写新 skill → [docs/skill-development.md](docs/skill-development.md)
- 入门 → [docs/getting-started.md](docs/getting-started.md)

## 审计

每个插件用 [`@deepseek-ai/dsh-plugin-check`](https://github.com/omdsh-dev/dsh-plugin-check) 体检。当前成绩：

```
$ cd plugins/zotero && npm run audit
verdict: PASS
checks: 18 pass / 0 fail / 0 warn / 1 skip
```

其他 4 个骨架插件等填 `apply()` 后补检。审计脚本见 `plugins/zotero/tools/`，详见 [plugins/zotero/tools/AUDIT-REPORT.md](plugins/zotero/tools/AUDIT-REPORT.md)。

## 路线图

- [x] zotero 插件完成（含 plugin-check 审计通过）
- [ ] vina 工具（Vina 版本探测 + 对接打分表解析）
- [ ] pymol / chimerax 工具（无头脚本 + 图像导出）
- [ ] gromacs 工具（子命令白名单 + stdin 应答交互选择）
- [ ] synbio 插件（Europe PMC / KEGG / RCSB PDB，国内网络直连可达）
- [ ] docs/ARCHITECTURE.md（详细分层设计）
- [ ] CONTRIBUTING.md（贡献指南）

## 贡献

Issue / PR 欢迎。开发规范见 [docs/plugin-development.md](docs/plugin-development.md)。

## License

MIT —— 详见 [LICENSE](LICENSE)。

## 引用

如果本仓库对你的研究有帮助，请引用：

```bibtex
@software{li2026dshscientific,
  title  = {dsh-scientific: DeepSeek Harness plugin suite for scientific computing},
  author = {Li, Hongcheng},
  year   = {2026},
  url    = {https://github.com/Hongcheng-LI/dsh-scientific}
}
```

---

<a name="english"></a>

## What is this

`dsh-scientific` is a **plugin suite for DeepSeek Harness (DSH)** covering literature management, molecular docking, structure visualization and molecular dynamics — built by synthetic biology researchers for real lab workflows.

End-to-end pipeline: literature review → target/ligand prep → docking screen → MD validation → journal club.

It is **not another AI assistant** — it's a plugin pack for DSH; no separate window, no separate data store.

## Repository status

| Module | Status | Notes |
|---|---|---|
| `plugins/zotero` | ✅ Done | Zotero library search/fulltext/attachment/note, 9 tools |
| `plugins/vina` | 🔲 Skeleton | AutoDock Vina molecular docking (planned) |
| `plugins/pymol` | 🔲 Skeleton | PyMOL headless scripts (planned) |
| `plugins/chimerax` | 🔲 Skeleton | ChimeraX headless scripts (planned) |
| `plugins/gromacs` | 🔲 Skeleton | GROMACS MD flow (planned) |
| `skills/` | ✅ 5 | literature-review, batch-docking, docking-analysis, molecular-dynamics, journal-club |
| `workflows/` | ✅ 3 | literature-research, literature-to-slides, docking-workflow |
| `examples/` | ✅ 2 | vina-docking, gromacs-md |

> Skeleton plugins pass the DSH plugin-check audit; structure is complete, no tools registered yet, safe to install.

## Three-layer architecture

```
Workflows (human-readable manuals, end-to-end)
    ↓ references
Skills    (model-readable methodology, triggered by description)
    ↓ references
Plugins   (DSH tool layer)
```

- **Plugins** = what you can call (DSH tools)
- **Skills** = how to do it (methodology the model triggers by need)
- **Workflows** = how to combine them (human-readable playbooks with checkpoints)

## Quick start

### 1. Install DSH (skip if using WorkBuddy)

```sh
npm install -g @deepseek-ai/dsh
```

### 2. Clone and build

```sh
git clone https://github.com/Hongcheng-LI/dsh-scientific
cd dsh-scientific
npm install && npm run build
```

### 3. Install plugins per directory

This repo is a monorepo — the root is NOT an installable package. Install per-plugin:

```sh
cd plugins/zotero && npm pack
dsh plugin --profile web add ./dsh-zotero-*.tgz
cd ../..

dsh --profile web
```

Skeleton plugins register no tools; installing them has no effect.

### 4. Try it

In the DSH chat:

> Search my Zotero for CRISPR papers since 2023, pick two and read the full text.

→ triggers `zotero_search` → `zotero_item` → `zotero_fulltext`, guided by `skills/literature-review/`.

## Plugin catalog

| Plugin | Tools | Status | Prerequisite | Docs |
|---|---|---|---|---|
| `dsh-zotero` | 9 | ✅ done | Zotero 7+ | [README](plugins/zotero/README.md) |
| `dsh-vina` | 0 | 🔲 skeleton | AutoDock Vina | [README](plugins/vina/README.md) |
| `dsh-pymol` | 0 | 🔲 skeleton | PyMOL | [README](plugins/pymol/README.md) |
| `dsh-chimerax` | 0 | 🔲 skeleton | ChimeraX | [README](plugins/chimerax/README.md) |
| `dsh-gromacs` | 0 | 🔲 skeleton | GROMACS | [README](plugins/gromacs/README.md) |

## Development

```sh
git clone https://github.com/Hongcheng-LI/dsh-scientific
cd dsh-scientific
npm install
npm run build
npm test
```

- Plugin dev → [docs/plugin-development.md](docs/plugin-development.md)
- Skill dev → [docs/skill-development.md](docs/skill-development.md)
- Getting started → [docs/getting-started.md](docs/getting-started.md)

## Audit

Each plugin is checked by [`@deepseek-ai/dsh-plugin-check`](https://github.com/omdsh-dev/dsh-plugin-check). Current scores:

```
$ cd plugins/zotero && npm run audit
verdict: PASS
checks: 18 pass / 0 fail / 0 warn / 1 skip
```

The 4 skeleton plugins will be checked after they fill in `apply()`.

## License

MIT — see [LICENSE](LICENSE).

## Citation

```bibtex
@software{li2026dshscientific,
  title  = {dsh-scientific: DeepSeek Harness plugin suite for scientific computing},
  author = {Li, Hongcheng},
  year   = {2026},
  url    = {https://github.com/Hongcheng-LI/dsh-scientific}
}
```
