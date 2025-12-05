import { useAuthContext } from '../../context/AuthContext/useAuthContext';
import { Navigate } from 'react-router-dom';

export const RutaProtegida = ({ children }) => {

    const {user} = useAuthContext ();

    // Si NO hay usuario → redirigir a login
    if (!user) {
        return <Navigate to="/" replace />;
    }

    // Si hay usuario → mostrar lo que envuelve ProtectedRoute
    return children;
};