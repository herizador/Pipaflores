import { useState, useEffect } from 'react'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Eye, 
  EyeOff,
  Package,
  Settings,
  FileText,
  Image
} from 'lucide-react'

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState('products')
  const [products, setProducts] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)
  const [showProductForm, setShowProductForm] = useState(false)
  const [homeContent, setHomeContent] = useState({
    bannerText: "Regalos únicos hechos a mano con amor y creatividad",
    bannerSubtext: "Cada flor, cada detalle, está hecho con cuidado y cariño, reflejando nuestra pasión por crear belleza en lo pequeño."
  })
  const [aboutContent, setAboutContent] = useState({
    title: "Nuestra Historia",
    content: "Pasamos por momentos muy difíciles en nuestra vida personal, y la creación de estos arreglos fue nuestra terapia, nuestra manera de seguir adelante. Cada flor, cada detalle, está hecho con cuidado y cariño, reflejando nuestra pasión por crear belleza en lo pequeño. Queremos compartirlo contigo."
  })

  // Productos iniciales
  const initialProducts = [
    {
      id: 1,
      name: "Flores Amarillas",
      description: "Hermoso arreglo floral en tonos amarillos que irradia alegría y calidez.",
      price: 25.99,
      images: ["/assets/images/Flores_Amarillas1.jpg"],
      tags: ["flores", "amarillo", "alegría"],
      category: "flores",
      featured: true
    },
    {
      id: 2,
      name: "Flores Muza Winx",
      description: "Arreglo mágico inspirado en las hadas, perfecto para ocasiones especiales.",
      price: 32.99,
      images: ["/assets/images/Flores_Muza_Winx1.jpg", "/assets/images/Flores_Muza_Winx2.jpg"],
      tags: ["flores", "mágico", "especial"],
      category: "flores",
      featured: true
    },
    {
      id: 3,
      name: "Flores Heterocromático",
      description: "Composición única con flores de diferentes colores creando un efecto visual espectacular.",
      price: 28.99,
      images: ["/assets/images/Flores_Heterocromático1.jpg"],
      tags: ["flores", "multicolor", "único"],
      category: "flores",
      featured: true
    },
    {
      id: 4,
      name: "Estanque con Florecitas",
      description: "Diseño acuático con flores delicadas que evoca la serenidad de un estanque natural.",
      price: 35.99,
      images: ["/assets/images/Estanque_con_florecitas1.jpg"],
      tags: ["acuático", "serenidad", "natural"],
      category: "acuático",
      featured: true
    }
  ]

  useEffect(() => {
    setProducts(initialProducts)
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    // Contraseña simple para demo (en producción usar autenticación real)
    if (password === 'pipaflores2024') {
      setIsAuthenticated(true)
      setPassword('')
    } else {
      alert('Contraseña incorrecta')
    }
  }

  const handleProductSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newProduct = {
      id: editingProduct ? editingProduct.id : Date.now(),
      name: formData.get('name'),
      description: formData.get('description'),
      price: parseFloat(formData.get('price')),
      images: [formData.get('image')],
      tags: formData.get('tags').split(',').map(tag => tag.trim()),
      category: formData.get('category'),
      featured: formData.get('featured') === 'on'
    }

    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? newProduct : p))
    } else {
      setProducts([...products, newProduct])
    }

    setShowProductForm(false)
    setEditingProduct(null)
    e.target.reset()
  }

  const handleEditProduct = (product) => {
    setEditingProduct(product)
    setShowProductForm(true)
  }

  const handleDeleteProduct = (productId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      setProducts(products.filter(p => p.id !== productId))
    }
  }

  const handleHomeContentSave = () => {
    // Aquí se guardaría en una base de datos real
    alert('Contenido de la página de inicio guardado correctamente')
  }

  const handleAboutContentSave = () => {
    // Aquí se guardaría en una base de datos real
    alert('Contenido de la página "Sobre Nosotros" guardado correctamente')
  }

  if (!isAuthenticated) {
    return (
      <div style={{
        padding: '4rem 0',
        background: 'var(--beige)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          background: 'white',
          padding: '3rem',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          maxWidth: '400px',
          width: '100%'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>
              🔐
            </div>
            <h1 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              color: 'var(--texto-oscuro)',
              marginBottom: '0.5rem'
            }}>
              Panel de Administración
            </h1>
            <p style={{
              color: 'var(--texto-claro)',
              fontSize: '0.9rem'
            }}>
              Ingresa la contraseña para acceder
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div style={{
              marginBottom: '1.5rem'
            }}>
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid var(--rosa-suave)',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontFamily: 'Poppins, sans-serif',
                  outline: 'none',
                  textAlign: 'center'
                }}
                required
              />
            </div>
            <button 
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                fontSize: '1rem',
                padding: '12px'
              }}
            >
              Acceder
            </button>
          </form>

          <p style={{
            fontSize: '0.8rem',
            color: 'var(--texto-claro)',
            textAlign: 'center',
            marginTop: '1rem'
          }}>
            * Contraseña de demo: pipaflores2024
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      padding: '2rem 0',
      background: 'var(--beige)',
      minHeight: '100vh'
    }}>
      <div className="container">
        {/* Header del admin */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
          background: 'white',
          padding: '1.5rem 2rem',
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: 'var(--texto-oscuro)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Settings size={24} />
            Panel de Administración
          </h1>
          <button 
            onClick={() => setIsAuthenticated(false)}
            style={{
              background: 'transparent',
              border: '2px solid var(--rosa-intenso)',
              color: 'var(--rosa-intenso)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Cerrar sesión
          </button>
        </div>

        {/* Tabs de navegación */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          background: 'white',
          padding: '1rem',
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <button
            onClick={() => setActiveTab('products')}
            style={{
              padding: '12px 24px',
              border: 'none',
              borderRadius: '25px',
              background: activeTab === 'products' ? 'var(--rosa-intenso)' : 'transparent',
              color: activeTab === 'products' ? 'white' : 'var(--texto-oscuro)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
          >
            <Package size={18} />
            Productos
          </button>
          <button
            onClick={() => setActiveTab('home')}
            style={{
              padding: '12px 24px',
              border: 'none',
              borderRadius: '25px',
              background: activeTab === 'home' ? 'var(--rosa-intenso)' : 'transparent',
              color: activeTab === 'home' ? 'white' : 'var(--texto-oscuro)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
          >
            <FileText size={18} />
            Página de Inicio
          </button>
          <button
            onClick={() => setActiveTab('about')}
            style={{
              padding: '12px 24px',
              border: 'none',
              borderRadius: '25px',
              background: activeTab === 'about' ? 'var(--rosa-intenso)' : 'transparent',
              color: activeTab === 'about' ? 'white' : 'var(--texto-oscuro)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
          >
            <FileText size={18} />
            Sobre Nosotros
          </button>
        </div>

        {/* Contenido de las tabs */}
        {activeTab === 'products' && (
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                color: 'var(--texto-oscuro)'
              }}>
                Gestión de Productos
              </h2>
              <button
                onClick={() => {
                  setEditingProduct(null)
                  setShowProductForm(true)
                }}
                className="btn btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Plus size={18} />
                Añadir Producto
              </button>
            </div>

            {/* Lista de productos */}
            <div style={{
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}>
              {products.map((product) => (
                <div key={product.id} style={{
                  padding: '1.5rem',
                  borderBottom: '1px solid #f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '8px',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '8px',
                    background: 'var(--rosa-suave)',
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>
                    🌸
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: 'var(--texto-oscuro)',
                      marginBottom: '0.25rem'
                    }}>
                      {product.name}
                    </h3>
                    <p style={{
                      color: 'var(--texto-claro)',
                      fontSize: '0.9rem',
                      marginBottom: '0.25rem'
                    }}>
                      {product.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '0.5rem',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        background: 'var(--amarillo-pastel)',
                        color: 'var(--texto-oscuro)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}>
                        €{product.price}
                      </span>
                      {product.featured && (
                        <span style={{
                          background: 'var(--rosa-intenso)',
                          color: 'white',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}>
                          Destacado
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem'
                  }}>
                    <button
                      onClick={() => handleEditProduct(product)}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: 'none',
                        background: 'var(--amarillo-pastel)',
                        color: 'var(--texto-oscuro)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: 'none',
                        background: '#ffebee',
                        color: 'var(--rosa-intenso)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'home' && (
          <div>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              color: 'var(--texto-oscuro)',
              marginBottom: '2rem'
            }}>
              Editar Página de Inicio
            </h2>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--texto-oscuro)'
                }}>
                  Texto principal del banner
                </label>
                <input
                  type="text"
                  value={homeContent.bannerText}
                  onChange={(e) => setHomeContent({...homeContent, bannerText: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid var(--rosa-suave)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--texto-oscuro)'
                }}>
                  Texto secundario del banner
                </label>
                <textarea
                  value={homeContent.bannerSubtext}
                  onChange={(e) => setHomeContent({...homeContent, bannerSubtext: e.target.value})}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid var(--rosa-suave)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button
                onClick={handleHomeContentSave}
                className="btn btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Save size={18} />
                Guardar cambios
              </button>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              color: 'var(--texto-oscuro)',
              marginBottom: '2rem'
            }}>
              Editar Página "Sobre Nosotros"
            </h2>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--texto-oscuro)'
                }}>
                  Título de la sección
                </label>
                <input
                  type="text"
                  value={aboutContent.title}
                  onChange={(e) => setAboutContent({...aboutContent, title: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid var(--rosa-suave)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--texto-oscuro)'
                }}>
                  Contenido de la historia
                </label>
                <textarea
                  value={aboutContent.content}
                  onChange={(e) => setAboutContent({...aboutContent, content: e.target.value})}
                  rows={8}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid var(--rosa-suave)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button
                onClick={handleAboutContentSave}
                className="btn btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Save size={18} />
                Guardar cambios
              </button>
            </div>
          </div>
        )}

        {/* Modal para formulario de producto */}
        {showProductForm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              maxWidth: '500px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--texto-oscuro)'
                }}>
                  {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
                </h3>
                <button
                  onClick={() => {
                    setShowProductForm(false)
                    setEditingProduct(null)
                  }}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    border: 'none',
                    background: '#ffebee',
                    color: 'var(--rosa-intenso)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleProductSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--texto-oscuro)'
                  }}>
                    Nombre del producto
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingProduct?.name || ''}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid var(--rosa-suave)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'Poppins, sans-serif',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--texto-oscuro)'
                  }}>
                    Descripción
                  </label>
                  <textarea
                    name="description"
                    defaultValue={editingProduct?.description || ''}
                    required
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid var(--rosa-suave)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'Poppins, sans-serif',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--texto-oscuro)'
                  }}>
                    Precio (€)
                  </label>
                  <input
                    type="number"
                    name="price"
                    step="0.01"
                    min="0"
                    defaultValue={editingProduct?.price || ''}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid var(--rosa-suave)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'Poppins, sans-serif',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--texto-oscuro)'
                  }}>
                    Imagen del producto
                  </label>
                  <select
                    name="image"
                    defaultValue={editingProduct?.images?.[0] || ''}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid var(--rosa-suave)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'Poppins, sans-serif',
                      outline: 'none',
                      background: 'white'
                    }}
                  >
                    <option value="">Seleccionar imagen...</option>
                    <option value="/assets/images/Flores_Amarillas1.jpg">Flores Amarillas</option>
                    <option value="/assets/images/Flores_Muza_Winx1.jpg">Flores Muza Winx 1</option>
                    <option value="/assets/images/Flores_Muza_Winx2.jpg">Flores Muza Winx 2</option>
                    <option value="/assets/images/Flores_Heterocromático1.jpg">Flores Heterocromático</option>
                    <option value="/assets/images/Estanque_con_florecitas1.jpg">Estanque con Florecitas</option>
                  </select>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--texto-claro)',
                    marginTop: '0.5rem'
                  }}>
                    * Las imágenes están en la carpeta /assets/images/
                  </p>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--texto-oscuro)'
                  }}>
                    Tags (separados por comas)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    defaultValue={editingProduct?.tags?.join(', ') || ''}
                    placeholder="flores, amarillo, alegría"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid var(--rosa-suave)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'Poppins, sans-serif',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--texto-oscuro)'
                  }}>
                    Categoría
                  </label>
                  <select
                    name="category"
                    defaultValue={editingProduct?.category || 'flores'}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid var(--rosa-suave)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'Poppins, sans-serif',
                      outline: 'none',
                      background: 'white'
                    }}
                  >
                    <option value="flores">Flores</option>
                    <option value="acuático">Acuático</option>
                    <option value="especial">Especial</option>
                  </select>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--texto-oscuro)'
                  }}>
                    <input
                      type="checkbox"
                      name="featured"
                      defaultChecked={editingProduct?.featured || false}
                      style={{
                        width: '18px',
                        height: '18px'
                      }}
                    />
                    Producto destacado
                  </label>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'flex-end'
                }}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowProductForm(false)
                      setEditingProduct(null)
                    }}
                    style={{
                      padding: '12px 24px',
                      border: '2px solid var(--texto-claro)',
                      borderRadius: '25px',
                      background: 'transparent',
                      color: 'var(--texto-claro)',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <Save size={18} />
                    {editingProduct ? 'Actualizar' : 'Crear'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin
