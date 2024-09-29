import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Botao = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #e01ce0;
    position: absolute;
    bottom: 40px;
    right: 100px;
    color: #fff;
    font-size: 32px;
    cursor: pointer;
    @media (max-width: 767px) {
        bottom: 22%;
        right: 5%;
        margin-bottom: 12px;
    }

    @media (max-height: 791px) {
        bottom: 9%;
    }
`
