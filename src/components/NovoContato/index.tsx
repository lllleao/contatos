import { useState } from 'react'
import * as S from '../../styles/cards'
import { Botao } from '../BotaoAdicionar/styles'
import { Error } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { adicionar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

const NovoContato = () => {
    const { tarefaExiste } = useSelector((state: RootReducer) => state.contatos)
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [numero, setNumero] = useState('')
    const [contato, setContato] = useState('')
    const [categoria, setCategoria] = useState('familia')

    const [erroEmail, setErroEmail] = useState(false)
    const [erroNumero, setErroNumero] = useState(false)
    const [erroContato, setErroContato] = useState(false)

    function numeroMask(value: string) {
        let valor = value
        if (valor.length === 1) {
            setNumero(valor)
        }
        valor = valor.replace(/\D/g, '')
        valor = valor.replace(/(\d{2})(\d)/, '($1) $2')
        valor = valor.replace(/(\d)(\d{4})$/, '$1-$2')

        setNumero(valor)
        if (valor.length <= 14) {
            setErroNumero(false)
        } else {
            setErroNumero(true)
        }
    }

    function emailValido(value: string) {
        const valor = value
        const re = /\S+@\S+\.com/
        const contido = re.test(valor)
        setEmail(valor)

        setErroEmail(contido)
    }

    const contatoValido = (value: string) => {
        setContato(value)

        value.length === 0 ? setErroContato(false) : setErroContato(true)
    }

    const salvarContato = () => {
        console.log(erroContato, erroEmail, erroNumero, !tarefaExiste)
        const existeTarefa = itens.some(
            (c) => c.nome.toLocaleLowerCase() === contato.toLocaleLowerCase()
        )

        if (erroContato && erroEmail && erroNumero) {
            console.log('certo')
            dispatch(
                adicionar({
                    email,
                    telefone: numero,
                    nome: contato,
                    categoria
                })
            )
        }

        if (!existeTarefa) {
            navigate('/')
        }
    }

    return (
        <>
            <S.CardContato>
                <S.Informacoes>
                    <div>
                        <S.Nome
                            value={contato}
                            type="text"
                            onChange={(e) => contatoValido(e.target.value)}
                            placeholder="nome"
                        />
                        <S.Incorreto $erro={erroContato}>
                            Insira um nome válido
                        </S.Incorreto>
                    </div>
                    <div>
                        <S.EamilPhone
                            type="email"
                            value={email}
                            onChange={(e) => emailValido(e.target.value)}
                            placeholder="exemplo@email.com"
                        />
                        <S.Incorreto $erro={erroEmail}>
                            Insira um email válido
                        </S.Incorreto>
                    </div>
                    <div>
                        <S.EamilPhone
                            type="tel"
                            value={numero}
                            onChange={(e) => numeroMask(e.target.value)}
                            maxLength={15}
                            placeholder="(xx) x xxxx-xxxx"
                        />
                        <S.Incorreto $erro={erroNumero}>
                            Insira um número válido
                        </S.Incorreto>
                    </div>
                    <S.Opcoes
                        value={categoria}
                        id="categoria"
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="familia">Familia</option>
                        <option value="trabalho">Trabalho</option>
                        <option value="amigos">Amigos</option>
                    </S.Opcoes>
                </S.Informacoes>
                <S.BotaoSalvar onClick={salvarContato}>Salvar</S.BotaoSalvar>
            </S.CardContato>
            <Error $animacaoErro={tarefaExiste}>Esse contato já existe</Error>
            <Botao to="/">
                <i className="fa-solid fa-house"></i>
            </Botao>
        </>
    )
}

export default NovoContato
