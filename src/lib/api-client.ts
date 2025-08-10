import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import { logger } from './logger'

class ApiClient {
  private client: AxiosInstance

  constructor(baseURL?: string) {
    this.client = axios.create({
      baseURL: baseURL || '/api/v1',
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.setupInterceptors()
  }

  private setupInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Add auth token if available
        const token = this.getAuthToken()
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }

        // Log request in development
        logger.debug('API Request', {
          method: config.method,
          url: config.url,
          data: config.data,
        })

        return config
      },
      (error) => {
        logger.error('Request error', error)
        return Promise.reject(error)
      }
    )

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => {
        logger.debug('API Response', {
          status: response.status,
          url: response.config.url,
        })
        return response
      },
      async (error: AxiosError) => {
        logger.error('Response error', error as Error)

        if (error.response?.status === 401) {
          // Handle unauthorized
          await this.handleUnauthorized()
        }

        return Promise.reject(error)
      }
    )
  }

  private getAuthToken(): string | null {
    // Implement token retrieval
    return null
  }

  private async handleUnauthorized() {
    // Implement unauthorized handling
    // Example: redirect to login, refresh token, etc
  }

  async get<T>(url: string, config?: AxiosRequestConfig) {
    const response = await this.client.get<T>(url, config)
    return response.data
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    const response = await this.client.post<T>(url, data, config)
    return response.data
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    const response = await this.client.put<T>(url, data, config)
    return response.data
  }

  async delete<T>(url: string, config?: AxiosRequestConfig) {
    const response = await this.client.delete<T>(url, config)
    return response.data
  }

  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    const response = await this.client.patch<T>(url, data, config)
    return response.data
  }
}

export const apiClient = new ApiClient()