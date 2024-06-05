import Contatos from './containers/Contatos'
import PerfilFiltro from './containers/PerfilFiltro'
import EstiloGlobal, { Container } from './styles/styles'

function App() {
    return (
        <>
            <EstiloGlobal />
            <Container>
                <PerfilFiltro />
                <Contatos />
            </Container>
        </>
    )
}

export default App
