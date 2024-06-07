import Contato from '../Contato'
import { Titulo } from '../../styles/styles'
import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import NovoContato from '../../components/NovoContato'

type Props = {
    novoContato: boolean
}

const Contatos = ({ novoContato }: Props) => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const { categoria } = useSelector((state: RootReducer) => state.filtros)

    function filtrar() {
        let contatos = itens

        if (categoria === 'todos') return contatos
        contatos = contatos.filter((c) => c.categoria === categoria)

        return contatos
    }

    const tamanhoFiltro = () => {
        if (categoria === 'todos') return contatos.length

        const tamanho = contatos.filter((c) => c.categoria === categoria).length

        return tamanho
    }

    const contatos = filtrar()
    const tamanho = tamanhoFiltro()

    const retornaMensagem = () => {
        if (tamanho === 1)
            return `Existe ${tamanho} contato marcado como ${categoria}`
        else return `Existem ${tamanho} contatos marcados como ${categoria}`
    }

    const mensagem = retornaMensagem()

    return (
        <S.Main>
            {novoContato ? (
                <>
                    <Titulo as="h1">Lista de Contatos</Titulo>
                    <p>{mensagem}</p>
                    <ul>
                        {contatos.map(
                            ({ nome, id, telefone, email, categoria }) => (
                                <li key={nome}>
                                    <Contato
                                        nome={nome}
                                        id={id}
                                        telefone={telefone}
                                        email={email}
                                        categoria={categoria}
                                    />
                                </li>
                            )
                        )}
                    </ul>
                </>
            ) : (
                <NovoContato />
            )}
        </S.Main>
    )
}

export default Contatos
