import styled from 'styled-components'

type Props = {
    $ativo?: boolean
}

export const CardFiltro = styled.div<Props>`
    border: 1px solid ${({ $ativo }) => ($ativo ? '#d17bff' : '#eee')};
    padding: 12px;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    color: ${({ $ativo }) => ($ativo ? '#d17bff' : '#eee')};
`

export const Contador = styled.span`
    display: block;
    margin-bottom: 8px;
`

export const Label = styled.span``
