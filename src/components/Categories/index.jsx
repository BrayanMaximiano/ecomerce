import React from 'react'
import { Container } from './styles'
import { categories } from "../../data"
import CategoryItem from "../CategoryItem"

const index = () => {
  return (
    <Container>
        {categories.map(item => (
          <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default index
