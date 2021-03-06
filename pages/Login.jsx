import styled from "styled-components";
import NavBar from '../src/components/NavBar'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 412px){
        height: 90vh;
    } 
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  @media (max-width: 412px){
        width: auto;
    } 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  a{
     text-decoration : none;
     color: white;
     font-size: 20px;
  }
  @media (max-width: 412px){
        width: fit-content;
        align-items: center;
        justify-content: center;
        font-size: 16px;
    } 
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;

  a{
      text-decoration: none;
      color: black;
  }
`;

const Login = () => {
  return (
    <>
    <NavBar/>
    <Container>
      <Wrapper>
        <Title>ENTRAR</Title>
        <Form>
          <Input placeholder="Usuario" />
          <Input placeholder="Senha" />
          <Button><Link href="/">Entrar</Link></Button>
          <Link>esqueci minha senha</Link>
          <Link><Link href="Cadastro">Nao possui uma conta? crie uma agora</Link></Link>
        </Form>
      </Wrapper>
    </Container>
    </>
  );
};

export default Login;