import "./Count.css";
import { useState } from "react";

export const Count = ({ btnText = "Agregar al carrito", onConfirm }) => {
    const [count, setCount] = useState(1);

    const increment = () => setCount((c) => c + 1);
    const decrement = () => setCount((c) => (c > 1 ? c - 1 : 1));

    const confirm = () => {
        if (count > 0) {
            if (typeof onConfirm === "function") onConfirm(count);
            // feedback optional
            // alert(`Has agregado ${count} items al carrito`);
        } else {
            alert("Debe seleccionar al menos un item");
        }
    };

    return (
        <div className="count-container">
            <div className="count-buttons">
                <button
                    className="count-button"
                    onClick={decrement}
                    aria-label="disminuir"
                    disabled={count === 1}
                >
                    -
                </button>
                <span className="count-value">{count}</span>
                <button
                    className="count-button"
                    onClick={increment}
                    aria-label="aumentar"
                >
                    +
                </button>
            </div>
            <button className="btn btn-add" onClick={confirm} disabled={count === 0}>
                {btnText}
            </button>
        </div>
    );
};