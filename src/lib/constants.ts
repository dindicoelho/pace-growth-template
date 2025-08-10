export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'App'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
export const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV || 'development'

export const IS_PRODUCTION = APP_ENV === 'production'
export const IS_STAGING = APP_ENV === 'staging'
export const IS_DEVELOPMENT = APP_ENV === 'development'

export const API_VERSION = 'v1'
export const API_BASE_URL = `${APP_URL}/api/${API_VERSION}`

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
}

export const CACHE_TIMES = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  LONG: 3600, // 1 hour
  DAY: 86400, // 24 hours
}

export const ERROR_MESSAGES = {
  GENERIC: 'Algo deu errado. Tente novamente.',
  NETWORK: 'Erro de conexão. Verifique sua internet.',
  UNAUTHORIZED: 'Você não tem permissão para esta ação.',
  NOT_FOUND: 'Recurso não encontrado.',
  VALIDATION: 'Verifique os dados informados.',
}

export const SUCCESS_MESSAGES = {
  SAVED: 'Salvo com sucesso!',
  DELETED: 'Removido com sucesso!',
  UPDATED: 'Atualizado com sucesso!',
  CREATED: 'Criado com sucesso!',
}