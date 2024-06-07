class Contatos {
    nome: string
    email: string
    telefone: string
    categoria: string
    id: number

    constructor(
        nome: string,
        email: string,
        telefone: string,
        categoria: string,
        id: number
    ) {
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.categoria = categoria
        this.id = id
    }
}

export default Contatos
