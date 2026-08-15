# 工作流：文献到幻灯片（literature-to-slides）

**组合**：`dsh-zotero`（独立仓库：`dsh plugin add github:Hongcheng-LI/dsh-zotero`）+ `skills/journal-club`
**输入**：一篇 Zotero 内的论文（标题/关键词/key）
**输出**：组会讲稿大纲 + 幻灯片（Markdown 或 PPTX）

## 步骤

1. **取全文**：`zotero_search` 定位 → `zotero_item` 拿元数据 → `zotero_fulltext` 读正文（超长分优先级：摘要 > 图表说明 > 结论 > 方法）。
2. **讲稿大纲**：按 `skills/journal-club` 的 15 分钟结构生成大纲（Markdown），每页一个信息点。
3. **图表处理**：`zotero_attachment_path` 拿 PDF 原路径，提示用户提取关键图表；图注必须来自原文 Figure legend。
4. **生成幻灯片**：以 Markdown 大纲为底（Marp/reveal.js 格式）；若用户要求 PPTX，用文档工具生成，图表位留占位符。
5. **审校**：对照原文核对每个数值与结论，标注页码出处。

## 检查点

- [ ] 每张图有原文出处
- [ ] 讨论题 ≥ 3 个
- [ ] 总页数 ≤ 15（15 分钟版）
