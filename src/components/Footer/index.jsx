import { LocationOn, PhoneAndroid } from '@material-ui/icons'
import React from 'react'
import { Address, Center, Container, Desc, Left, Logo, Payment, Phone, Rigth } from './styles'

const index = () => {
  return (
    <Container>
        <Left>
            <Logo>UrStore</Logo>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quia tenetur, eos quidem veritatis praesentium. Asperiores adipisci sint veniam labore dolores amet porro, dicta nam facere maiores quibusdam harum. Incidunt!</Desc>
        </Left>

        <Center>

        </Center>

        <Rigth>
            <Address><LocationOn/> Av.Paulista, 123</Address>
            <Phone><PhoneAndroid/> (11)1234-5678</Phone>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Rigth>
    </Container>
  )
}

export default index
