import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Logo from '../src/components/Logo';


const Estilo = styled.div`
    height: 100%;
    padding: 4px 16px;

    .img-logo {
        margin: 0 auto;
        text-align: center;
    }

    form {
        background-color: #F1F9FE;
        padding: 1rem;
        border-radius: 8px;
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    input {
        border: 1px solid #C5C6CA;
        border-radius: 8px;
        padding: 13px 16px;
    }

    button {
        background-color: #2E7BB4;
        color: white;
        border-radius: 8px;
        padding: 12px;
        width: 100%;
        border: none;
    }

    button:hover {
        background-color: #2F4A71;
        cursor: pointer;
    }

    select {
        border: 1px solid #C5C6CA;
        padding: 13px 16px;
        border-radius: 8px;
    }
`;

export default function CadastroScreen(){
    const router = useRouter(); 
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [status, setStatus] = useState('solteiro(a)')

    return(
        <Estilo>
            <Logo className="img-logo">Orkut</Logo> <br></br>
            <form onSubmit={(e) => {
                e.preventDefault()
                axios.post('https://api-orkut-82545.herokuapp.com/auth/cadastro', {
                    nome: nome,
                    email: email,
                    senha: senha,
                    statusRelacionamento: status
                })
                    .then(res => {
                        router.push('/login')
                    })
            }}>
                <h2>Cadastre-se aqui</h2>
                <br></br>
                <input
                    value={nome}
                    placeholder="Nome"
                    onChange={(e) => {
                        setNome(e.target.value)
                    }}
                />
                <p style={{ visibility: 'hidden' }}>mensagem escondida</p>
                <input
                    value={email}
                    placeholder="Email"
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <p style={{ visibility: 'hidden' }}>mensagem escondida</p>
                <input
                    value={senha}
                    placeholder="Senha"
                    type="password"
                    onChange={(e) => {
                        setSenha(e.target.value)
                    }}
                />
                <p style={{ visibility: 'hidden' }}>mensagem escondida</p>

                <select name="statusRelacionamento" defaultValue={status} onChange={
                    (e) => setStatus(e.target.value)
                    }>
                    <option selected value="solteiro(a)">solteiro(a)</option>
                    <option value="em um relacionamento sério">em um relacionamento sério</option>
                    <option value="casado(a)">casado(a)</option>
                    <option value="enrolado">enrolado</option>
                </select> <br></br>
                <button type="submit">
                    Cadastrar
                </button>
            </form>
        </Estilo>
    )
}