import "./Item.css";

export const Item = ({nombre, precio, descripcion, imagen, tipo, children}) => {
    return (        
        <article className="product-item">
            <img src={imagen} alt={""} />                                              
            <h2 className="product-title">{nombre}</h2>            
            <p className="product-description">Descripción: {descripcion}</p>
            <p className="product-description">Tipo: {tipo}</p>
            <p className="product-precio">Precio: ${precio}</p>
            {children}
        </article>        
    );
};