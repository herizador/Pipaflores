import { Save } from 'lucide-react'

const ContentEditor = ({ title, fields, values, onSave }) => {
    const handleChange = (key, value) => {
        onSave({ ...values, [key]: value })
        // Note: This calls setState in parent immediately on type, 
        // effectively "controlled" but saving to state. 
        // The "Save" button in parent might persist to localStorage.
    }

    return (
        <div>
            <h2 style={{ marginBottom: '2rem' }}>{title}</h2>

            <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: 'var(--radio-borde)',
                boxShadow: 'var(--sombras-suave)'
            }}>
                {fields.map((field) => (
                    <div key={field.key} style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                            {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                            <textarea
                                value={values[field.key]}
                                onChange={(e) => handleChange(field.key, e.target.value)}
                                rows={field.rows || 4}
                                style={inputStyle}
                            />
                        ) : (
                            <input
                                type="text"
                                value={values[field.key]}
                                onChange={(e) => handleChange(field.key, e.target.value)}
                                style={inputStyle}
                            />
                        )}
                    </div>
                ))}

                <button
                    onClick={() => alert('Cambios guardados localmente')}
                    className="btn btn-primary"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    <Save size={18} /> Guardar cambios
                </button>
            </div>
        </div>
    )
}

const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid var(--rosa-suave)',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none'
}

export default ContentEditor
