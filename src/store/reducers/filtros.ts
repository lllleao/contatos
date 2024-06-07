import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type PropsFiltro = {
    categoria: 'trabalho' | 'amigos' | 'familia' | 'todos'
}

const initialState: PropsFiltro = {
    categoria: 'todos'
}

const filtroSlice = createSlice({
    name: 'filtro',
    initialState,
    reducers: {
        insertCategoria: (state, action: PayloadAction<PropsFiltro>) => {
            state.categoria = action.payload.categoria
            console.log(action.payload.categoria)
        }
    }
})

export const { insertCategoria } = filtroSlice.actions
export default filtroSlice.reducer
