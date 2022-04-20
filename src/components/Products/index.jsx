import React from 'react'
import { Container, Title } from './styles'
import { popularProducts } from '../../data'
import Product from '../Product'

const index = () => {
  return (
    <>
    <Container>
      
        {popularProducts.map(item => (
          <Product item={item} key={item.id}/>
        ))}
    </Container>
    
    </>
    
  )
}

export default index
