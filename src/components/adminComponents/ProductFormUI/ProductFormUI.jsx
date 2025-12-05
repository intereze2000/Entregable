
import './ProductFormUI.css'

export const ProductFormUI = ({
    product,
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit,
}) => {
    
    return (
        <section>            
            <form onSubmit={onSubmit} className="product-form">
                <h2>Agregar Producto</h2>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={onChange} />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="">Descripcion:</label>
                    <input
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={onChange} />
                    {errors.description && <span className="error">{errors.description}</span>}
                </div>
                <div>
                    <label htmlFor="">Precio:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={onChange} />
                    {errors.price && <span className="error">{errors.price}</span>}
                </div>
                <div>
                    <label htmlFor="">Tipo:</label>
                    <textarea
                        type="text"
                        name="type"
                        value={product.type}
                        onChange={onChange} ></textarea>
                    {errors.type && <span className="error">{errors.type}</span>}
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
                    />
                    {errors.imagen && <span className="error">{errors.imagen}</span>}
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Cargando..." : "Guardar"}
                </button>
            </form>
        </section>
    )
}