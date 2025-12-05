import "./Item.css";

export const Item = ({nombre, precio, descripcion, imagenUrl, categoria, children}) => {
    return (        
        <article className="product-item">
            <img src={imagenUrl} alt={""} />                                              
            <h2 className="product-title">{nombre}</h2>            
            <p className="product-description">Descripción: {descripcion}</p>
            <p className="product-description">Categoria: {categoria}</p>
            <p className="product-precio">Precio: ${precio}</p>
            {children}
        </article>        
    );
};