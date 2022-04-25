import { red } from '@material-ui/core/colors';
import styled from 'styled-components'
import { mobile } from "../../responsive";

export const Container = styled.div`
     height: 80px;
    
     
     
`
export const Wrapper = styled.div`
     padding: 5px 20px;
     display: flex;
     justify-content: space-between;
     align-items: center;

`

export const Left = styled.div`
     flex: 1;
     display: flex;
     align-items: center;
     @media (max-width: 412px){
        display: none;
    }

     
`

export const Language = styled.span`
    font-size: 16px;
    @media (max-width: 412px){
        display: none;
    }
    

`
export const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    @media (max-width: 412px){
        display: none;
    }

`
export const Input = styled.input`
    border: none;
    

`

export const Center = styled.div`
     flex: 1;
     
     text-align: center;
`
export const Logo = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    ${mobile({fontSize:"24px"})}

    a{
        text-decoration: none;
        color: #000;
    }
`
export const Rigth = styled.div`
     flex: 1;
     display: flex;
     justify-content: space-between;
     align-items: center;
     @media (max-width: 412px){
        
    }
    
     
`
export const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    transition: 0.5s;
    &:hover a{
        color: grey;
    }
    &:hover svg{
        color: grey;
    }
    
    a {
        text-decoration: none;
        color:black;
    }
    @media (max-width: 412px){
        font-size: 15px;
    }
`