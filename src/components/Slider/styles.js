import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: relative;
`

export const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left:${props=>props.direction === "left" && "15px"};
    right:${props=>props.direction === "right" && "15px"};
    cursor: pointer;
    opacity: 0.5;
    transition: all ease 0.5s;
    z-index: 2;
    &:hover{
        opacity: 0.8;
    }

`

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all ease 1.5s;
    transform: translateX(${props=> props.slideIndex * -100}vw);
    
`

export const Slide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=>props.bg};
    
`

export const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items:center;
`

export const Image = styled.img`
    height: 80%;
    
`

export const InfoContainer = styled.div`
    flex: 1;
    align-items: center;
    
`

export const Title = styled.h1`
    text-transform: uppercase;
    font-size: 70px;
`

export const Desc= styled.p`
    text-transform: uppercase;
    margin: 50px 0px;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 3px;
    width: 85%;
`

export const Button = styled.button`
    text-transform: uppercase;
    padding: 10px 15px;
    font-size: 25px;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid black;
    transition: all ease 0.5s;
    a{
        text-decoration: none;
        color: black;
    }

    &:hover{
        transform: scale(1.1);
    }
`