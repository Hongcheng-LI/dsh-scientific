export const name = 'tool-chimerax'
export const inject = ['tools']
export type Config = Record<string, never>

/**
 * 骨架插件：ChimeraX 无头脚本工具开发中，当前不注册任何工具。
 * 规划：chimerax_version（可用性探测）、chimerax_cmd（--nogui 执行命令：contacts/clash/离屏渲染）。
 * 安装本插件不会影响 DSH 启动。
 */
export function apply(_ctx: unknown, _config: Config = {}): void {
  /* 规划中的工具在此注册 */
}
