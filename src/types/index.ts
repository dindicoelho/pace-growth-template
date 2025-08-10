export interface User {
  id: string
  email: string
  name: string | null
  image: string | null
  role: UserRole
  createdAt: Date
  updatedAt: Date
}

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ErrorResponse {
  error: string
  message: string
  statusCode: number
  timestamp: string
}

export interface QueryParams {
  page?: number
  limit?: number
  sort?: string
  order?: 'asc' | 'desc'
  search?: string
  [key: string]: any
}

export interface FeatureFlag {
  key: string
  enabled: boolean
  description?: string
  rolloutPercentage?: number
}

export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  createdAt: Date
}