import BotaoAdicionar from '../../components/BotaoAdicionar'
import Contatos from '../../containers/Contatos'
import PerfilFiltro from '../../containers/PerfilFiltro'

const Home = () => (
    <>
        <PerfilFiltro />
        <Contatos novoContato={true} />
        <BotaoAdicionar />
    </>
)

export default Home
