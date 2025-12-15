import { useState } from 'react'
import { Plus, Edit, Trash2, X, Image } from 'lucide-react'

const ProductManager = ({ products, onAdd, onEdit, onDelete }) => {
    const [showForm, setShowForm] = useState(false)
    const [editingProduct, setEditingProduct] = useState(null)

    const handleSubmit = (e) => {
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
            onEdit(newProduct)
        } else {
            onAdd(newProduct)
        }
        closeForm()
    }

    const openEdit = (product) => {
        setEditingProduct(product)
        setShowForm(true)
    }

    const closeForm = () => {
        setShowForm(false)
        setEditingProduct(null)
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem'
            }}>
                <h2>Gestión de Productos</h2>
                <button
                    onClick={() => setShowForm(true)}
                    className="btn btn-primary"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    <Plus size={18} /> Añadir Producto
                </button>
            </div>

            <div style={{
                background: 'white',
                borderRadius: 'var(--radio-borde)',
                boxShadow: 'var(--sombras-suave)',
                overflow: 'hidden'
            }}>
                {products.map((product) => (
                    <div key={product.id} style={{
                        padding: '1.5rem',
                        borderBottom: '1px solid var(--rosa-muy-claro)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover' }}
                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                        />
                        <div style={{
                            width: '60px', height: '60px', borderRadius: '12px',
                            background: 'var(--rosa-claro)', display: 'none',
                            alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
                        }}>🌸</div>

                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{product.name}</h3>
                            <p style={{ color: 'var(--texto-claro)', fontSize: '0.9rem' }}>€{product.price}</p>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button
                                onClick={() => openEdit(product)}
                                style={{
                                    width: '40px', height: '40px', borderRadius: '50%',
                                    background: 'var(--amarillo-pastel)', color: 'var(--texto-oscuro)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                            >
                                <Edit size={18} />
                            </button>
                            <button
                                onClick={() => onDelete(product.id)}
                                style={{
                                    width: '40px', height: '40px', borderRadius: '50%',
                                    background: '#ffebee', color: 'var(--rosa-intenso)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showForm && (
                <div style={{
                    position: 'fixed', inset: 0,
                    background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem'
                }}>
                    <div style={{
                        background: 'white', padding: '2rem', borderRadius: 'var(--radio-borde)',
                        boxShadow: 'var(--sombras-fuerte)', maxWidth: '500px', width: '100%', maxHeight: '90vh', overflow: 'auto'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                            <h3>{editingProduct ? 'Editar Producto' : 'Nuevo Producto'}</h3>
                            <button onClick={closeForm} style={{ background: 'transparent' }}><X size={24} /></button>
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input name="name" defaultValue={editingProduct?.name} placeholder="Nombre" required
                                style={inputStyle} />
                            <textarea name="description" defaultValue={editingProduct?.description} placeholder="Descripción" required rows={3}
                                style={inputStyle} />
                            <input name="price" type="number" step="0.01" defaultValue={editingProduct?.price} placeholder="Precio" required
                                style={inputStyle} />
                            <input name="image" defaultValue={editingProduct?.images[0]} placeholder="URL de la imagen (/assets/...)" required
                                style={inputStyle} />
                            <input name="tags" defaultValue={editingProduct?.tags.join(', ')} placeholder="Tags (separados por coma)" required
                                style={inputStyle} />

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <select name="category" defaultValue={editingProduct?.category || 'flores'} style={inputStyle}>
                                    <option value="flores">Flores</option>
                                    <option value="acuatico">Acuático</option>
                                </select>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                    <input type="checkbox" name="featured" defaultChecked={editingProduct?.featured} /> Destacado
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Guardar</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

const inputStyle = {
    width: '100%', padding: '12px',
    border: '1px solid var(--rosa-suave)', borderRadius: '8px',
    fontSize: '1rem', fontFamily: 'inherit', outline: 'none'
}

export default ProductManager
