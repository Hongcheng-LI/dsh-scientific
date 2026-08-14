# dsh-vina — AutoDock Vina 分子对接（规划中）

> ⚠️ **骨架插件**：框架已就位（包结构 / cordis 注入行 / 构建配置），工具尚未实现，安装后不注册任何工具、不影响 DSH 启动。

## 规划的工具

| `vina_version` | 探测 Vina 可用性与版本 |
| `vina_dock` | 执行对接：config 文件或 receptor/ligand + 口袋参数；解析打分表（kcal/mol），输出构象路径 |

## 前置条件（实现后生效）

本机安装 [AutoDock Vina](https://vina.scriui.org)，`vina` 在 PATH 或配置 binary 绝对路径。

## 配置

见 `cordis.patch.yml` 内注释（binary 绝对路径 / 超时）。
