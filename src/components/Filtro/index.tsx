import * as S from './styles'

type Props = {
    contador: number
    categoria: string
    ativo?: boolean
}

const Filtro = ({ categoria, contador, ativo }: Props) => {
    return (
        <S.CardFiltro $ativo={ativo}>
            <S.Contador>{contador}</S.Contador>
            <S.Label>{categoria}</S.Label>
        </S.CardFiltro>
    )
}

export default Filtro
