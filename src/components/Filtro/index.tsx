import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { insertCategoria } from '../../store/reducers/filtros'
import { RootReducer } from '../../store'

type Props = {
    categoria: 'trabalho' | 'amigos' | 'familia' | 'todos'
}

const Filtro = ({ categoria }: Props) => {
    const categoriaState = useSelector(
        (state: RootReducer) => state.filtros.categoria
    )
    const contatos = useSelector((state: RootReducer) => state.contatos.itens)

    const dispatch = useDispatch()

    const inserirTipo = () => {
        dispatch(insertCategoria({ categoria }))
    }

    const tamanhoContador = () => {
        if (categoria === 'todos') return contatos.length

        const tamanho = contatos.filter((c) => c.categoria === categoria).length

        return tamanho
    }

    const contador = tamanhoContador()

    return (
        <S.CardFiltro
            onClick={() => inserirTipo()}
            $ativo={categoriaState === categoria}
        >
            <S.Contador>{contador}</S.Contador>
            <S.Label>{categoria}</S.Label>
        </S.CardFiltro>
    )
}

export default Filtro
