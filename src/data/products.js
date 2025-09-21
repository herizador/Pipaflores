// Datos iniciales de productos para Pipaflores

export const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Flores Amarillas",
    description: "Hermoso arreglo floral en tonos amarillos que irradia alegría y calidez. Perfecto para alegrar cualquier espacio con su color vibrante y su aroma delicado. Cada flor ha sido cuidadosamente seleccionada para crear una composición que evoca la luz del sol y la felicidad.",
    price: 25.99,
    images: [
      "/assets/images/Flores_Amarillas1.jpg"
    ],
    tags: ["flores", "amarillo", "alegría", "vibrante", "soleado"],
    category: "flores",
    featured: true,
    stock: 10,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 2,
    name: "Flores Muza Winx",
    description: "Arreglo mágico inspirado en las hadas, perfecto para ocasiones especiales. Combina colores fantásticos que evocan la magia y la fantasía. Este diseño único transporta a un mundo de ensueño donde cada pétalo cuenta una historia mágica.",
    price: 32.99,
    images: [
      "/assets/images/Flores_Muza_Winx1.jpg",
      "/assets/images/Flores_Muza_Winx2.jpg"
    ],
    tags: ["flores", "mágico", "especial", "fantasía", "hadas", "colorido"],
    category: "flores",
    featured: true,
    stock: 8,
    createdAt: new Date('2024-01-16'),
    updatedAt: new Date('2024-01-16')
  },
  {
    id: 3,
    name: "Flores Heterocromático",
    description: "Composición única con flores de diferentes colores creando un efecto visual espectacular. Una verdadera obra de arte floral que combina múltiples tonos en perfecta armonía. Cada color complementa al otro, creando un espectáculo visual único.",
    price: 28.99,
    images: [
      "/assets/images/Flores_Heterocromático1.jpg"
    ],
    tags: ["flores", "multicolor", "único", "arte", "armonía", "espectacular"],
    category: "flores",
    featured: true,
    stock: 12,
    createdAt: new Date('2024-01-17'),
    updatedAt: new Date('2024-01-17')
  },
  {
    id: 4,
    name: "Estanque con Florecitas",
    description: "Diseño acuático con flores delicadas que evoca la serenidad de un estanque natural. Perfecto para crear un ambiente relajante y tranquilo. Las flores flotan suavemente como en un estanque real, creando una sensación de paz y tranquilidad.",
    price: 35.99,
    images: [
      "/assets/images/Estanque_con_florecitas1.jpg"
    ],
    tags: ["acuático", "serenidad", "natural", "relajante", "tranquilo", "delicado"],
    category: "acuático",
    featured: true,
    stock: 6,
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18')
  }
]

// Categorías disponibles
export const CATEGORIES = [
  { id: 'flores', name: 'Flores', icon: '🌸' },
  { id: 'acuático', name: 'Acuático', icon: '🌊' },
  { id: 'especial', name: 'Especial', icon: '✨' }
]

// Tags populares
export const POPULAR_TAGS = [
  'flores', 'amarillo', 'alegría', 'mágico', 'especial', 
  'multicolor', 'único', 'acuático', 'serenidad', 'natural', 
  'relajante', 'vibrante', 'fantasía', 'arte', 'armonía'
]

// Configuración de filtros
export const FILTER_OPTIONS = {
  sortBy: [
    { value: 'name', label: 'Nombre (A-Z)' },
    { value: 'price-low', label: 'Precio (menor a mayor)' },
    { value: 'price-high', label: 'Precio (mayor a menor)' }
  ],
  categories: CATEGORIES,
  tags: POPULAR_TAGS
}

// Configuración de precios
export const PRICE_RANGES = [
  { min: 0, max: 25, label: 'Menos de €25' },
  { min: 25, max: 35, label: '€25 - €35' },
  { min: 35, max: 50, label: '€35 - €50' },
  { min: 50, max: Infinity, label: 'Más de €50' }
]

export default {
  INITIAL_PRODUCTS,
  CATEGORIES,
  POPULAR_TAGS,
  FILTER_OPTIONS,
  PRICE_RANGES
}
