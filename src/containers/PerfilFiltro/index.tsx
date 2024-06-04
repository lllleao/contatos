import avatar from '../public/imgs/Perfil_menor.png'

const PerfilFiltro = () => (
    <aside>
        <h2>Perfil</h2>
        <div>
            <img srcSet={avatar} alt="" />
            <h3>Lucas</h3>
            <p>lucasleaolima@gmail.com</p>
        </div>
        <ul>
            <li>85 9 8888-8888</li>
            <li>
                <a href="#">@leao_dev</a>
            </li>
        </ul>
    </aside>
)

export default PerfilFiltro
