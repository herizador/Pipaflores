import { useState } from 'react'

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('')

  const  handleSubmit = (e) => {
    e.preventDefault()
    onLogin(password)
  }

  return (
    <div style={{
      padding: '4rem 0',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--rosa-muy-claro)'
    }}>
      <div style={{
        background: 'white',
        padding: '3rem',
        borderRadius: 'var(--radio-borde)',
        boxShadow: 'var(--sombras-fuerte)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Panel de Administración</h1>
          <p style={{ color: 'var(--texto-claro)' }}>Ingresa la contraseña para acceder</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid var(--rosa-claro)',
                borderRadius: '50px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                outline: 'none',
                textAlign: 'center',
                transition: 'var(--transicion)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--rosa-intenso)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--rosa-claro)'}
              required
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            Acceder
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
