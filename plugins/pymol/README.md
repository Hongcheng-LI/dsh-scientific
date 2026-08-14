# dsh-pymol — PyMOL 无头脚本（规划中）

> ⚠️ **骨架插件**：框架已就位（包结构 / cordis 注入行 / 构建配置），工具尚未实现，安装后不注册任何工具、不影响 DSH 启动。

## 规划的工具

| `pymol_version` | 探测 PyMOL 可用性与版本 |
| `pymol_cmd` | `-cq` 无头模式执行命令串：加载结构、距离/接触测量、渲染 PNG |

## 前置条件（实现后生效）

本机安装 [PyMOL](https://pymol.org)，`pymol` 在 PATH 或配置 binary 绝对路径。

## 配置

见 `cordis.patch.yml` 内注释（binary 绝对路径 / 超时）。
