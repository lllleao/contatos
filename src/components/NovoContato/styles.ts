import styled from 'styled-components'

type Props = {
    $animacaoErro: boolean
}

export const Error = styled.div<Props>`
    width: 200px;
    padding: 8px 12px;
    background-color: #c32323;
    color: #fff;
    text-align: center;
    border-radius: 8px;
    margin-top: 32px;
    opacity: ${({ $animacaoErro }) => ($animacaoErro ? '1' : '0')};
    ${({ $animacaoErro }) =>
        $animacaoErro
            ? 'animation: erro 1s ease infinite, deCima 1s ease backwards; transition: opacity 1s;'
            : ''}

    @keyframes erro {
        0% {
        }
        25% {
        }
        40% {
            transform: translateX(-26px);
        }
        55% {
            transform: translateX(0);
        }
        65% {
            transform: translateX(-13px);
        }
        75% {
            transform: translateX(0);
        }
        82% {
            transform: translateX(-6.5px);
        }
        87% {
            transform: translateX(0);
        }
        93% {
            transform: translateX(-4px);
        }
        98% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(0);
        }
    }

    @keyframes deCima {
        from {
            margin-top: 0;
        }
        to {
            margin-top: 32px;
        }
    }
`
