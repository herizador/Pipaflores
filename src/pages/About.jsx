import { Heart, Flower, Sparkles, Users } from 'lucide-react'

const About = () => {
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
          marginBottom: '4rem'
        }}>
          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: '700',
            color: 'var(--texto-oscuro)',
            marginBottom: '1rem'
          }}>
            Sobre Nosotros
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--texto-claro)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Conoce la historia detrás de Pipaflores y la pasión que nos impulsa a crear belleza.
          </p>
        </div>

        {/* Historia principal */}
        <section style={{
          background: 'white',
          padding: '4rem 3rem',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          marginBottom: '4rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Elementos decorativos */}
          <div style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
            fontSize: '3rem',
            opacity: 0.1,
            transform: 'rotate(15deg)'
          }}>
            🌸
          </div>
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            fontSize: '2rem',
            opacity: 0.1,
            transform: 'rotate(-15deg)'
          }}>
            🌺
          </div>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '2rem'
            }}>
              💝
            </div>
            
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '600',
              color: 'var(--texto-oscuro)',
              marginBottom: '2rem',
              lineHeight: '1.3'
            }}>
              Nuestra Historia
            </h2>
            
            <div style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: 'var(--texto-oscuro)',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Pasamos por momentos muy difíciles en nuestra vida personal, y la creación de estos arreglos fue nuestra terapia, nuestra manera de seguir adelante. Cada flor, cada detalle, está hecho con cuidado y cariño, reflejando nuestra pasión por crear belleza en lo pequeño.
              </p>
              
              <p style={{ marginBottom: '1.5rem' }}>
                En los momentos más oscuros, encontramos luz a través de la creatividad. Cada pétalo que colocamos, cada color que elegimos, se convirtió en un acto de sanación y esperanza. Lo que comenzó como una forma de sobrellevar el dolor, se transformó en nuestra mayor fortaleza.
              </p>
              
              <p style={{ marginBottom: '1.5rem' }}>
                Queremos compartirlo contigo. Cada arreglo que creamos lleva consigo una parte de nuestra historia, de nuestra lucha y de nuestra victoria. No son solo flores, son símbolos de que siempre se puede encontrar belleza, incluso en los momentos más difíciles.
              </p>
              
              <p style={{
                fontWeight: '600',
                color: 'var(--rosa-intenso)',
                fontSize: '1.3rem',
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
                "De la adversidad nace la belleza, y de la belleza, la esperanza."
              </p>
            </div>
          </div>
        </section>

        {/* Valores y misión */}
        <section style={{
          marginBottom: '4rem'
        }}>
          <div className="grid grid-3">
            <div className="card" style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, var(--rosa-suave), var(--lila-claro))',
              border: 'none'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem'
              }}>
                <Heart style={{ color: 'var(--rosa-intenso)' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--texto-oscuro)',
                marginBottom: '1rem'
              }}>
                Hecho con Amor
              </h3>
              <p style={{
                color: 'var(--texto-claro)',
                lineHeight: '1.6'
              }}>
                Cada arreglo es creado con dedicación y cariño, transmitiendo emociones positivas a través de la belleza natural.
              </p>
            </div>

            <div className="card" style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, var(--lila-claro), var(--amarillo-pastel))',
              border: 'none'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem'
              }}>
                <Flower style={{ color: 'var(--rosa-intenso)' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--texto-oscuro)',
                marginBottom: '1rem'
              }}>
                Terapia Creativa
              </h3>
              <p style={{
                color: 'var(--texto-claro)',
                lineHeight: '1.6'
              }}>
                La creación floral se convirtió en nuestra forma de sanar, de encontrar paz y de transformar el dolor en belleza.
              </p>
            </div>

            <div className="card" style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, var(--amarillo-pastel), var(--rosa-suave))',
              border: 'none'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem'
              }}>
                <Sparkles style={{ color: 'var(--rosa-intenso)' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--texto-oscuro)',
                marginBottom: '1rem'
              }}>
                Único y Especial
              </h3>
              <p style={{
                color: 'var(--texto-claro)',
                lineHeight: '1.6'
              }}>
                Cada pieza es única, reflejando la individualidad y la historia personal que llevamos en cada creación.
              </p>
            </div>
          </div>
        </section>

        {/* Mensaje final */}
        <section style={{
          background: 'linear-gradient(135deg, var(--rosa-suave), var(--lila-claro))',
          padding: '3rem 2rem',
          borderRadius: '20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '2rem',
            fontSize: '2rem',
            opacity: 0.3
          }}>
            🌸
          </div>
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            right: '2rem',
            fontSize: '2rem',
            opacity: 0.3
          }}>
            🌺
          </div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '1rem',
            fontSize: '1.5rem',
            opacity: 0.3,
            transform: 'translateY(-50%)'
          }}>
            🌻
          </div>

          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: 'var(--texto-oscuro)',
              marginBottom: '1.5rem'
            }}>
              Gracias por ser parte de nuestra historia
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--texto-claro)',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              Al elegir Pipaflores, no solo estás adquiriendo un hermoso arreglo floral, 
              sino que estás apoyando una historia de superación, creatividad y esperanza. 
              Cada compra nos ayuda a seguir adelante y a compartir nuestra pasión con el mundo.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '1.2rem',
              fontWeight: '600',
              color: 'var(--rosa-intenso)'
            }}>
              <Users size={24} />
              Con amor, el equipo de Pipaflores
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
