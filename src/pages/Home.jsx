import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'
import ProductImage from '../components/ProductImage'
import { useEffect } from 'react'

const Home = () => {
  const { addToCart } = useCart()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, { threshold: 0.1 })

    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach(el => observer.observe(el))

    return () => elements.forEach(el => observer.unobserve(el))
  }, [])

  // Productos destacados iniciales
  const featuredProducts = [
    {
      id: 1,
      name: "Flores Amarillas",
      description: "Hermoso arreglo floral en tonos amarillos que irradia alegría y calidez.",
      price: 25.99,
      image: "/assets/images/Flores_Amarillas1.jpg",
      tags: ["flores", "amarillo", "alegría"]
    },
    {
      id: 2,
      name: "Flores Muza Winx",
      description: "Arreglo mágico inspirado en las hadas, perfecto para ocasiones especiales.",
      price: 32.99,
      image: "/assets/images/Flores_Muza_Winx1.jpg",
      tags: ["flores", "mágico", "especial"]
    },
    {
      id: 3,
      name: "Flores Heterocromático",
      description: "Composición única con flores de diferentes colores creando un efecto visual espectacular.",
      price: 28.99,
      image: "/assets/images/Flores_Heterocromático1.jpg",
      tags: ["flores", "multicolor", "único"]
    },
    {
      id: 4,
      name: "Estanque con Florecitas",
      description: "Diseño acuático con flores delicadas que evoca la serenidad de un estanque natural.",
      price: 35.99,
      image: "/assets/images/Estanque_con_florecitas1.jpg",
      tags: ["acuático", "serenidad", "natural"]
    }
  ]

  return (
    <div>
      {/* Banner Principal */}
      <section style={{
        background: 'linear-gradient(135deg, var(--rosa-suave) 0%, var(--lila-claro) 50%, var(--amarillo-pastel) 100%)',
        padding: '4rem 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: 'var(--texto-oscuro)',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Regalos únicos hechos a mano con amor y creatividad
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--texto-claro)',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Cada flor, cada detalle, está hecho con cuidado y cariño,
              reflejando nuestra pasión por crear belleza en lo pequeño.
            </p>
            <Link to="/productos" className="btn btn-primary" style={{
              fontSize: '1.1rem',
              padding: '15px 30px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Ver catálogo
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="animate-float" style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          fontSize: '2rem',
          opacity: 0.3
        }}>
          🌸
        </div>
        <div className="animate-float-delay-1" style={{
          position: 'absolute',
          top: '30%',
          right: '15%',
          fontSize: '1.5rem',
          opacity: 0.3
        }}>
          🌺
        </div>
        <div className="animate-float-delay-2" style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          fontSize: '1.8rem',
          opacity: 0.3
        }}>
          🌻
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="scroll-reveal" style={{
        padding: '4rem 0',
        background: 'rgba(255, 255, 255, 0.5)', /* Fondo semi-transparente para ver partículas */
        backdropFilter: 'blur(5px)'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              color: 'var(--texto-oscuro)',
              marginBottom: '1rem'
            }}>
              Productos Destacados
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--texto-claro)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Descubre nuestra selección de arreglos florales únicos,
              cada uno creado con amor y dedicación.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '2rem' }}>
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="card card-hover" style={{
                textAlign: 'center',
                border: 'none',
                background: 'white',
                animationDelay: `${index * 0.1}s` /* Stagger effect */
              }}>
                <ProductImage
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '250px',
                    borderRadius: '15px',
                    objectFit: 'cover',
                    marginBottom: '1rem',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                  }}
                  fallback="🌸"
                />
                <h3 style={{
                  fontSize: '1.3rem',
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
                  minHeight: '3em'
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
                  {product.tags.map((tag, idx) => (
                    <span key={idx} style={{
                      background: 'var(--amarillo-pastel)',
                      color: 'var(--texto-oscuro)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  color: 'var(--rosa-intenso)',
                  marginBottom: '1.2rem'
                }}>
                  €{product.price}
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    fontSize: '0.95rem'
                  }}
                >
                  <span style={{ marginRight: '5px' }}>🛒</span> Añadir cesto
                </button>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '4rem'
          }}>
            <Link to="/productos" className="btn btn-primary btn-glow" style={{
              fontSize: '1.2rem',
              padding: '16px 40px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: 'var(--sombras-fuerte)'
            }}>
              Ver todos los productos
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de valores */}
      <section className="scroll-reveal" style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, var(--lila-claro), var(--rosa-suave))',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Círculo decorativo */}
        <div style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div className="container">
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '2.8rem',
              fontWeight: '700',
              color: 'var(--texto-oscuro)',
              marginBottom: '3rem'
            }}>
              ¿Por qué elegir Pipaflores?
            </h2>
            <div className="grid grid-3" style={{
              marginTop: '3rem',
              gap: '2.5rem'
            }}>
              {[
                { icon: "🌸", title: "Hecho a mano", text: "Cada arreglo es único y creado con dedicación artesanal." },
                { icon: "💝", title: "Con amor", text: "Cada detalle está pensado para transmitir cariño y cuidado." },
                { icon: "✨", title: "Único", text: "No encontrarás dos arreglos iguales, cada uno es especial." }
              ].map((item, index) => (
                <div key={index} className="card card-hover" style={{
                  textAlign: 'center',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)',
                  transitionDelay: `${index * 0.2}s`
                }}>
                  <div className="animate-bounce" style={{
                    fontSize: '3.5rem',
                    marginBottom: '1.5rem',
                    display: 'inline-block'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--texto-oscuro)',
                    marginBottom: '0.8rem'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: 'var(--texto-claro)',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div >
  )
}

export default Home
