import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Logo from '../src/components/Logo';

const Estilo = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    .logoArea {
        background-color: white;
        padding: 1.5rem 3rem;
        border-radius: 8px;
        margin: 1rem;
        text-align: center;
    }
    .img-logo {
        margin: 0px auto;
        font-size: 50px;
    }

    .logoArea p:not(:last-child) {
        margin-bottom: 1rem;
    }

    .logoArea strong {
        color: #D81D99;
    }

    .box {
        background-color: #F1F9FE;
        padding: 1.5rem 3rem;
        border-radius: 8px;
        margin: 1rem;
        text-align: center;
    }

    .formArea input {
        margin-top: 1rem;
        border: 1px solid #C5C6CA;
        border-radius: 8px;
        display: block;
        width: 100%;
        padding: 13px 16px;
    }

    .formArea button {
        background-color: #2E7BB4;
        color: white;
        border-radius: 8px;
        padding: 12px;
        width: 100%;
        border: none;
        margin-top: 1rem;
    }

    .formArea button:hover {
        background-color: #2F4A71;
        cursor: pointer;
    }

    .formArea a {
        text-decoration: none;
        color: #2E7BB4;
    }

    .footerArea {
        background-color: #BBCDE8;
        margin: 1rem;
        border-radius: 8px;
        padding: 14px;
    }
    .footerArea a {
        color: #388BB0;
        text-decoration: none;
    }

    @media (min-width: 860px){
        max-width: 1110px;
        margin: 0px auto;

        .loginScreen {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 350px 350px 400px;
        }

        .logoArea {
            width: auto;
            height: auto;
            grid-column: 1 / 3;
            margin: 1rem 0px;
        }

        .box {
            margin: 1rem 0px;
        }

        .formArea {
            grid-column: 3 / 4;
        }

        .footerArea {
            grid-column: 1 / 4;
            text-align: center;
            margin: 0px;
        }

        .img-logo {
            font-size: 80px;
            margin-bottom: 1rem;
        }
    }
`;

export default function LoginScreen() {
  const router = useRouter(); 
  const [usuario, setUsuario] = useState('');

  return (
    <Estilo as="main">
      <div className="loginScreen">
        <section className="logoArea">
          <Logo className="img-logo">Orkut</Logo>

          <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
          <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
          <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
        </section>

        <section className="formArea">
          <form className="box" onSubmit={(e) => {
              e.preventDefault()
              router.push('/')
          }}>
            <p>
              Acesse agora mesmo com seu email !
            </p>
            <input
                placeholder="Usuário"
                value={usuario}
                onChange={(e) => {
                  setUsuario(e.target.value)
                }}
            />
            <button type="submit">
              Login
            </button>
          </form>

          <footer className="box">
            <p>
              Ainda não é membro? <br />
              <a href="/cadastro">
                <strong>
                  ENTRAR JÁ
              </strong>
              </a>
            </p>
          </footer>
        </section>

        <footer className="footerArea">
          <p>
            © 2021 orkut-theta-kappa.com.br - <a href="/">Sobre o Orkut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
          </p>
        </footer>
      </div>
    </Estilo>
  )
} 