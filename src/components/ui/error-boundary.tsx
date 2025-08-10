import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
    // Send to monitoring service
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="flex items-center justify-center min-h-[400px] p-4">
          <div className="max-w-md w-full">
            <Alert
              variant="error"
              title="Algo deu errado"
              description={
                this.state.error?.message || 
                'Ocorreu um erro inesperado. Por favor, tente novamente.'
              }
            />
            <div className="mt-4 flex gap-2">
              <Button onClick={this.handleReset}>
                Tentar novamente
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
              >
                Recarregar página
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}