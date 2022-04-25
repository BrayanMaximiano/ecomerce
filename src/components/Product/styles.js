import styled from 'styled-components'

export const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease 0.5s;

    @media (max-width: 412px){
        opacity:1;
        background-color: rgba(0,0,0,0.001);
        
    }


`

export const Container = styled.div`
    flex: 1;
    margin: 5px;
    width: 280px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }

    @media (max-width: 412px){
        height: 200px;
        width: 200px;
        min-width:200px;
        
    }
`
export const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;

    @media (max-width: 412px){
        height: 100%;
        width: 250px;
        
    }
`
export const Image = styled.img`
    height: 75%;
    z-index: 2;

    @media (max-width: 412px){
        height: 100%;
        
    }
`

export const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all ease 0.5s;
    cursor: pointer;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
`