import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag, CreditCard, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart()

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  const handleCheckout = () => {
    // Por ahora solo muestra un mensaje
    alert('¡Próximamente! Estamos trabajando en la integración del sistema de pagos. Gracias por tu paciencia.')
  }

  if (items.length === 0) {
    return (
      <div style={{
        padding: '4rem 0',
        background: 'var(--beige)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            background: 'white',
            padding: '4rem 2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: '5rem',
              marginBottom: '2rem'
            }}>
              🛒
            </div>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: 'var(--texto-oscuro)',
              marginBottom: '1rem'
            }}>
              Tu carrito está vacío
            </h1>
            <p style={{
              color: 'var(--texto-claro)',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              ¡Explora nuestros hermosos arreglos florales y encuentra el perfecto para ti!
            </p>
            <Link to="/productos" className="btn btn-primary" style={{
              fontSize: '1.1rem',
              padding: '15px 30px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <ShoppingBag size={20} />
              Ver productos
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      padding: '2rem 0',
      background: 'var(--beige)',
      minHeight: '80vh'
    }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <Link to="/productos" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--texto-claro)',
              textDecoration: 'none',
              fontSize: '1rem'
            }}>
              <ArrowLeft size={20} />
              Continuar comprando
            </Link>
          </div>
          
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--texto-oscuro)'
          }}>
            Mi Carrito
          </h1>
          
          <button 
            onClick={clearCart}
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
            Vaciar carrito
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Lista de productos */}
          <div>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}>
              {items.map((item) => (
                <div key={item.id} style={{
                  padding: '2rem',
                  borderBottom: '1px solid #f0f0f0',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'center'
                }}>
                  {/* Imagen del producto */}
                  <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '10px',
                    background: 'var(--rosa-suave)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    flexShrink: 0
                  }}>
                    🌸
                  </div>

                  {/* Información del producto */}
                  <div style={{
                    flex: 1
                  }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: 'var(--texto-oscuro)',
                      marginBottom: '0.5rem'
                    }}>
                      {item.name}
                    </h3>
                    <p style={{
                      color: 'var(--texto-claro)',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem'
                    }}>
                      {item.description}
                    </p>
                    <div style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: 'var(--rosa-intenso)'
                    }}>
                      €{item.price}
                    </div>
                  </div>

                  {/* Controles de cantidad */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'var(--beige)',
                      borderRadius: '25px',
                      padding: '0.5rem'
                    }}>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          border: 'none',
                          background: 'var(--rosa-intenso)',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Minus size={16} />
                      </button>
                      
                      <span style={{
                        minWidth: '30px',
                        textAlign: 'center',
                        fontWeight: '600',
                        color: 'var(--texto-oscuro)'
                      }}>
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          border: 'none',
                          background: 'var(--rosa-intenso)',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Botón eliminar */}
                    <button
                      onClick={() => removeFromCart(item.id)}
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

          {/* Resumen del pedido */}
          <div style={{
            background: 'white',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            padding: '2rem',
            position: 'sticky',
            top: '2rem'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--texto-oscuro)',
              marginBottom: '1.5rem'
            }}>
              Resumen del pedido
            </h2>

            <div style={{
              marginBottom: '1.5rem'
            }}>
              {items.map((item) => (
                <div key={item.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  <span style={{ color: 'var(--texto-claro)' }}>
                    {item.name} x{item.quantity}
                  </span>
                  <span style={{ fontWeight: '500' }}>
                    €{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              borderTop: '2px solid var(--rosa-suave)',
              paddingTop: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--texto-oscuro)'
              }}>
                <span>Total:</span>
                <span style={{ color: 'var(--rosa-intenso)' }}>
                  €{getTotalPrice().toFixed(2)}
                </span>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="btn btn-primary"
              style={{
                width: '100%',
                fontSize: '1.1rem',
                padding: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}
            >
              <CreditCard size={20} />
              Finalizar compra
            </button>

            <p style={{
              fontSize: '0.8rem',
              color: 'var(--texto-claro)',
              textAlign: 'center',
              lineHeight: '1.4'
            }}>
              * El sistema de pagos estará disponible próximamente. 
              Por ahora, contacta con nosotros para completar tu pedido.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
