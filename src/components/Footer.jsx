import { Instagram, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, var(--lila-claro), var(--rosa-suave))',
      padding: '3rem 0 1rem',
      marginTop: '4rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Logo y descripción */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--rosa-intenso)',
              marginBottom: '1rem'
            }}>
              🌸 Pipaflores
            </h3>
            <p style={{
              color: 'var(--texto-claro)',
              lineHeight: '1.6'
            }}>
              Regalos únicos hechos a mano con amor y creatividad. 
              Cada flor, cada detalle, está hecho con cuidado y cariño.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: 'var(--texto-oscuro)',
              marginBottom: '1rem'
            }}>
              Enlaces Rápidos
            </h4>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <li><a href="/" style={{ color: 'var(--texto-claro)', textDecoration: 'none' }}>Inicio</a></li>
              <li><a href="/productos" style={{ color: 'var(--texto-claro)', textDecoration: 'none' }}>Productos</a></li>
              <li><a href="/sobre-nosotros" style={{ color: 'var(--texto-claro)', textDecoration: 'none' }}>Sobre Nosotros</a></li>
              <li><a href="/carrito" style={{ color: 'var(--texto-claro)', textDecoration: 'none' }}>Carrito</a></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: 'var(--texto-oscuro)',
              marginBottom: '1rem'
            }}>
              Síguenos
            </h4>
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <a href="#" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--texto-claro)',
                textDecoration: 'none',
                padding: '0.5rem',
                borderRadius: '8px',
                transition: 'background-color 0.3s ease'
              }}>
                <Instagram size={20} />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div style={{
          borderTop: '1px solid rgba(0,0,0,0.1)',
          paddingTop: '1rem',
          textAlign: 'center'
        }}>
          <p style={{
            color: 'var(--texto-claro)',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            Hecho con <Heart size={16} style={{ color: 'var(--rosa-intenso)' }} /> por Pipaflores
            <span style={{ margin: '0 0.5rem' }}>•</span>
            © 2024 Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
