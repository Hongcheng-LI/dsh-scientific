export const name = 'tool-gromacs'
export const inject = ['tools']
export type Config = Record<string, never>

/**
 * 骨架插件：GROMACS MD 流程工具开发中，当前不注册任何工具。
 * 规划：gmx_version（可用性探测）、gmx_run（子命令白名单执行 + stdin 应答交互选择）。
 * 安装本插件不会影响 DSH 启动。
 */
export function apply(_ctx: unknown, _config: Config = {}): void {
  /* 规划中的工具在此注册 */
}
