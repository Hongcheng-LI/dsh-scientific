---
name: molecular-dynamics
description: GROMACS 分子动力学标准流程：体系构建→能量最小化→平衡→产出 MD→轨迹分析（RMSD/RMSF/H键/SASA）。当用户要求"跑 MD/动力学模拟/验证复合物稳定性"时使用。
---

# GROMACS 分子动力学流程

配合工具：`tool-gromacs`（gmx_version / gmx_run）。

## 流程

1. **前置检查**：`gmx_version` 确认可用；确认输入（蛋白 PDB / 蛋白-配体复合物）与力场偏好（默认 amber14sb / OPLS，问用户）。
2. **体系构建**：
   - `pdb2gmx`（选力场与水模型，提示用水 TIP3P；配体需先生成拓扑，告知用户配体力场需 CGenFF/acpype 等准备）
   - `editconf` 盒子（dodecahedron，蛋白边缘 ≥1.0 nm）
   - `solvate` 加水；`genion` 加离子至 0.15 M 并中和电荷（记录选择的组）
3. **能量最小化**：em.mdp（steepest descent, emtol ≤ 1000）→ `grompp` + `mdrun -deffnm em`；检查 Fmax 收敛。
4. **平衡**：NVT（300 K, 100 ps）→ NPT（1 bar, 100 ps）；检查温度/压力/密度曲线是否平稳。
5. **产出 MD**：默认 10~50 ns（问用户时长）；提醒用户按体系与科学问题决定，不要默认替用户拍板长时间模拟。
6. **轨迹分析**：
   - `rms`（骨架 RMSD，判断是否平衡：后半段 plateau）
   - `rmsf`（残基柔性）
   - `hbond`、`sasa`（按需）
   - 配体结合稳定性：`mindist` 配体-蛋白最小距离随时间变化
7. **报告**：图（xvg→PNG）+ 数值结论（RMSD 均值与漂移、平衡时间点、配体是否解离）。

## 原则

- 每步的 mdp 关键参数（dt、时长、控温控压方法）在报告中列出，保证可复现。
- 模拟时长与体系规模提示用户估计耗时（mdrun 输出 ns/day），超长任务先告知再执行。
- 不平衡（RMSD 持续上升）时如实报告并给出可能原因，不得粉饰。
