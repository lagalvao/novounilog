import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Background, Footer } from "./styles";

import logoImg from '../../assets/logo.png';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="NovoUnilog" />

                <form action="">
                    <h1>Esqueceu a senha?</h1>
                    <p>Solicite uma nova senha e receba por e-mail</p>

                    <Input label="Email do usuario" />

                    <Button>Solicitar</Button>
                </form>

                <Footer>
                    <Link to="/"><FiArrowLeft size={15} color="#596073" /> Retornar ao Login</Link>
                </Footer>
            </Content>
            <Background />
        </Container>
    );
}

export default ForgotPassword;