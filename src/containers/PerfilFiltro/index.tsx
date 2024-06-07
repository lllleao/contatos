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
            <Filtro categoria="trabalho" />
            <Filtro categoria="familia" />
            <Filtro categoria="amigos" />
            <Filtro categoria="todos" />
        </S.CardsFiltro>
    </S.Aside>
)

export default PerfilFiltro
