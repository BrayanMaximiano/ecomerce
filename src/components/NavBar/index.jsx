import { Badge } from "@material-ui/core";
import { Search, ShoppingCart } from "@material-ui/icons";
import Link from "next/link";
import {
    Center,
    Container,
    Input, Language,
    Left,
    Logo,
    MenuItem,
    Rigth,
    SearchContainer,
    Wrapper
}
    from "./styles";



export default function NavBar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>PT</Language>
                    <SearchContainer>
                        <Input placeholder="Pesquisar"/>
                        <Search style={{color:"grey", fontSize:20}}/>
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>UrStore</Logo>
                </Center>

                <Rigth>
                    <MenuItem><Link href="Cadastro"><a>Cadastre-se</a></Link></MenuItem>
                    <MenuItem><Link href="Login"><a>Entrar</a></Link></MenuItem>
                    <MenuItem>
                        <Link href="Carrinho">
                            <Badge badgeContent={1} color="primary">
                            <ShoppingCart/>
                        </Badge>
                        </Link>
                    </MenuItem>
                </Rigth>
            </Wrapper>
        </Container>
    );
}