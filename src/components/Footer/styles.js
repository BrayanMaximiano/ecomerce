import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 400px;
    background-color: #1a1a1a;
    display: flex;
    color: white;
`

export const Left = styled.div`
    flex:1;
    padding: 20px;
`
export const Logo = styled.h1`
    font-size: 45px;
`

export const Desc = styled.p`
    font-size: 20px;
    justify-content: center;
    @media (max-width: 412px){
        font-size: 14px;
    }
`

export const Center = styled.div`
    flex:1;
    @media (max-width: 412px){
        display: none;
    } 
`
export const Rigth = styled.div`
    flex:1;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top:30px;
    align-items: center;
    @media (max-width: 412px){
        justify-content: space-around;
    } 
`
export const Address = styled.h2`
   @media (max-width: 412px){
        font-size: 18px;
        margin-bottom: -100px;
    } 
`
export const Phone = styled.h2`
    @media (max-width: 412px){
        font-size: 18px;
    } 
`

export const Payment = styled.img`
    width: 350px;
    height: 70px;
    position: absolute;
    bottom: 4rem;
    @media (max-width: 412px){
        width: 100%;
        height: 35px;
        position: relative;
        margin-right: 10px;
    }
`

