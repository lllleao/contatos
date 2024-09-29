import styled from 'styled-components'

export const Main = styled.main`
    background-color: #362d4f;
    padding: 40px;
    overflow-y: auto;
    height: 100vh;
    p {
        color: #fff;
    }

    @media (max-width: 767px) {
        height: auto;
    }
`
