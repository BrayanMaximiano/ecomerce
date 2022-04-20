import Link from 'next/link'
import React from 'react'
import { Container, Image, Info, Title, Button } from './styles'

const index = ({item}) => {
  return (
    <Link href={item.path}>
      <Container>
      
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
      </Info>
  </Container>
    </Link>
    
  )
}

export default index
