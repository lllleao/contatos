import styled from 'styled-components'

type Props = {
    $erro: boolean
}

export const CardContato = styled.div`
    display: flex;
    align-items: center;
    height: fit-content;
    margin-top: 32px;
    color: #fff;
`

export const Informacoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #a147a1;
    max-width: 1000px;
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    margin-right: 18px;
`

export const EamilPhone = styled.input`
    color: #fff;
    &:disabled {
        border: none;
    }
    border: 2px solid #fff;
    border-radius: 8px;
    padding: 5px;
    background-color: transparent;
    font-size: 16px;
    &::placeholder {
        color: #fff;
    }

    &:focus {
        outline: none;
    }
`

export const Nome = styled(EamilPhone)`
    color: #fff;
`

export const Categoria = styled.p`
    text-transform: capitalize;
`

export const Botao = styled.button`
    padding: 8px 12px;
    background-color: #222;
    border: none;
    color: #fff;
    cursor: pointer;
    border-radius: 8px;
    font-size: 16px;
    margin-right: 12px;
`

export const BotaoRemover = styled(Botao)`
    background-color: #c32323;
`

export const BotaoSalvar = styled(Botao)`
    background-color: green;
`

export const Incorreto = styled.div<Props>`
    opacity: ${({ $erro }) => ($erro ? '0' : '1')};
    position: absolute;
    background-color: #c32323;
    color: #fff;
    padding: 8px;
    margin-top: 8px;
    border-radius: 8px;
    max-width: 190px;
    width: 100%;
    text-align: center;
    transition: opacity 0.5s;
`

export const Opcoes = styled.select`
    padding: 5px;
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 8px;
    opacity: 1;
    font-size: 16px;

    &:disabled {
        opacity: 1;
    }

    option {
        color: #000;
    }
`
