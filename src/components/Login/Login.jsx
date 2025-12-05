import { useState } from "react";
import {useAuthContext} from "../../context/AuthContext/useAuthContext"
import { useNavigate, Navigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
    const [userForm, setUserForm] = useState({ name: '', password: '' });

    const {user, login} = useAuthContext();
    const navigate = useNavigate();

    if (user) {
        return <Navigate to={"/admin/alta-productos"} />
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(userForm.name, userForm.password);

        if (success) {
            navigate("/admin/alta-productos");
        } else {
            alert("Credenciales inválidas");
            setUserForm({ name: '', password: '' });
        }
    };

    return (
        <section>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Iniciar sesión</h2>
                <div>
                    <label htmlFor="name">Usuario:</label>
                    <input id="name" type="text" name="name" value={userForm.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input id="password" type="password" name="password" value={userForm.password} onChange={handleChange} />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
        </section>
    )
}