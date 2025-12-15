// Configuración de la aplicación Pipaflores
export const APP_CONFIG = {
  name: 'Pipaflores',
  tagline: 'Regalos únicos hechos a mano con amor y creatividad',
  description: 'Cada flor, cada detalle, está hecho con cuidado y cariño, reflejando nuestra pasión por crear belleza en lo pequeño.',
  
  // Colores de la paleta
  colors: {
    rosaSuave: '#F8D7E5',
    lilaClaro: '#D7C7F8',
    beige: '#FDF6E3',
    amarilloPastel: '#FFF3B0',
    rosaIntenso: '#E91E63',
    amarilloFuerte: '#FFC107',
    textoOscuro: '#333',
    textoClaro: '#666'
  },
  
  // Configuración del carrito
  cart: {
    maxItems: 50,
    currency: 'EUR',
    currencySymbol: '€'
  },
  
  // Configuración del admin
  admin: {
    password: 'pipaflores2024', // En producción usar autenticación real
    sessionTimeout: 30 * 60 * 1000 // 30 minutos
  },
  
  // Configuración de productos
  products: {
    defaultImage: '🌸',
    maxImages: 5,
    categories: ['flores', 'acuático', 'especial'],
    tags: ['flores', 'amarillo', 'alegría', 'mágico', 'especial', 'multicolor', 'único', 'acuático', 'serenidad', 'natural', 'relajante', 'vibrante', 'fantasía', 'arte']
  },
  
  // Configuración de la empresa
  company: {
    name: 'Pipaflores',
    story: 'Pasamos por momentos muy difíciles en nuestra vida personal, y la creación de estos arreglos fue nuestra terapia, nuestra manera de seguir adelante.',
    mission: 'Crear belleza en lo pequeño y compartir esperanza a través de nuestros arreglos florales únicos.',
    values: [
      {
        icon: '💝',
        title: 'Hecho con Amor',
        description: 'Cada arreglo es creado con dedicación y cariño, transmitiendo emociones positivas a través de la belleza natural.'
      },
      {
        icon: '🌸',
        title: 'Terapia Creativa',
        description: 'La creación floral se convirtió en nuestra forma de sanar, de encontrar paz y de transformar el dolor en belleza.'
      },
      {
        icon: '✨',
        title: 'Único y Especial',
        description: 'Cada pieza es única, reflejando la individualidad y la historia personal que llevamos en cada creación.'
      }
    ]
  },
  
  // Configuración de navegación
  navigation: {
    main: [
      { name: 'Inicio', path: '/' },
      { name: 'Productos', path: '/productos' },
      { name: 'Sobre Nosotros', path: '/sobre-nosotros' }
    ],
    admin: [
      { name: 'Productos', path: '/admin', tab: 'products' },
      { name: 'Página de Inicio', path: '/admin', tab: 'home' },
      { name: 'Sobre Nosotros', path: '/admin', tab: 'about' }
    ]
  },
  
  // Configuración de redes sociales
  social: {
    instagram: '#',
    tiktok: '#',
    email: 'info@pipaflores.com'
  },
  
  // Configuración de SEO
  seo: {
    title: 'Pipaflores - Regalos únicos hechos a mano',
    description: 'Arreglos florales únicos hechos a mano con amor y creatividad. Cada flor, cada detalle, está hecho con cuidado y cariño.',
    keywords: ['flores', 'arreglos florales', 'hecho a mano', 'regalos únicos', 'terapia creativa', 'belleza natural'],
    author: 'Pipaflores',
    ogImage: '/assets/images/og-image.jpg'
  }
}

export default APP_CONFIG
