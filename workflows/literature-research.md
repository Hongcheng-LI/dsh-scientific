# 工作流：文献调研（literature-research）

**组合**：`plugins/zotero` + dsh-synbio + `skills/literature-review`

**输入**：一个研究主题（如"链霉菌 piericidin 生物合成的调控机制"）
**输出**：结构化调研报告 + 纳入 Zotero 的关键文献清单

## 步骤

1. **广域检索**（dsh-synbio）：
   `synbio_paper_search` 用主题词+同义词检索，2~3 轮，记录每轮命中数。
2. **筛选与补全**：按摘要筛出核心文献（10~30 篇）；对缺摘要的用 `synbio_paper_abstract` 补齐。
3. **全文精读**（zotero）：
   对已入库的文献：`zotero_search` → `zotero_fulltext`；未入库的提示用户先导入 Zotero（浏览器 Connector）。
4. **交叉综合**：按 `skills/literature-review` 的对比表格输出共识/分歧/空白。
5. **归档**：报告存 `reports/<主题>-<日期>.md`；关键文献的 Zotero key 列表附在报告末尾。

## 检查点

- [ ] 检索词与命中数如实记录
- [ ] 每条论断有 DOI 出处
- [ ] 用户确认过"研究空白"小节再定稿
