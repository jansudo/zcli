import * as chalk from 'chalk'

/**
 * Displays an early access warning banner
 * @param log - The logging function from the command instance
 */
export function displayEarlyAccessWarning (log: (message?: string) => void): void {
  log(chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
  log(chalk.yellow('EARLY ACCESS FEATURE'))
  log(chalk.yellow('Connector development tools are in early access and available to limited users.'))
  log(chalk.yellow('Features may change without notice.'))
  log(chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
  log('')
}
