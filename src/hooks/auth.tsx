import { createContext, useCallback, useContext, useState } from "react";

interface User {
    name: string;
    email: string;
    password: string;
    usuario: string;
}

type LoginCredentials = {
    username: string;
    password: string;
}

type AuthContextData = {
    user?: User;
    signIn(credentials: LoginCredentials): Promise<void>;
    signOut(): void;
}

type AuthState = {
    user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [data, setData] = useState<AuthState>();

    const signIn = useCallback(async({ username, password }) => {

        fetch(`http://localhost:8080/users?q=${username}`).then((data) => {
            data.json().then((resp) => {
                if (resp.length > 0) {
                    localStorage.setItem('@novounilog:user', JSON.stringify(resp));
                    setData(resp);
                } else {
                    alert('Cheque suas credenciais');
                }
            })
        })

    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@novounilog:user');

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ user: data?.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextData{
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('UseAuth deve ser usado em um AuthProvider');
    }

    return context;
}