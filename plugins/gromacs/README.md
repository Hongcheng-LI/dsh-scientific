# dsh-gromacs — GROMACS 分子动力学（规划中）

> ⚠️ **骨架插件**：框架已就位（包结构 / cordis 注入行 / 构建配置），工具尚未实现，安装后不注册任何工具、不影响 DSH 启动。

## 规划的工具

| `gmx_version` | 探测 GROMACS 可用性与版本 |
| `gmx_run` | 子命令白名单执行（pdb2gmx→…→mdrun→分析），stdin 应答交互选择 |

## 前置条件（实现后生效）

本机安装 [GROMACS](https://www.gromacs.org) 并 source GMXRC，`gmx` 在 PATH 或配置 binary 绝对路径。

## 配置

见 `cordis.patch.yml` 内注释（binary 绝对路径 / 超时）。
