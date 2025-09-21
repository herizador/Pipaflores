import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Header = () => {
  const { getTotalItems } = useCart()

  return (
    <header style={{
      background: 'linear-gradient(135deg, var(--rosa-suave), var(--lila-claro))',
      padding: '1rem 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container">
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <Link to="/" style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: 'var(--rosa-intenso)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            🌸 Pipaflores
          </Link>

          {/* Navigation Menu */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <Link to="/" style={{
              color: 'var(--texto-oscuro)',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>
              Inicio
            </Link>
            <Link to="/productos" style={{
              color: 'var(--texto-oscuro)',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>
              Productos
            </Link>
            <Link to="/sobre-nosotros" style={{
              color: 'var(--texto-oscuro)',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>
              Sobre Nosotros
            </Link>
            
            {/* Cart Icon */}
            <Link to="/carrito" style={{
              position: 'relative',
              color: 'var(--texto-oscuro)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem',
              borderRadius: '50%',
              transition: 'background-color 0.3s ease'
            }}>
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  background: 'var(--rosa-intenso)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
