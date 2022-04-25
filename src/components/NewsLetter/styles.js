import styled from 'styled-components'

export const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    @media (max-width: 412px){
        height: 40vh;
    }
`
export const Title = styled.h1`
    font-size: 70px;
    margin-bottom:20px;

    @media (max-width: 412px){
        font-size:50px;
        text-align:center;
    }
`
export const Desc = styled.div`
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 20px;

    @media (max-width: 412px){
        font-size:25px;
        text-align:center;
    }

`
export const InputContainer = styled.div`
    width: 60%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
    @media (max-width: 412px){
        width:auto;
        margin: 2px;
    }

    @media (max-width: 384px){
        width: auto;
        margin-left: -200px;
        margin: 2px;
    }
`
export const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    font-size: 20px;

    @media (max-width: 384px){
        width: 200px;
    }

    
`
export const Button = styled.button`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border:none;
    background-color: teal;
    border-radius: 5px;
    color: white;
    @media (max-width: 384px){
        width: 100px;
    }

    
    

    svg{
        margin-left: 5px;
    }
`