import styled from 'styled-components'

export const Aside = styled.aside`
    padding: 20px;
    height: 100vh;
    background-color: #262038;
`

export const Perfil = styled.div`
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 32px 0 64px;
        img {
            width: 150px;
            border-radius: 50%;
            margin-bottom: 16px;
        }
        h3 {
            margin-bottom: 8px;
            color: #fff;
        }
    }
    ul {
        color: #fff;
        li {
            margin-bottom: 8px;

            i {
                margin-right: 8px;
            }
            a {
                color: #fff;
            }
        }
    }
`

export const CardsFiltro = styled.div`
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`

export const Email = styled.em`
    color: #eee;
`
