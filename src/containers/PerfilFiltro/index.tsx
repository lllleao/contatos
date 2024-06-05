import * as S from './styles'
import avatar from '../../assets/imgs/Perfil_menor.png'
import { Titulo } from '../../styles/styles'
import Filtro from '../../components/Filtro'

const PerfilFiltro = () => (
    <S.Aside>
        <Titulo>Perfil</Titulo>
        <S.Perfil>
            <div>
                <img srcSet={avatar} alt="homem de braços cruzados" />
                <h3>Lucas Leão</h3>
                <p>
                    <S.Email>lucasleaolima@gmail.com</S.Email>
                </p>
            </div>
            <ul>
                <li>
                    <i className="fa-solid fa-phone"></i>(85) 9 8888-8888
                </li>
                <li>
                    <i className="fa-brands fa-instagram"></i>
                    <a href="#">@leao_dev</a>
                </li>
            </ul>
        </S.Perfil>
        <S.CardsFiltro>
            <Filtro contador={3} categoria="trabalho" />
            <Filtro contador={3} categoria="familia" />
            <Filtro contador={3} categoria="amigos" />
            <Filtro ativo contador={3} categoria="todos" />
        </S.CardsFiltro>
    </S.Aside>
)

export default PerfilFiltro
