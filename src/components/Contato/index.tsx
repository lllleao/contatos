import { useEffect, useState } from 'react'
import * as S from './styles'

type Props = {
    nome: string
    email: string
    telefone: string
    categoria: string
    id: number
}

const Contato = ({
    nome,
    categoria: categoriaOriginal,
    email: emailOriginal,
    telefone
}: Props) => {
    const [editando, setEditando] = useState(false)

    const [email, setEmail] = useState('')
    const [numero, setNumero] = useState('')
    const [contato, setContato] = useState('')
    const [categoria, setCategoria] = useState('')

    const [erroEmail, setErroEmail] = useState(false)
    const [erroNumero, setErroNumero] = useState(false)
    const [erroContato, setErroContato] = useState(false)

    useEffect(() => {
        if (telefone.length > 0) {
            setNumero(telefone)
        }
    }, [telefone])

    useEffect(() => {
        if (emailOriginal.length > 0) {
            setEmail(emailOriginal)
        }
    }, [emailOriginal])

    useEffect(() => {
        if (nome.length > 0) {
            setContato(nome)
        }
    }, [nome])

    useEffect(() => {
        if (categoriaOriginal.length > 0) {
            setCategoria(categoriaOriginal)
        }
    }, [categoriaOriginal])

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
            setErroNumero(true)
        } else {
            setErroNumero(false)
        }
    }

    function emailValido(value: string) {
        const valor = value
        const re = /\S+@\S+\.com/
        const contido = re.test(valor)
        setEmail(valor)

        setErroEmail(!contido)
    }

    const contatoValido = (value: string) => {
        setContato(value)

        value.length === 0 ? setErroContato(true) : setErroContato(false)
    }

    const salvar = () => {
        setContato(contato)
        setEmail(email)
        setNumero(numero)
        setCategoria(categoria)
        setEditando(!editando)
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
                            disabled={!editando}
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
                            disabled={!editando}
                            placeholder="exemplo@email.com"
                        />
                        <S.Incorreto $erro={erroEmail}>
                            email incorreto
                        </S.Incorreto>
                    </div>
                    <div>
                        <S.EamilPhone
                            type="tel"
                            value={numero}
                            onChange={(e) => numeroMask(e.target.value)}
                            disabled={!editando}
                            maxLength={15}
                            placeholder="(xx) x xxxx-xxxx"
                        />
                        <S.Incorreto $erro={erroNumero}>
                            numero incorreto
                        </S.Incorreto>
                    </div>
                    {/* <S.Categoria>{categoria}</S.Categoria> */}
                    <S.Opcoes
                        disabled={!editando}
                        value={categoria}
                        id="categoria"
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="familia">Familia</option>
                        <option value="trabalho">Trabalho</option>
                        <option value="amigos">Amigos</option>
                    </S.Opcoes>
                </S.Informacoes>
                {editando ? (
                    <>
                        <S.BotaoSalvar onClick={salvar}>Salvar</S.BotaoSalvar>
                        <S.BotaoRemover onClick={() => setEditando(!editando)}>
                            Cancelar
                        </S.BotaoRemover>
                    </>
                ) : (
                    <>
                        <S.Botao onClick={() => setEditando(!editando)}>
                            Editar
                        </S.Botao>
                        <S.BotaoRemover>Remover</S.BotaoRemover>
                    </>
                )}
            </S.CardContato>
        </>
    )
}

export default Contato
