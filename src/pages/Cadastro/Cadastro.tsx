import Contatos from '../../containers/Contatos/index'
import PerfilFiltro from '../../containers/PerfilFiltro'

const Cadastro = () => (
    <>
        <PerfilFiltro />
        <Contatos novoContato={false} />
    </>
)

export default Cadastro
