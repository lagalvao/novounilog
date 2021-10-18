import { Link } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

import { Container, Content, Background, Footer } from "./styles";

import logoImg from '../../assets/logo.png';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/auth";

interface IFormInput {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const { handleSubmit, control } = useForm<IFormInput>();
    const { signIn } = useAuth();

    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        try {
            await signIn({
                username: data.username,
                password: data.password
            });
        } catch (err) {
            toast.error('Ocorreu um erro ao efetuar o login!');
        }
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="NovoUnilog" />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Acesse o sistema</h1>

                    <Controller
                        control={control}
                        rules={{ required: true }}
                        name="username"
                        render={({ field }) => <Input label="Usuario" {...field} />}
                    />

                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Input type="password" label="Senha" {...field} />}
                    />
                    
                    <Button type="submit">Confirmar</Button>
                    <Toaster />
                </form>

                <Footer>
                    <Link to="/forgot-password">Esqueceu a senha?</Link>
                    <Link to="/request-access">Solicitar acesso</Link>
                </Footer>
            </Content>
            <Background />
        </Container>
    );
}

export default Login;