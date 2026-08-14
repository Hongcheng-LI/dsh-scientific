# dsh-chimerax — ChimeraX 无头脚本（规划中）

> ⚠️ **骨架插件**：框架已就位（包结构 / cordis 注入行 / 构建配置），工具尚未实现，安装后不注册任何工具、不影响 DSH 启动。

## 规划的工具

| `chimerax_version` | 探测 ChimeraX 可用性与版本 |
| `chimerax_cmd` | `--nogui` 执行命令串：open/contacts/clashes、离屏渲染 |

## 前置条件（实现后生效）

本机安装 [UCSF ChimeraX](https://www.cgl.ucsf.edu/chimerax/)；Windows 安装路径含版本号，需配置 binary 绝对路径。

## 配置

见 `cordis.patch.yml` 内注释（binary 绝对路径 / 超时）。
