// Utilidades y funciones auxiliares para Pipaflores

/**
 * Formatea un precio en euros
 * @param {number} price - Precio a formatear
 * @returns {string} Precio formateado con símbolo de euro
 */
export const formatPrice = (price) => {
  return `€${price.toFixed(2)}`
}

/**
 * Formatea un texto para mostrarlo como título
 * @param {string} text - Texto a formatear
 * @returns {string} Texto con primera letra en mayúscula
 */
export const formatTitle = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/**
 * Trunca un texto a un número específico de caracteres
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} Texto truncado con puntos suspensivos
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

/**
 * Genera un ID único
 * @returns {string} ID único basado en timestamp
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

/**
 * Valida si un email es válido
 * @param {string} email - Email a validar
 * @returns {boolean} True si es válido
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Valida si un precio es válido
 * @param {number} price - Precio a validar
 * @returns {boolean} True si es válido
 */
export const isValidPrice = (price) => {
  return typeof price === 'number' && price > 0 && !isNaN(price)
}

/**
 * Filtra productos por término de búsqueda
 * @param {Array} products - Array de productos
 * @param {string} searchTerm - Término de búsqueda
 * @returns {Array} Productos filtrados
 */
export const filterProducts = (products, searchTerm) => {
  if (!searchTerm) return products
  
  const term = searchTerm.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term) ||
    product.tags.some(tag => tag.toLowerCase().includes(term))
  )
}

/**
 * Ordena productos por criterio
 * @param {Array} products - Array de productos
 * @param {string} sortBy - Criterio de ordenamiento
 * @returns {Array} Productos ordenados
 */
export const sortProducts = (products, sortBy) => {
  const sorted = [...products]
  
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price)
    case 'name':
    default:
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
  }
}

/**
 * Calcula el total de items en el carrito
 * @param {Array} cartItems - Items del carrito
 * @returns {number} Total de items
 */
export const getCartTotalItems = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0)
}

/**
 * Calcula el precio total del carrito
 * @param {Array} cartItems - Items del carrito
 * @returns {number} Precio total
 */
export const getCartTotalPrice = (cartItems) => {
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
}

/**
 * Obtiene todos los tags únicos de una lista de productos
 * @param {Array} products - Array de productos
 * @returns {Array} Array de tags únicos
 */
export const getUniqueTags = (products) => {
  const allTags = products.flatMap(product => product.tags)
  return [...new Set(allTags)]
}

/**
 * Obtiene productos destacados
 * @param {Array} products - Array de productos
 * @returns {Array} Productos destacados
 */
export const getFeaturedProducts = (products) => {
  return products.filter(product => product.featured)
}

/**
 * Genera una clase CSS para el grid responsive
 * @param {number} columns - Número de columnas
 * @returns {string} Clase CSS
 */
export const getGridClass = (columns) => {
  return `grid-${columns}`
}

/**
 * Valida si una URL de imagen es válida
 * @param {string} url - URL a validar
 * @returns {boolean} True si es válida
 */
export const isValidImageUrl = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Formatea tags para mostrar
 * @param {Array} tags - Array de tags
 * @param {number} maxTags - Máximo número de tags a mostrar
 * @returns {Object} Objeto con tags visibles y ocultos
 */
export const formatTagsForDisplay = (tags, maxTags = 3) => {
  const visibleTags = tags.slice(0, maxTags)
  const hiddenTags = tags.slice(maxTags)
  
  return {
    visible: visibleTags,
    hidden: hiddenTags,
    hasMore: hiddenTags.length > 0
  }
}

/**
 * Genera un mensaje de confirmación para eliminar
 * @param {string} itemName - Nombre del item a eliminar
 * @returns {string} Mensaje de confirmación
 */
export const getDeleteConfirmationMessage = (itemName) => {
  return `¿Estás seguro de que quieres eliminar "${itemName}"? Esta acción no se puede deshacer.`
}

/**
 * Debounce function para optimizar búsquedas
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function} Función con debounce
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export default {
  formatPrice,
  formatTitle,
  truncateText,
  generateId,
  isValidEmail,
  isValidPrice,
  filterProducts,
  sortProducts,
  getCartTotalItems,
  getCartTotalPrice,
  getUniqueTags,
  getFeaturedProducts,
  getGridClass,
  isValidImageUrl,
  formatTagsForDisplay,
  getDeleteConfirmationMessage,
  debounce
}
