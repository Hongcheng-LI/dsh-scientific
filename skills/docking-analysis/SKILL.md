---
name: docking-analysis
description: 分析对接结果：结合模式可视化、关键相互作用（氢键/疏水/π 堆积）、与共晶配体对比。当用户要求"分析对接结果/看看结合模式"时使用。
---

# 对接结果分析

配合工具：`tool-pymol`（pymol_cmd）、`tool-chimerax`（chimerax_cmd）、`tool-vina` 输出的 _out.pdbqt。

## 流程

1. **加载与定位**：`pymol_cmd`：load 受体与对接输出（`load complex.pdbqt`），按 affinity 排序取 mode 1（及差异大的 mode 2/3）。
2. **相互作用分析**：
   - PyMOL: `distance` 找 3.5 Å 内氢键供受体；`show sticks, byres(resn LIG around 4)` 展示口袋残基
   - 或 ChimeraX: `contacts :ligand` / `clashes :ligand`（冲突检查）
3. **关键残基归纳**：列表——残基 | 类型 | 距离(Å) | 作用类型（氢键/疏水/盐桥/π 堆积）。
4. **与共晶配体对比**（若有）：RMSD、共同作用的残基、新增/丢失的相互作用。
5. **可视化出图**：口袋+配体卡通图（PNG, dpi=300，存工作区），标注关键残基。
6. **结论**：结合模式是否合理（配体是否深入口袋、关键残基是否与文献一致）、构象稳定性（多个 mode 是否聚在一起）。

## 原则

- 距离数值必须来自工具测量，不得目测估计。
- 区分"打分好"与"模式合理"：打分高但只有边缘结合或大量冲突的构象要明确指出。
- 输出图片路径，让用户能直接查看。
