import { useState } from 'react'

const ProductImage = ({ src, alt, className, style, fallback = '🌸' }) => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  // Si hay error, mostrar fallback
  if (imageError) {
    return (
      <div 
        className={className}
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--rosa-suave)',
          borderRadius: '10px',
          fontSize: '3rem',
          color: 'var(--texto-claro)'
        }}
      >
        {fallback}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={handleImageError}
    />
  )
}

export default ProductImage
