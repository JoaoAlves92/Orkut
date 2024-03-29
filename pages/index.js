import React, { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box'
import Nav from '../src/components/Nav';
import CardPessoa from '../src/components/CardPessoa';
import Botao from '../src/components/Botao';
import Input from '../src/components/Input';
import ItemPerfil from '../src/components/ItemPerfil';
import Post from '../src/components/Post';
import axios from 'axios';

export const ProfileSideBar = ({usuario}) => {
  return (
    <Box>
          <img src={usuario.avatar != undefined ? usuario.avatar : 'https://alurakut.vercel.app/default_profile.svg'} width="300px" height="300px"/>
          <div style={{ borderTop: '1px solid #ECF2FA', borderBottom: '1px solid #ECF2FA', marginTop: '1rem', paddingTop: '8px', paddingBottom: '8px'}}>
            <h2 style={{ color: '#2E7BB4', fontSize: '1rem' }}>{usuario.nome}</h2><br></br>
            <p style={{ color: '#999999', fontSize: '0.9rem'}}>{usuario.statusRelacionamento ? usuario.statusRelacionamento : 'solteiro(a)'},<br></br>Brasil</p>
          </div>

          <div style={{ color: '#2E7BB4', marginTop: '1rem', lineHeight: '0.5rem'}}>
            <a style={{ display: 'flex', alignItems: 'center'}}>
              <img src="https://alurakut.vercel.app/icons/user.svg" style={{marginRight: '0.5rem'}}/>
              Perfil</a><br></br>
            <a style={{ display: 'flex', alignItems: 'center'}}>
              <img src="https://alurakut.vercel.app/icons/book.svg" style={{marginRight: '0.5rem'}}/>
              Recados</a> <br></br>
            <a style={{ display: 'flex', alignItems: 'center'}}>
              <img src="https://alurakut.vercel.app/icons/camera.svg" style={{marginRight: '0.5rem'}}/>
              Fotos</a> <br></br>
            <a style={{ display: 'flex', alignItems: 'center'}}>
              <img src="https://alurakut.vercel.app/icons/video-camera.svg" style={{marginRight: '0.5rem'}}/>
              Vídeos</a> <br></br>
            <a style={{ display: 'flex', alignItems: 'center'}}>
              <img src="https://alurakut.vercel.app/icons/sun.svg" style={{marginRight: '0.5rem'}}/>
              Depoimentos</a>
          </div>

          <div style={{ borderTop: '1px solid #ECF2FA', borderBottom: '1px solid #ECF2FA', marginTop: '1rem', paddingTop: '8px', paddingBottom: '8px', color: '#2E7BB4' }}>
            <h3 style={{ color: '#999999', fontWeight: 'bold', fontSize: '16px' }}>Apps</h3>
            <a style={{ display: 'flex', alignItems: 'center', fontSize: '15px', marginTop: '1rem'}}>
              <img src="https://alurakut.vercel.app/icons/plus.svg" style={{marginRight: '0.5rem'}}/>
              Adicionar apps</a><br></br>
          </div>
        </Box>
  );
}

const WelcomeBox = ({usuario}) => {
  return (
    <Box>
          <p style={{ color: '#333333', fontSize: '28px', fontWeight: 'normal' }}>Bem vindo(a), {usuario.nome}</p>
          <p style={{ fontSize: '14px', marginTop: '8px', color: '#999999' }}><span style={{ fontWeight: 'bold', fontSize: '16px' }}>Sorte de hoje:</span> O melhor profeta do futuro é o passado</p> <br></br>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <ItemPerfil>
              <p>Recados</p>
              <div style={{ display: 'flex' }}>
              <img src="https://alurakut.vercel.app/icons/book.svg"/>
              <span style={{ color: '#2E7BB4', marginLeft: '0.5rem' }}>0</span>
              </div>
            </ItemPerfil>
            <ItemPerfil>
              <p>Fotos</p>
              <div style={{ display: 'flex' }}>
              <img src="https://alurakut.vercel.app/icons/camera.svg"/>
              <span style={{ color: '#2E7BB4', marginLeft: '0.5rem' }}>0</span>
              </div>
            </ItemPerfil>
            <ItemPerfil>
              <p>Vídeos</p>
              <div style={{ display: 'flex' }}>
              <img src="https://alurakut.vercel.app/icons/video-camera.svg"/>
              <span style={{ color: '#2E7BB4', marginLeft: '0.5rem' }}>0</span>
              </div>
            </ItemPerfil>
            <ItemPerfil>
              <p>Fãs</p>
              <div style={{ display: 'flex' }}>
              <img src="https://alurakut.vercel.app/icons/star.svg"/>
              <span style={{ color: '#2E7BB4', marginLeft: '0.5rem' }}>0</span>
              </div>
            </ItemPerfil>
            <ItemPerfil>
              <p>Mensagens</p>
              <div style={{ display: 'flex' }}>
              <img src="https://alurakut.vercel.app/icons/email.svg"/>
              <span style={{ color: '#2E7BB4', marginLeft: '0.5rem' }}>0</span>
              </div>
            </ItemPerfil>
            <ItemPerfil>
              <p>confiável</p>
              <div style={{ display: 'flex' }}>
                <img src="https://alurakut.vercel.app/icons/smile.svg"/>
                <img src="https://alurakut.vercel.app/icons/smile.svg"/>
                <img src="https://alurakut.vercel.app/icons/smile.svg"/>
              </div>
            </ItemPerfil>
            <ItemPerfil>
              <p>legal</p>
              <div style={{ display: 'flex' }}>
                <img src="https://alurakut.vercel.app/icons/cool.svg"/>
                <img src="https://alurakut.vercel.app/icons/cool.svg"/>
                <img src="https://alurakut.vercel.app/icons/cool.svg"/>
              </div>
            </ItemPerfil>
            <ItemPerfil>
              <p>sexy</p>
              <div style={{ display: 'flex' }}>
                <img src="https://alurakut.vercel.app/icons/heart.svg"/>
                <img src="https://alurakut.vercel.app/icons/heart.svg"/>
                <img src="https://alurakut.vercel.app/icons/heart.svg"/>
              </div>
            </ItemPerfil>
          </div>
        </Box>
  );
}

const AmizadesBox = ({dados}) => {
  return (
    <Box>
          <h3 style={{ fontWeight: 'bold', fontSize: '16px' }}>Meus amigos <span style={{ color: '#2E7BB4' }}>({dados != undefined ? dados.length : 0})</span></h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {dados != undefined ? dados.map( pessoa => (
              <CardPessoa key={pessoa.nome} imagem={pessoa.avatar_url} nome={pessoa.nome}/>
          )) : undefined}
          </div>
          <p style={{ fontWeight: 'bold', fontSize: '14px', color: '#2E7BB4', marginTop: '1rem'}}>Ver todos</p>
    </Box>
  );
}

const ComunidadesBox = ({comunidades}) => {
  return(
    <Box>
        <h3 style={{ fontWeight: 'bold', fontSize: '16px' }}>Minhas comunidades <span style={{ color: '#2E7BB4' }}>({comunidades.length})</span></h3>
        {comunidades.map( comunidade => (
            <CardPessoa key={comunidade.id} imagem={comunidade.imageurl} nome={comunidade.titulo}/>
        ))}
          <p style={{ fontWeight: 'bold', fontSize: '14px', color: '#2E7BB4', marginTop: '1rem'}}>Ver todos</p>
    </Box>
  );
}

export default function Home(props) {
  const usuario = props.usuario //JSON.parse(props.usuario)
  //const [dados, setDados] = useState([])
  const [comunidades, setComunidade] = useState([])
  const dados = [
    {
      nome: 'John',
      avatar_url: 'https://api-orkut.vercel.app/images/minha-foto.jpeg'
    }
  ]

  useEffect(()=>{
    /* axios.get(`https://api-orkut-82545.herokuapp.com/${usuario.slug}`)
        .then( res => {
          setDados(res.data.user.amigos)
          console.log(res.data.user.amigos)
        })
        .catch(()=> {
          console.log('erro ao se conectar')
        }) */
    
    // comunidades

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '4d000e5649c0cd9ecd43828292ab12',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        query: 'query { allComunidades { titulo imageurl slug id} }'
      })
    })
      .then( res => res.json())
      .then((resCompleta)=>{
          const comunidadesDoDato = resCompleta.data.allComunidades
          setComunidade(comunidadesDoDato)
      })
  }, [])

  return (
    <>
    <Nav usuario={usuario}/>
    <MainGrid>
      <div style={{ gridArea: 'Perfil' }} className="Profile">
        <ProfileSideBar usuario={usuario}/>
      </div>

      <div style={{ gridArea: 'Conteudo' }}>
        <WelcomeBox usuario={usuario}/>
         <br></br>
        <Box>
          <p style={{ color: '#333333', fontSize: '18px', fontWeight: 'normal' }}>O que você deseja fazer?</p><br></br>
          <div style={{ display: 'flex', overflow: 'hidden'}}>
          <Botao mensagem="Criar um post" active></Botao>
          <Botao mensagem="Escrever depoimento"></Botao>
          <Botao mensagem="Deixar um scrap"></Botao>
          </div>
          <Input placeholder="Escreva aqui"></Input>
          <Input placeholder="Insira uma url para a imagem (opcional)"></Input>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '1rem'}}>
            <Botao mensagem="Postar" active></Botao>
          </div>
        </Box> <br></br>
        <Post post="post" usuario={usuario}/> <br></br>
      </div>

      <div style={{ gridArea: 'Relacionamentos' }}>
        <AmizadesBox dados={dados}/>
         <br></br>
        <ComunidadesBox comunidades={comunidades}/>
      </div>
    </MainGrid>
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = parseCookies(context)
  axios.defaults.timeout = 4000;
  let validUser = undefined;
  const config = {
    headers: {
      'Authorization': `Bearer ${cookies.TOKEN}`,
      "Content-type": "application/json"
    }
  };
  const data = {}

  await axios.post('https://api-orkut.vercel.app/auth/me', data, config,)
  .then((res) => {
          validUser = res.data.user
  }).catch(e => console.log(e))

  if (validUser) {
    return {
      props: {token: cookies.TOKEN || null, usuario: validUser || null} // will be passed to the page component as props
    }
  } else {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    return { props: {ok: false}}
  }
} 
