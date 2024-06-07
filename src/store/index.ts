import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatos'
import filtrosReduce from './reducers/filtros'

const store = configureStore({
    reducer: {
        contatos: contatosReducer,
        filtros: filtrosReduce
    }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
