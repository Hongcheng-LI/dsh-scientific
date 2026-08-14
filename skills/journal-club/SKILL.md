---
name: journal-club
description: 准备组会文献分享：论文精读→背景补充→要点提炼→讲稿与讨论题。当用户说"下周 journal club 我讲这篇/帮我准备组会"时使用。
---

# Journal Club 准备

配合工具：`tool-zotero`（zotero_fulltext / zotero_item）、dsh-synbio（synbio_paper_search / synbio_kegg_find 等）。

## 流程

1. **拿到论文**：Zotero 定位（zotero_search）→ `zotero_fulltext` 读全文；记录元数据。
2. **背景补充**（10 分钟原则）：
   - 关键概念/通路不熟时查 KEGG（synbio_kegg_find/get）；
   - 用 1-2 篇前置文献补充背景（synbio_paper_search，注明为什么选它们）。
3. **精读提取**（沿用 paper-reading 模板）：问题→方法→结果→结论→局限。
4. **讲稿结构**（15 分钟版）：
   - 开场：一句话说清论文解决了什么问题、为什么重要
   - 背景 2 页：领域现状 + 本文切入点
   - 方法 3-4 页：只讲主干逻辑，细节放备用页
   - 结果 5-6 页：每页一个图，先说图证明了什么再看图
   - 讨论 1-2 页：结论、局限、对我们课题的启示
5. **讨论题**：准备 3 个开放问题（方法可信度、可迁移性、下一步）。
6. **输出**：讲稿大纲（Markdown）+ 讨论题；可选配合 literature-to-slides 工作流转成幻灯片。

## 原则

- 每张结果图的解读必须来自原文 Figure legend 与正文，不得臆测。
- "对我们课题的启示"一节需要用户确认研究方向后再写，或标注为建议。
- 控制信息量：讲稿是提词器不是论文复刻。
