# 工作流：分子对接全流程（docking-workflow）

**组合**：`plugins/vina`（实现后）+ `plugins/pymol` 或 `plugins/chimerax`（实现后）+ `skills/batch-docking` + `skills/docking-analysis`
**当前状态**：vina/pymol/chimerax 为骨架插件；本工作流先作为操作手册使用（DSH 的 shell 工具可执行相同命令），插件实现后逐步工具化。

**输入**：受体结构（PDB ID 或本地 PDB）+ 配体库
**输出**：对接打分表 + top 构象的结合模式分析 + 口袋渲染图

## 步骤

1. **受体准备**：
   - 取结构（PDB；dsh-synbio 的 `synbio_pdb_entry` 查详情）
   - 处理：加氢、删水电、转 PDBQT（OpenBabel / ADFR，shell 执行）
2. **配体准备**：SDF/MOL → PDBQT，记录质子化状态（生理 pH）。
3. **口袋定义**：共晶配体质心 ± 边距 6~8 Å；无配体时按文献位点，**与用户确认后**固定盒子参数。
4. **对接**：先试对接验证 → 批量（见 `skills/batch-docking`），固定 seed。
5. **分析**：打分排序 → top 10 构象逐个做相互作用分析（`skills/docking-analysis`）。
6. **报告**：方法（受体/盒子/参数/seed）→ 打分表 → top 结合模式图文 → 局限与建议（质子化、熵效应、打分函数误差）。

## 检查点

- [ ] 盒子参数有依据并被用户确认
- [ ] 打分 ≠ 活性的免责说明
- [ ] top 构象出图可查
