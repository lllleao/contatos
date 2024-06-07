import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contatos from '../../models/Contatos'

type PropsContato = {
    itens: Contatos[]
    tarefaExiste: boolean
}

const initialState: PropsContato = {
    itens: [
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
    ],
    tarefaExiste: false
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (
            state,
            action: PayloadAction<
                Omit<Contatos, 'nome' | 'telefone' | 'email' | 'categoria'>
            >
        ) => {
            state.itens = state.itens.filter((c) => c.id !== action.payload.id)
        },
        salvar: (state, action: PayloadAction<Contatos>) => {
            const indexContato = state.itens.findIndex(
                (e) => e.id === action.payload.id
            )

            if (indexContato >= 0) {
                console.log(action.payload.nome)
                state.itens[indexContato].nome = action.payload.nome
                state.itens[indexContato].email = action.payload.email
                state.itens[indexContato].telefone = action.payload.telefone
                state.itens[indexContato].categoria = action.payload.categoria
            }
        },
        adicionar: (state, action: PayloadAction<Omit<Contatos, 'id'>>) => {
            const entrada = action.payload
            if (
                state.itens.some(
                    (c) =>
                        c.nome.toLocaleLowerCase() ===
                        entrada.nome.toLocaleLowerCase()
                )
            ) {
                state.tarefaExiste = true
            } else {
                const novoId = state.itens.length + 1
                const novoContato = {
                    id: novoId,
                    nome: entrada.nome,
                    email: entrada.nome,
                    telefone: entrada.telefone,
                    categoria: entrada.categoria
                }
                state.itens.push(novoContato)
                state.tarefaExiste = false
            }
        }
    }
})

export const { remover, salvar, adicionar } = contatosSlice.actions
export default contatosSlice.reducer
