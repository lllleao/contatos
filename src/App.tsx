import store from './store'
import EstiloGlobal, { Container } from './styles/styles'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cadastro from './pages/Cadastro/Cadastro'

function App() {
    const rotas = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/novo',
            element: <Cadastro />
        }
    ])

    return (
        <Provider store={store}>
            <EstiloGlobal />
            <Container>
                <RouterProvider router={rotas} />
            </Container>
        </Provider>
    )
}

export default App
