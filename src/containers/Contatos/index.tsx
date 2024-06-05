import Contato from '../../components/Contato'
import { Titulo } from '../../styles/styles'
import * as S from './styles'

const dados = [
    {
        nome: 'Juliana',
        email: 'juliamarques@gmail.com',
        telefone: '(85) 9 8888-8888',
        categoria: 'familia',
        id: 1
    },
    {
        nome: 'Paulo',
        email: 'pauloalves@gmail.com',
        telefone: '(85) 9 8888-8888',
        categoria: 'amigos',
        id: 2
    },
    {
        nome: 'Rafa',
        email: 'rafaelasouza@gmail.com',
        telefone: '(85) 9 8888-8888',
        categoria: 'trabalho',
        id: 3
    }
]

const Contatos = () => {
    return (
        <S.Main>
            <Titulo as="h1">Lista de Contatos</Titulo>
            <p>Existem 3 contatos marcados como todos</p>
            <ul>
                {dados.map(({ nome, id, telefone, email, categoria }) => (
                    <li key={nome}>
                        <Contato
                            nome={nome}
                            id={id}
                            telefone={telefone}
                            email={email}
                            categoria={categoria}
                        />
                    </li>
                ))}
            </ul>
        </S.Main>
    )
}

export default Contatos
