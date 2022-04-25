import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    @media (max-width: 412px){
        flex-direction: column;
    }
`