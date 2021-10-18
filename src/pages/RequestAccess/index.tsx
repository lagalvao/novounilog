import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, Background, Footer } from "./styles";

import logoImg from '../../assets/logo.png';
import Input from "../../components/Input";
import Button from "../../components/Button";

const RequestAccess: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="NovoUnilog" />

                <form action="">
                    <h1>Solicite seu acesso</h1>

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

export default RequestAccess;