import React from 'react'
import { Container, Filter, FilterContainer, FilterText, Option, Select, Title} from '../src/styles/ProductList'
import NavBar from '../src/components/NavBar'
import Products from '../src/components/Products'
import NewsLetter from '../src/components/NewsLetter'
import Footer from '../src/components/Footer'



const ProductList = () => {
  return (
    <Container>
        <NavBar/>
        <FilterContainer>
            <Filter>
                <FilterText>Filtrar por: </FilterText>
                <Select>
                    <Option disabled selected>Cores</Option>
                    <Option>Branco</Option>
                    <Option>Preto</Option>
                    <Option>Vermelho</Option>
                    <Option>Azul</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Ordenar por: </FilterText>
                <Select>
                    <Option disabled selected>Preco</Option>
                    <Option>Mais Baratos (cresc.)</Option>
                    <Option>Mais Caro (dec.)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Products/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
