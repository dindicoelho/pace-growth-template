type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogContext {
  [key: string]: any
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development'
  private isProduction = process.env.NODE_ENV === 'production'

  private log(level: LogLevel, message: string, context?: LogContext) {
    const timestamp = new Date().toISOString()
    const logData = {
      timestamp,
      level,
      message,
      ...context,
    }

    if (this.isDevelopment) {
      console.log(`[${level.toUpperCase()}]`, message, context || '')
    }

    if (this.isProduction) {
      // Send to monitoring service (Sentry, LogFlare, etc)
      this.sendToMonitoring(logData)
    }
  }

  private sendToMonitoring(logData: any) {
    // Implement integration with monitoring service
    // Example: Sentry, LogFlare, DataDog, etc
  }

  debug(message: string, context?: LogContext) {
    this.log('debug', message, context)
  }

  info(message: string, context?: LogContext) {
    this.log('info', message, context)
  }

  warn(message: string, context?: LogContext) {
    this.log('warn', message, context)
  }

  error(message: string, error?: Error, context?: LogContext) {
    this.log('error', message, {
      ...context,
      error: error?.message,
      stack: error?.stack,
    })
  }
}

export const logger = new Logger()