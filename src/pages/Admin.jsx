import { useState, useEffect } from 'react'
import { Settings, Package, FileText, LogOut, Layout } from 'lucide-react'
import AdminLogin from '../components/admin/AdminLogin'
import ProductManager from '../components/admin/ProductManager'
import ContentEditor from '../components/admin/ContentEditor'

const Admin = () => {
  // Estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('isAdminAuthenticated') === 'true'
  })

  // Estado de navegación
  const [activeTab, setActiveTab] = useState('products')

  // Datos iniciales para fallback
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

  const initialHome = {
    bannerText: "Regalos únicos hechos a mano con amor y creatividad",
    bannerSubtext: "Cada flor, cada detalle, está hecho con cuidado y cariño, reflejando nuestra pasión por crear belleza en lo pequeño."
  }

  const initialAbout = {
    title: "Nuestra Historia",
    content: "Pasamos por momentos muy difíciles en nuestra vida personal, y la creación de estos arreglos fue nuestra terapia, nuestra manera de seguir adelante. Cada flor, cada detalle, está hecho con cuidado y cariño, reflejando nuestra pasión por crear belleza en lo pequeño. Queremos compartirlo contigo."
  }

  // Estados con persistencia
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('pipaflores_products')
    return saved ? JSON.parse(saved) : initialProducts
  })

  const [homeContent, setHomeContent] = useState(() => {
    const saved = localStorage.getItem('pipaflores_home')
    return saved ? JSON.parse(saved) : initialHome
  })

  const [aboutContent, setAboutContent] = useState(() => {
    const saved = localStorage.getItem('pipaflores_about')
    return saved ? JSON.parse(saved) : initialAbout
  })

  // Efectos para guardar en localStorage
  useEffect(() => {
    localStorage.setItem('pipaflores_products', JSON.stringify(products))
  }, [products])

  useEffect(() => {
    localStorage.setItem('pipaflores_home', JSON.stringify(homeContent))
  }, [homeContent])

  useEffect(() => {
    localStorage.setItem('pipaflores_about', JSON.stringify(aboutContent))
  }, [aboutContent])

  const handleLogin = (password) => {
    if (password === 'pipaflores2024') {
      setIsAuthenticated(true)
      sessionStorage.setItem('isAdminAuthenticated', 'true')
    } else {
      alert('Contraseña incorrecta')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('isAdminAuthenticated')
  }

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct])
  }

  const handleEditProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p))
  }

  const handleDeleteProduct = (id) => {
    if (window.confirm('¿Eliminar este producto?')) {
      setProducts(products.filter(p => p.id !== id))
    }
  }

  if (!isAuthenticated) return <AdminLogin onLogin={handleLogin} />

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh', background: 'var(--beige-claro)' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem',
          background: 'white', padding: '1.5rem 2rem', borderRadius: 'var(--radio-borde)', boxShadow: 'var(--sombras-suave)'
        }}>
          <h1 style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Settings size={28} color="var(--rosa-intenso)" /> Admin
          </h1>
          <button
            onClick={handleLogout}
            style={{
              background: 'transparent', border: '2px solid var(--rosa-intenso)', color: 'var(--rosa-intenso)',
              padding: '8px 16px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.5rem',
              fontWeight: '600', transition: 'var(--transicion)'
            }}
          >
            <LogOut size={16} /> Salir
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <TabButton active={activeTab === 'products'} onClick={() => setActiveTab('products')} icon={<Package size={18} />}>
            Productos
          </TabButton>
          <TabButton active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon={<Layout size={18} />}>
            Inicio
          </TabButton>
          <TabButton active={activeTab === 'about'} onClick={() => setActiveTab('about')} icon={<FileText size={18} />}>
            Nosotros
          </TabButton>
        </div>

        {/* Content */}
        {activeTab === 'products' && (
          <ProductManager
            products={products}
            onAdd={handleAddProduct}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        )}

        {activeTab === 'home' && (
          <ContentEditor
            title="Editar Home"
            values={homeContent}
            onSave={setHomeContent}
            fields={[
              { key: 'bannerText', label: 'Texto Principal', type: 'text' },
              { key: 'bannerSubtext', label: 'Subtexto', type: 'textarea' }
            ]}
          />
        )}

        {activeTab === 'about' && (
          <ContentEditor
            title="Editar Nosotros"
            values={aboutContent}
            onSave={setAboutContent}
            fields={[
              { key: 'title', label: 'Título', type: 'text' },
              { key: 'content', label: 'Contenido', type: 'textarea', rows: 8 }
            ]}
          />
        )}
      </div>
    </div>
  )
}

const TabButton = ({ active, onClick, children, icon }) => (
  <button
    onClick={onClick}
    style={{
      padding: '12px 24px',
      borderRadius: '50px',
      background: active ? 'var(--rosa-intenso)' : 'white',
      color: active ? 'white' : 'var(--texto-oscuro)',
      display: 'flex', alignItems: 'center', gap: '0.5rem',
      boxShadow: active ? 'var(--sombras-suave)' : 'none',
      transition: 'var(--transicion)',
      border: active ? 'none' : '1px solid var(--rosa-claro)'
    }}
  >
    {icon} {children}
  </button>
)

export default Admin
