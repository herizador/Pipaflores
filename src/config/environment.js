// Configuración de entorno para Pipaflores

const ENV_CONFIG = {
  // Configuración de la aplicación
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Pipaflores',
  APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
  APP_DESCRIPTION: import.meta.env.VITE_APP_DESCRIPTION || 'Regalos únicos hechos a mano con amor y creatividad',
  
  // Configuración del servidor
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
  APP_URL: import.meta.env.VITE_APP_URL || 'http://localhost:3000',
  
  // Configuración de autenticación
  ADMIN_PASSWORD: import.meta.env.VITE_ADMIN_PASSWORD || 'pipaflores2024',
  
  // Configuración de pagos (futuro)
  STRIPE_PUBLIC_KEY: import.meta.env.VITE_STRIPE_PUBLIC_KEY || '',
  PAYPAL_CLIENT_ID: import.meta.env.VITE_PAYPAL_CLIENT_ID || '',
  
  // Configuración de redes sociales
  INSTAGRAM_URL: import.meta.env.VITE_INSTAGRAM_URL || '#',
  TIKTOK_URL: import.meta.env.VITE_TIKTOK_URL || '#',
  EMAIL: import.meta.env.VITE_EMAIL || 'info@pipaflores.com',
  
  // Configuración de SEO
  SITE_TITLE: import.meta.env.VITE_SITE_TITLE || 'Pipaflores - Regalos únicos hechos a mano',
  SITE_DESCRIPTION: import.meta.env.VITE_SITE_DESCRIPTION || 'Arreglos florales únicos hechos a mano con amor y creatividad',
  SITE_KEYWORDS: import.meta.env.VITE_SITE_KEYWORDS || 'flores,arreglos florales,hecho a mano,regalos únicos',
  
  // Configuración de analytics (futuro)
  GOOGLE_ANALYTICS_ID: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '',
  FACEBOOK_PIXEL_ID: import.meta.env.VITE_FACEBOOK_PIXEL_ID || '',
  
  // Configuración de notificaciones
  ENABLE_NOTIFICATIONS: import.meta.env.VITE_ENABLE_NOTIFICATIONS === 'true' || true,
  NOTIFICATION_DURATION: parseInt(import.meta.env.VITE_NOTIFICATION_DURATION) || 5000,
  
  // Configuración de caché
  CACHE_DURATION: parseInt(import.meta.env.VITE_CACHE_DURATION) || 3600000,
  ENABLE_OFFLINE_MODE: import.meta.env.VITE_ENABLE_OFFLINE_MODE === 'true' || false,
  
  // Configuración de desarrollo
  IS_DEVELOPMENT: import.meta.env.DEV,
  IS_PRODUCTION: import.meta.env.PROD,
  MODE: import.meta.env.MODE
}

// Validar configuración crítica
export const validateConfig = () => {
  const errors = []
  
  if (!ENV_CONFIG.ADMIN_PASSWORD) {
    errors.push('ADMIN_PASSWORD is required')
  }
  
  if (!ENV_CONFIG.APP_NAME) {
    errors.push('APP_NAME is required')
  }
  
  if (errors.length > 0) {
    console.error('Configuration errors:', errors)
    return false
  }
  
  return true
}

// Configuración de desarrollo
export const DEV_CONFIG = {
  enableLogging: true,
  enableDebugMode: true,
  mockApi: true,
  showPerformanceMetrics: true
}

// Configuración de producción
export const PROD_CONFIG = {
  enableLogging: false,
  enableDebugMode: false,
  mockApi: false,
  showPerformanceMetrics: false
}

// Obtener configuración según el entorno
export const getConfig = () => {
  return ENV_CONFIG.IS_DEVELOPMENT ? DEV_CONFIG : PROD_CONFIG
}

// Utilidades de configuración
export const isFeatureEnabled = (feature) => {
  return import.meta.env[`VITE_FEATURE_${feature.toUpperCase()}`] === 'true'
}

export const getApiUrl = (endpoint = '') => {
  return `${ENV_CONFIG.API_URL}${endpoint}`
}

export const getAppUrl = (path = '') => {
  return `${ENV_CONFIG.APP_URL}${path}`
}

export default ENV_CONFIG
