import styled from "styled-components"

export const Container = styled.div`
    flex: 1;
    margin:10px;
    height: 70vh;
    min-height: 70vh;
    position: relative;
    cursor: pointer;
    transition: all ease 1s;
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.5);
    &:hover h1{
        transform: scale(1.5);
    }
    &:hover{
        opacity:0.7;
    }

    @media (max-width: 412px){
        height: 50vh;
        min-height: 50vh;
        
    }
    
    
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`
export const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 50px;
    width: 50%;
    text-align:center;
    text-shadow: 5px 2px 3px rgba(0, 0, 0, 0.54);
    transition: all ease 1s;

    @media (max-width: 412px){
        font-size: 30px;
        
    }
`
export const Button = styled.button`
    border:none;
    padding: 10px;
`