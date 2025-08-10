import * as React from 'react'
import { cn } from '@/lib/utils'
import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  title?: string
  description?: string
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', title, description, children, ...props }, ref) => {
    const variants = {
      default: 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100',
      success: 'bg-green-100 text-green-900 dark:bg-green-900/20 dark:text-green-400',
      warning: 'bg-yellow-100 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-400',
      error: 'bg-red-100 text-red-900 dark:bg-red-900/20 dark:text-red-400',
      info: 'bg-blue-100 text-blue-900 dark:bg-blue-900/20 dark:text-blue-400',
    }

    const icons = {
      default: null,
      success: <CheckCircle className="h-5 w-5" />,
      warning: <AlertTriangle className="h-5 w-5" />,
      error: <XCircle className="h-5 w-5" />,
      info: <Info className="h-5 w-5" />,
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'relative w-full rounded-lg p-4',
          variants[variant],
          className
        )}
        {...props}
      >
        <div className="flex gap-3">
          {icons[variant] && (
            <div className="flex-shrink-0">{icons[variant]}</div>
          )}
          <div className="flex-1">
            {title && (
              <h5 className="mb-1 font-medium leading-none tracking-tight">
                {title}
              </h5>
            )}
            {description && (
              <div className="text-sm opacity-90">{description}</div>
            )}
            {children}
          </div>
        </div>
      </div>
    )
  }
)

Alert.displayName = 'Alert'

export { Alert }