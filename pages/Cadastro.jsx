import Link from "next/link";
import styled from "styled-components";
import NavBar from "../src/components/NavBar";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
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
  width: 40%;
  padding: 20px;
  background-color: white;
  @media (max-width: 412px){
    width: 300px;
  }
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;

  @media (max-width: 412px){
    min-width:200px;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 20px 0px;
    a{
        text-decoration: none;
        color:white;
    }
    @media (max-width: 412px){
    
  }
`;

const Register = () => {
  return (
    <>
    <NavBar/>
    <Container>
      <Wrapper>
        <Title>Cadastro</Title>
        <Form>
          <Input placeholder="Nome" />
          <Input placeholder="Sobrenome" />
          <Input placeholder="Usuario" />
          <Input placeholder="email" />
          <Input placeholder="Senha" />
          <Input placeholder="Comfirme a senha" />
          
          <Button><Link href='/'>Cadastrar</Link></Button>
        </Form>
      </Wrapper>
    </Container>
    </>
  );
};

export default Register;