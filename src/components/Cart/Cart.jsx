import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import "./Cart.css";

export const Cart = () => {
  const { cart, deleteItem, clearCart, total } = useCartContext();

  if (!cart || cart.length === 0) {
    return <div className="cart-empty">El carrito está vacío</div>;
  }

  return (
    <section className="cart-page">
      <h2>Carrito</h2>
      <div className="cart-grid">
        {cart.map((p) => (
          <div key={p.id} className="cart-item">
            <Item {...p} />
            <div className="cart-item-actions">
              <div>Cantidad: <strong>{p.quantity}</strong></div>
              <div>Subtotal: <strong>${(p.precio * p.quantity).toFixed(2)}</strong></div>
              <button className="btn-remove" onClick={() => deleteItem(p.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div><strong>Total:</strong> ${total()}</div>
        <div>
          <button className="btn-clear" onClick={clearCart}>Vaciar carrito</button>
        </div>
      </div>
    </section>
  );
};
