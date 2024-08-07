import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        text-decoration: none;
    }
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 320px auto;
    @media (max-width: 829px) {
        grid-template-columns: 1fr;
    }
`

export const Titulo = styled.h2`
    font-size: 22px;
    margin-bottom: 16px;
    color: #fff;
`

export default EstiloGlobal
