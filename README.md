# dsh-scientific

[中文](#中文) | [English](#english)

<a name="中文"></a>

DeepSeek Harness 的**科研计算插件套件**（monorepo）：文献管理（Zotero）、分子对接（AutoDock Vina）、结构可视化（PyMOL / ChimeraX）、分子动力学（GROMACS），配套研究 skills 与端到端 workflows。

由合成生物学研究者在真实科研工作流中打磨：**从文献调研 → 靶点/配体准备 → 对接筛选 → MD 验证 → 组会汇报**的全链路。

## 仓库结构

```
dsh-scientific/
├── plugins/            # DSH 插件（每个目录一个可独立安装的 npm 包）
│   ├── zotero/         # ✅ Zotero 文献库工具（检索/全文/附件/笔记，实测 Zotero 9）
│   ├── vina/           # 🔲 AutoDock Vina 分子对接（骨架，工具规划中）
│   ├── pymol/          # 🔲 PyMOL 无头脚本（骨架，工具规划中）
│   ├── chimerax/       # 🔲 ChimeraX 无头脚本（骨架，工具规划中）
│   └── gromacs/        # 🔲 GROMACS MD 流程（骨架，工具规划中）
├── skills/             # 研究 skills（方法论，模型按需调用）
│   ├── literature-review/
│   ├── batch-docking/
│   ├── docking-analysis/
│   ├── molecular-dynamics/
│   └── journal-club/
├── workflows/          # 端到端工作流手册（多插件组合）
│   ├── literature-research.md
│   ├── literature-to-slides.md
│   └── docking-workflow.md
├── docs/               # 使用与开发文档
├── examples/           # 配置与脚本示例
```

## 快速开始

```sh
git clone https://github.com/Hongcheng-LI/dsh-scientific
cd dsh-scientific
npm install && npm run build && npm test
```

安装插件到 DSH（以 zotero 为例）：

```sh
dsh plugin --profile web add github:Hongcheng-LI/dsh-scientific#v0.1
```

详见 [docs/getting-started.md](docs/getting-started.md)。

计算类插件（vina/pymol/chimerax/gromacs）目前为**骨架状态**：包结构与注入配置已就位、工具规划已写在各自 README，安装后不注册任何工具、不影响启动。前置软件（Vina、PyMOL、ChimeraX、GROMACS）的要求见各插件 README。

## 姊妹仓库

- [dsh-synbio](https://github.com/Hongcheng-LI/dsh-synbio) — 文献（Europe PMC）、通路/酶/化合物（KEGG）、蛋白结构（RCSB PDB）检索工具，国内网络直连可达

## License

MIT

---

<a name="english"></a>

Scientific computing plugin suite for DeepSeek Harness (monorepo): literature management (Zotero), molecular docking (AutoDock Vina), visualization (PyMOL / ChimeraX), molecular dynamics (GROMACS), with research skills and end-to-end workflows.

Built for the full research pipeline: literature → target/ligand prep → docking → MD validation → journal club — by synthetic biology researchers, for real lab workflows.

See [docs/getting-started.md](docs/getting-started.md) to start, and each plugin's README for its prerequisites.
