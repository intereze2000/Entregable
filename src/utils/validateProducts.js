export const validateProducts = (products, fileRequired=true) => {
    const errors = {}

    if (!products.nombre.trim()) {
        errors.nombre = "El nombre es obligatorio"
    }

    if (!products.precio) {
        errors.precio = "El precio es obligatorio"
    } else if (isNaN(products.precio) || Number(products.precio) <= 0) {
        errors.precio = "El precio debe ser un número positivo"
    }

    if (!products.descripcion.trim()) {
        errors.descripcion = "La descripcion es obligatoria"
    }

    if (!products.tipo.trim()) {
        errors.tipo = "El tipo es obligatorio"
    }

    if (fileRequired && !products.imagen) {
        errors.imagen = "La imagen es obligatoria"
    }

    return errors    
}
