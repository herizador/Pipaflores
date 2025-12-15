# 📚 Documentación Técnica - Pipaflores

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas
```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx      # Navegación principal
│   └── Footer.jsx      # Pie de página
├── pages/              # Páginas principales
│   ├── Home.jsx        # Página de inicio
│   ├── Products.jsx    # Catálogo de productos
│   ├── About.jsx       # Sobre nosotros
│   ├── Cart.jsx        # Carrito de compras
│   └── Admin.jsx       # Panel de administración
├── context/            # Contexto de React
│   └── CartContext.jsx # Estado global del carrito
├── config/             # Configuración
│   ├── app.js          # Configuración de la app
│   └── environment.js  # Variables de entorno
├── data/               # Datos estáticos
│   ├── products.js     # Productos iniciales
│   └── content.js      # Contenido de páginas
├── utils/              # Utilidades
│   └── helpers.js      # Funciones auxiliares
├── styles/             # Estilos
│   └── animations.css  # Animaciones CSS
└── App.jsx             # Componente raíz
```

## 🎨 Sistema de Diseño

### Paleta de Colores
```css
:root {
  --rosa-suave: #F8D7E5;      /* Rosa suave para fondos */
  --lila-claro: #D7C7F8;      /* Lila claro para acentos */
  --beige: #FDF6E3;           /* Beige para fondo principal */
  --amarillo-pastel: #FFF3B0; /* Amarillo pastel para highlights */
  --rosa-intenso: #E91E63;    /* Rosa intenso para CTAs */
  --amarillo-fuerte: #FFC107; /* Amarillo fuerte para CTAs secundarios */
  --texto-oscuro: #333;       /* Texto principal */
  --texto-claro: #666;        /* Texto secundario */
}
```

### Tipografía
- **Fuente Principal**: Poppins (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700
- **Tamaños**: Responsive con clamp()

### Componentes Base
- **Botones**: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`
- **Cards**: `.card` con efectos hover
- **Grid**: `.grid`, `.grid-2`, `.grid-3`, `.grid-4`
- **Contenedores**: `.container` con max-width responsive

## 🔧 Funcionalidades Técnicas

### Estado Global (Context API)
```javascript
// CartContext proporciona:
- items: Array de productos en el carrito
- addToCart: Función para añadir productos
- removeFromCart: Función para eliminar productos
- updateQuantity: Función para actualizar cantidades
- getTotalItems: Función para obtener total de items
- getTotalPrice: Función para obtener precio total
```

### Sistema de Filtros
```javascript
// Filtros disponibles:
- Búsqueda por texto (nombre, descripción, tags)
- Filtro por categorías
- Ordenamiento (nombre, precio ascendente/descendente)
- Filtro por tags
```

### Panel de Administración
```javascript
// Funcionalidades:
- Autenticación simple (contraseña: pipaflores2024)
- CRUD de productos
- Edición de contenido de páginas
- Gestión de productos destacados
- Formularios con validación
```

## 📱 Responsive Design

### Breakpoints
```css
/* Móvil */
@media (max-width: 768px) {
  /* Layout de una columna */
  /* Navegación colapsable */
  /* Botones más grandes para touch */
}

/* Tablet */
@media (768px - 1024px) {
  /* Layout adaptativo */
  /* Grid de 2 columnas */
}

/* Escritorio */
@media (min-width: 1024px) {
  /* Layout completo */
  /* Grid de 3-4 columnas */
  /* Efectos hover completos */
}
```

### Estrategia Mobile-First
1. Diseño base para móvil
2. Progressive enhancement para tablet
3. Funcionalidades completas para escritorio

## 🎭 Sistema de Animaciones

### Animaciones CSS
```css
/* Animaciones disponibles: */
- float: Flotación suave para elementos decorativos
- pulse: Pulso para botones importantes
- slideUp/slideLeft/slideRight: Entradas de elementos
- fadeIn: Aparición suave
- zoomIn: Zoom de entrada
- heartbeat: Latido para elementos especiales
```

### Efectos Hover
```css
/* Efectos disponibles: */
- hover-lift: Elevación al hacer hover
- hover-scale: Escalado suave
- hover-rotate: Rotación ligera
- hover-glow: Brillo en botones
```

## 🔒 Seguridad

### Panel de Administración
- Autenticación por contraseña simple
- Sesión no persistente (se cierra al recargar)
- Validación de formularios en frontend
- Confirmación para acciones destructivas

### Validaciones
```javascript
// Validaciones implementadas:
- Email válido
- Precio positivo
- URL de imagen válida
- Campos requeridos
- Longitud de texto
```

## 🚀 Optimizaciones

### Performance
- Lazy loading de imágenes (futuro)
- Debounce en búsquedas
- Memoización de cálculos costosos
- CSS optimizado con variables
- Componentes funcionales con hooks

### SEO
- Meta tags dinámicos
- Estructura semántica HTML5
- Alt text en imágenes
- URLs amigables
- Sitemap (futuro)

## 🔮 Funcionalidades Futuras

### Integración de Pagos
```javascript
// Stripe Integration
const stripeConfig = {
  publicKey: process.env.VITE_STRIPE_PUBLIC_KEY,
  currency: 'EUR',
  country: 'ES'
}

// PayPal Integration
const paypalConfig = {
  clientId: process.env.VITE_PAYPAL_CLIENT_ID,
  currency: 'EUR'
}
```

### Base de Datos
```javascript
// Estructura de productos
const productSchema = {
  id: String,
  name: String,
  description: String,
  price: Number,
  images: [String],
  tags: [String],
  category: String,
  featured: Boolean,
  stock: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### API Endpoints (Futuro)
```javascript
// Endpoints planificados:
GET    /api/products          // Listar productos
POST   /api/products          // Crear producto
PUT    /api/products/:id      // Actualizar producto
DELETE /api/products/:id      // Eliminar producto
GET    /api/orders            // Listar pedidos
POST   /api/orders            // Crear pedido
POST   /api/payments          // Procesar pago
```

## 🛠️ Herramientas de Desarrollo

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construcción para producción
npm run preview      # Vista previa de producción
npm run lint         # Linting del código
```

### Dependencias Principales
```json
{
  "react": "^18.2.0",           // Framework principal
  "react-dom": "^18.2.0",       // DOM de React
  "react-router-dom": "^6.20.1", // Enrutamiento
  "lucide-react": "^0.294.0",   // Iconos
  "vite": "^5.0.0"              // Build tool
}
```

## 📊 Métricas y Analytics

### Eventos a Trackear (Futuro)
```javascript
// Eventos de usuario:
- product_view: Visualización de producto
- add_to_cart: Añadir al carrito
- remove_from_cart: Eliminar del carrito
- checkout_start: Inicio de checkout
- purchase_complete: Compra completada
- admin_login: Acceso al admin
- product_create: Creación de producto
```

## 🔧 Configuración de Entorno

### Variables de Entorno
```bash
# Desarrollo
VITE_APP_NAME=Pipaflores
VITE_API_URL=http://localhost:3001
VITE_ADMIN_PASSWORD=pipaflores2024

# Producción
VITE_STRIPE_PUBLIC_KEY=pk_live_...
VITE_PAYPAL_CLIENT_ID=live_...
VITE_GOOGLE_ANALYTICS_ID=GA_...
```

## 🐛 Debugging

### Herramientas de Debug
- React Developer Tools
- Vite DevTools
- Console logging en desarrollo
- Error boundaries (futuro)
- Performance monitoring (futuro)

### Logs Importantes
```javascript
// Logs a implementar:
- Product operations (CRUD)
- Cart operations
- User interactions
- Error tracking
- Performance metrics
```

---

**Documentación técnica actualizada para Pipaflores v1.0.0**
