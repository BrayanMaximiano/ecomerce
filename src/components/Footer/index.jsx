import { LocationOn, PhoneAndroid } from '@material-ui/icons'
import React from 'react'
import { Address, Center, Container, Desc, Left, Logo, Payment, Phone, Rigth } from './styles'

const index = () => {
  return (
    <Container>
        <Left>
            <Logo>UrStore</Logo>
            <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, debitis eum. Itaque repellendus eligendi quaerat molestias at aperiam obcaecati officiis, accusamus cumque, molestiae quia quas maxime quae illum iure vero laboriosam voluptatibus tempore ratione beatae. Id maxime iure, quos sint expedita dolorum perferendis reiciendis, ipsum quibusdam fugit temporibus? Temporibus deserunt praesentium, dolorum laudantium sit fugit est nisi expedita atque, quis facere. Nulla quaerat animi veniam quibusdam ex beatae esse quas minima at, laborum est consectetur aspernatur consequuntur accusamus magni porro?</Desc>
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
