// Contenido estático de las páginas para Pipaflores

export const HOME_CONTENT = {
  banner: {
    title: "Regalos únicos hechos a mano con amor y creatividad",
    subtitle: "Cada flor, cada detalle, está hecho con cuidado y cariño, reflejando nuestra pasión por crear belleza en lo pequeño.",
    cta: "Ver catálogo"
  },
  featured: {
    title: "Productos Destacados",
    subtitle: "Descubre nuestra selección de arreglos florales únicos, cada uno creado con amor y dedicación."
  },
  values: {
    title: "¿Por qué elegir Pipaflores?",
    items: [
      {
        icon: "🌸",
        title: "Hecho a mano",
        description: "Cada arreglo es único y creado con dedicación artesanal."
      },
      {
        icon: "💝",
        title: "Con amor",
        description: "Cada detalle está pensado para transmitir cariño y cuidado."
      },
      {
        icon: "✨",
        title: "Único",
        description: "No encontrarás dos arreglos iguales, cada uno es especial."
      }
    ]
  }
}

export const ABOUT_CONTENT = {
  title: "Sobre Nosotros",
  subtitle: "Conoce la historia detrás de Pipaflores y la pasión que nos impulsa a crear belleza.",
  story: {
    title: "Nuestra Historia",
    content: [
      "Pasamos por momentos muy difíciles en nuestra vida personal, y la creación de estos arreglos fue nuestra terapia, nuestra manera de seguir adelante. Cada flor, cada detalle, está hecho con cuidado y cariño, reflejando nuestra pasión por crear belleza en lo pequeño.",
      "En los momentos más oscuros, encontramos luz a través de la creatividad. Cada pétalo que colocamos, cada color que elegimos, se convirtió en un acto de sanación y esperanza. Lo que comenzó como una forma de sobrellevar el dolor, se transformó en nuestra mayor fortaleza.",
      "Queremos compartirlo contigo. Cada arreglo que creamos lleva consigo una parte de nuestra historia, de nuestra lucha y de nuestra victoria. No son solo flores, son símbolos de que siempre se puede encontrar belleza, incluso en los momentos más difíciles."
    ],
    quote: "De la adversidad nace la belleza, y de la belleza, la esperanza."
  },
  values: [
    {
      icon: "💝",
      title: "Hecho con Amor",
      description: "Cada arreglo es creado con dedicación y cariño, transmitiendo emociones positivas a través de la belleza natural."
    },
    {
      icon: "🌸",
      title: "Terapia Creativa",
      description: "La creación floral se convirtió en nuestra forma de sanar, de encontrar paz y de transformar el dolor en belleza."
    },
    {
      icon: "✨",
      title: "Único y Especial",
      description: "Cada pieza es única, reflejando la individualidad y la historia personal que llevamos en cada creación."
    }
  ],
  conclusion: {
    title: "Gracias por ser parte de nuestra historia",
    content: "Al elegir Pipaflores, no solo estás adquiriendo un hermoso arreglo floral, sino que estás apoyando una historia de superación, creatividad y esperanza. Cada compra nos ayuda a seguir adelante y a compartir nuestra pasión con el mundo.",
    signature: "Con amor, el equipo de Pipaflores"
  }
}

export const PRODUCTS_CONTENT = {
  title: "Nuestro Catálogo",
  subtitle: "Descubre nuestra colección completa de arreglos florales únicos, cada uno creado con amor y dedicación.",
  filters: {
    search: "Buscar productos",
    category: "Filtrar por categoría",
    sort: "Ordenar por",
    results: "Mostrando {count} de {total} productos"
  },
  empty: {
    title: "No se encontraron productos",
    message: "¡Explora nuestros hermosos arreglos florales y encuentra el perfecto para ti!",
    action: "Ver productos"
  }
}

export const CART_CONTENT = {
  title: "Mi Carrito",
  empty: {
    title: "Tu carrito está vacío",
    message: "¡Explora nuestros hermosos arreglos florales y encuentra el perfecto para ti!",
    action: "Ver productos"
  },
  summary: {
    title: "Resumen del pedido",
    total: "Total:",
    checkout: "Finalizar compra",
    note: "* El sistema de pagos estará disponible próximamente. Por ahora, contacta con nosotros para completar tu pedido."
  },
  actions: {
    continue: "Continuar comprando",
    clear: "Vaciar carrito"
  }
}

export const ADMIN_CONTENT = {
  title: "Panel de Administración",
  login: {
    title: "Panel de Administración",
    subtitle: "Ingresa la contraseña para acceder",
    password: "Contraseña",
    button: "Acceder",
    demo: "* Contraseña de demo: pipaflores2024"
  },
  tabs: {
    products: "Productos",
    home: "Página de Inicio",
    about: "Sobre Nosotros"
  },
  products: {
    title: "Gestión de Productos",
    add: "Añadir Producto",
    edit: "Editar Producto",
    delete: "Eliminar",
    featured: "Destacado",
    confirmDelete: "¿Estás seguro de que quieres eliminar este producto?"
  },
  forms: {
    product: {
      name: "Nombre del producto",
      description: "Descripción",
      price: "Precio (€)",
      image: "URL de imagen",
      tags: "Tags (separados por comas)",
      category: "Categoría",
      featured: "Producto destacado"
    },
    home: {
      title: "Editar Página de Inicio",
      bannerText: "Texto principal del banner",
      bannerSubtext: "Texto secundario del banner"
    },
    about: {
      title: "Editar Página \"Sobre Nosotros\"",
      sectionTitle: "Título de la sección",
      content: "Contenido de la historia"
    }
  },
  actions: {
    save: "Guardar cambios",
    cancel: "Cancelar",
    create: "Crear",
    update: "Actualizar",
    logout: "Cerrar sesión"
  }
}

export const FOOTER_CONTENT = {
  description: "Regalos únicos hechos a mano con amor y creatividad. Cada flor, cada detalle, está hecho con cuidado y cariño.",
  links: {
    title: "Enlaces Rápidos",
    items: [
      { name: "Inicio", path: "/" },
      { name: "Productos", path: "/productos" },
      { name: "Sobre Nosotros", path: "/sobre-nosotros" },
      { name: "Carrito", path: "/carrito" }
    ]
  },
  social: {
    title: "Síguenos",
    platforms: [
      { name: "Instagram", icon: "📷", url: "#" },
      { name: "TikTok", icon: "🎵", url: "#" }
    ]
  },
  copyright: "Hecho con 💝 por Pipaflores • © 2024 Todos los derechos reservados"
}

export const NAVIGATION_CONTENT = {
  logo: "🌸 Pipaflores",
  menu: [
    { name: "Inicio", path: "/" },
    { name: "Productos", path: "/productos" },
    { name: "Sobre Nosotros", path: "/sobre-nosotros" }
  ]
}

export default {
  HOME_CONTENT,
  ABOUT_CONTENT,
  PRODUCTS_CONTENT,
  CART_CONTENT,
  ADMIN_CONTENT,
  FOOTER_CONTENT,
  NAVIGATION_CONTENT
}
