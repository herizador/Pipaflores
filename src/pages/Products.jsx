import { useState, useEffect } from 'react'
import { Search, Filter, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import ProductImage from '../components/ProductImage'

const Products = () => {
  const { addToCart } = useCart()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [sortBy, setSortBy] = useState('name')

  // Productos iniciales (en el futuro se cargarán desde el admin)
  const initialProducts = [
    {
      id: 1,
      name: "Flores Amarillas",
      description: "Hermoso arreglo floral en tonos amarillos que irradia alegría y calidez. Perfecto para alegrar cualquier espacio con su color vibrante y su aroma delicado.",
      price: 25.99,
      images: ["/assets/images/Flores_Amarillas1.jpg"],
      tags: ["flores", "amarillo", "alegría", "vibrante"],
      category: "flores",
      featured: true
    },
    {
      id: 2,
      name: "Flores Muza Winx",
      description: "Arreglo mágico inspirado en las hadas, perfecto para ocasiones especiales. Combina colores fantásticos que evocan la magia y la fantasía.",
      price: 32.99,
      images: ["/assets/images/Flores_Muza_Winx1.jpg", "/assets/images/Flores_Muza_Winx2.jpg"],
      tags: ["flores", "mágico", "especial", "fantasía"],
      category: "flores",
      featured: true
    },
    {
      id: 3,
      name: "Flores Heterocromático",
      description: "Composición única con flores de diferentes colores creando un efecto visual espectacular. Una verdadera obra de arte floral.",
      price: 28.99,
      images: ["/assets/images/Flores_Heterocromático1.jpg"],
      tags: ["flores", "multicolor", "único", "arte"],
      category: "flores",
      featured: true
    },
    {
      id: 4,
      name: "Estanque con Florecitas",
      description: "Diseño acuático con flores delicadas que evoca la serenidad de un estanque natural. Perfecto para crear un ambiente relajante.",
      price: 35.99,
      images: ["/assets/images/Estanque_con_florecitas1.jpg"],
      tags: ["acuático", "serenidad", "natural", "relajante"],
      category: "acuático",
      featured: true
    }
  ]

  useEffect(() => {
    // Simular carga de productos (en el futuro vendrá del admin)
    setProducts(initialProducts)
    setFilteredProducts(initialProducts)
  }, [])

  useEffect(() => {
    let filtered = products

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filtrar por tag
    if (selectedTag) {
      filtered = filtered.filter(product =>
        product.tags.includes(selectedTag)
      )
    }

    // Ordenar
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredProducts(filtered)
  }, [products, searchTerm, selectedTag, sortBy])

  // Obtener todos los tags únicos
  const allTags = [...new Set(products.flatMap(product => product.tags))]

  return (
    <div style={{
      padding: '2rem 0',
      background: 'var(--beige)',
      minHeight: '80vh'
    }}>
      <div className="container">
        {/* Header de la página */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: '700',
            color: 'var(--texto-oscuro)',
            marginBottom: '1rem'
          }}>
            Nuestro Catálogo
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--texto-claro)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Descubre nuestra colección completa de arreglos florales únicos, 
            cada uno creado con amor y dedicación.
          </p>
        </div>

        {/* Filtros y búsqueda */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            alignItems: 'end'
          }}>
            {/* Búsqueda */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: 'var(--texto-oscuro)'
              }}>
                Buscar productos
              </label>
              <div style={{
                position: 'relative'
              }}>
                <Search size={20} style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--texto-claro)'
                }} />
                <input
                  type="text"
                  placeholder="Buscar por nombre, descripción o tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 12px 12px 45px',
                    border: '2px solid var(--rosa-suave)',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>
            </div>

            {/* Filtro por tags */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: 'var(--texto-oscuro)'
              }}>
                Filtrar por categoría
              </label>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid var(--rosa-suave)',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontFamily: 'Poppins, sans-serif',
                  outline: 'none',
                  background: 'white'
                }}
              >
                <option value="">Todas las categorías</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Ordenar */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: 'var(--texto-oscuro)'
              }}>
                Ordenar por
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid var(--rosa-suave)',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontFamily: 'Poppins, sans-serif',
                  outline: 'none',
                  background: 'white'
                }}
              >
                <option value="name">Nombre (A-Z)</option>
                <option value="price-low">Precio (menor a mayor)</option>
                <option value="price-high">Precio (mayor a menor)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div style={{
          marginBottom: '2rem'
        }}>
          <p style={{
            color: 'var(--texto-claro)',
            fontSize: '1rem'
          }}>
            Mostrando {filteredProducts.length} de {products.length} productos
          </p>
        </div>

        {/* Grid de productos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card" style={{
                textAlign: 'center',
                border: 'none',
                background: 'white',
                position: 'relative'
              }}>
                {product.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'var(--amarillo-fuerte)',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    zIndex: 10
                  }}>
                    Destacado
                  </div>
                )}

                <div style={{ position: 'relative' }}>
                  <ProductImage
                    src={product.images[0]}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '250px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                      marginBottom: '1rem'
                    }}
                    fallback="🌸"
                  />
                  {product.images.length > 1 && (
                    <div style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '10px',
                      background: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '8px',
                      fontSize: '0.8rem'
                    }}>
                      +{product.images.length - 1} más
                    </div>
                  )}
                </div>

                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: 'var(--texto-oscuro)',
                  marginBottom: '0.5rem'
                }}>
                  {product.name}
                </h3>

                <p style={{
                  color: 'var(--texto-claro)',
                  fontSize: '0.9rem',
                  marginBottom: '1rem',
                  lineHeight: '1.5',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {product.description}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}>
                  {product.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} style={{
                      background: 'var(--amarillo-pastel)',
                      color: 'var(--texto-oscuro)',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {tag}
                    </span>
                  ))}
                  {product.tags.length > 3 && (
                    <span style={{
                      background: 'var(--lila-claro)',
                      color: 'var(--texto-oscuro)',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      +{product.tags.length - 3}
                    </span>
                  )}
                </div>

                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: 'var(--rosa-intenso)',
                  marginBottom: '1rem'
                }}>
                  €{product.price}
                </div>

                <button 
                  onClick={() => addToCart(product)}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <ShoppingCart size={16} />
                  Añadir al carrito
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'white',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '1rem'
            }}>
              🔍
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--texto-oscuro)',
              marginBottom: '0.5rem'
            }}>
              No se encontraron productos
            </h3>
            <p style={{
              color: 'var(--texto-claro)',
              marginBottom: '2rem'
            }}>
              Intenta ajustar los filtros o términos de búsqueda
            </p>
            <button 
              onClick={() => {
                setSearchTerm('')
                setSelectedTag('')
                setSortBy('name')
              }}
              className="btn btn-outline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
