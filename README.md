# 🌸 Pipaflores - Tienda de Arreglos Florales

Una tienda web moderna y elegante para arreglos florales únicos hechos a mano con amor y creatividad.

## ✨ Características

- **Diseño Responsive**: Optimizado para móvil, tablet y escritorio
- **Paleta de Colores Pastel**: Rosa suave, lila claro, beige y amarillo pastel
- **Carrito de Compras**: Sistema de carrito funcional (pago pendiente de implementar)
- **Panel de Administración**: Gestión completa de productos y contenido
- **Catálogo Dinámico**: Productos con filtros y búsqueda
- **Historia Personal**: Página "Sobre Nosotros" con la historia de superación

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd pipaflores
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
pipaflores/
├── assets/
│   ├── images/          # Imágenes de productos
│   └── icon/           # Iconos y favicon
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── pages/         # Páginas principales
│   ├── context/       # Contexto del carrito
│   └── App.jsx        # Componente principal
├── public/            # Archivos públicos
└── package.json       # Dependencias del proyecto
```

## 🎨 Páginas Principales

### 🏠 Home / Inicio
- Banner principal con mensaje inspirador
- Grid de productos destacados
- Sección de valores y características
- CTAs claros para navegación

### 🛍️ Productos / Catálogo
- Listado dinámico de productos
- Sistema de filtros por categorías
- Búsqueda por nombre, descripción y tags
- Ordenamiento por precio y nombre
- Botones "Añadir al carrito"

### 💝 Sobre Nosotros
- Historia personal de superación
- Valores de la empresa
- Mensaje inspirador sobre terapia creativa

### 🛒 Carrito de Compras
- Vista de productos añadidos
- Control de cantidades
- Cálculo de totales
- Botón "Finalizar compra" (pendiente de implementar)

### ⚙️ Panel de Administración
- **Acceso**: `/admin` (contraseña: `pipaflores2024`)
- Gestión de productos (añadir, editar, eliminar)
- Edición de contenido de páginas
- Control de productos destacados

## 🎯 Productos Iniciales

1. **Flores Amarillas** - €25.99
2. **Flores Muza Winx** - €32.99
3. **Flores Heterocromático** - €28.99
4. **Estanque con Florecitas** - €35.99

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **Vite** - Herramienta de construcción
- **React Router** - Navegación entre páginas
- **Lucide React** - Iconos modernos
- **CSS3** - Estilos personalizados con variables CSS

## 🎨 Paleta de Colores

```css
--rosa-suave: #F8D7E5
--lila-claro: #D7C7F8
--beige: #FDF6E3
--amarillo-pastel: #FFF3B0
--rosa-intenso: #E91E63
--amarillo-fuerte: #FFC107
```

## 📱 Responsive Design

- **Móvil**: < 768px - Layout de una columna
- **Tablet**: 768px - 1024px - Layout adaptativo
- **Escritorio**: > 1024px - Layout completo

## 🔮 Próximas Funcionalidades

- [ ] Integración de pasarela de pago (Stripe/PayPal)
- [ ] Sistema de gestión de pedidos
- [ ] Galería de inspiración con videos
- [ ] SEO optimizado para búsquedas locales
- [ ] Sistema de testimonios
- [ ] Blog de consejos florales

## 🚀 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Vista previa de producción
npm run preview

# Linting
npm run lint
```

## 📞 Contacto

Para más información sobre el proyecto o colaboraciones, contacta con el equipo de Pipaflores.

---

**Hecho con 💝 por el equipo de Pipaflores**

*"De la adversidad nace la belleza, y de la belleza, la esperanza."*
