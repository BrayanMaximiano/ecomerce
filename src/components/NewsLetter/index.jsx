import { Send } from '@material-ui/icons'
import React from 'react'
import { Button, Container, Desc, Input, InputContainer, Title } from './styles'

const indesx = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>Receba nossas novidades no seu email.</Desc>
        <InputContainer>
            <Input placeholder='Digite seu email'/>
            <Button> Enviar <Send/></Button>
        </InputContainer>
    </Container>
  )
}

export default indesx
