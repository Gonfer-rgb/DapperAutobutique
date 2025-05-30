import { Link } from 'react-router-dom';
import { Button, Flex, Spacer } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <Flex p={4} bg="teal.500" color="white">
            <Link to="/">Inicio</Link>
            <Spacer />
            {user ? (
                <>
                    <Button onClick={logout}>Cerrar sesión</Button>
                    {user.user_type === 'admin' && (
                        <Link to="/admin">
                            <Button ml={4}>Panel Admin</Button>
                        </Link>
                    )}
                </>
            ) : (
                <>
                    <Link to="/login">
                        <Button>Iniciar sesión</Button>
                    </Link>
                    <Link to="/register">
                        <Button ml={4}>Registrarse</Button>
                    </Link>
                </>
            )}
        </Flex>
    );
}