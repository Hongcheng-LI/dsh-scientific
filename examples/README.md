# 示例

对接与 MD 的常用配置模板。vina/gromacs 插件实现后可直接配合工具使用；当前可配合 `workflows/docking-workflow.md` 手工执行。

- `vina-docking/conf.txt` — Vina 对接配置模板（口袋中心/尺寸、exhaustiveness、seed）
- `gromacs-md/em.mdp` — 能量最小化参数模板（其余 NVT/NPT/MD 的 mdp 按分子动力学 skill 的参数建议扩展）
