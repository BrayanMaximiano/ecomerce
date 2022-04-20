import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import Link from 'next/link'
import React, { useState } from 'react'
import { Arrow, Container, Image, Wrapper, ImgContainer, InfoContainer, Slide, Title, Desc, Button } from './styles'
import { SliderItems } from '../../data';

const index = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => { 

    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined style={{ fontSize: 30 }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {SliderItems.map(item => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button><Link href="ProdutoDestaque">ver mais</Link></Button>
            </InfoContainer>
          </Slide>
        ))}

      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined style={{ fontSize: 30 }} />
      </Arrow>
    </Container>
  )
}

export default index
