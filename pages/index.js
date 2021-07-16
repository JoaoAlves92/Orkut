import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box'
import Nav from '../src/components/Nav';
import CardPessoa from '../src/components/CardPessoa';
import Botao from '../src/components/Botao';
import Input from '../src/components/Input';
import ItemPerfil from '../src/components/ItemPerfil';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import VideocamIcon from '@material-ui/icons/Videocam';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import AddIcon from '@material-ui/icons/Add';

export const ProfileSideBar = () => {
  return (
    <Box>
          <img src="https://github.com/JoaoAlves92.png"/>
          <div style={{ borderTop: '1px solid #ECF2FA', borderBottom: '1px solid #ECF2FA', marginTop: '1rem', paddingTop: '8px', paddingBottom: '8px'}}>
            <h2 style={{ color: '#2E7BB4', fontSize: '14px' }}>João Marangoni</h2><br></br>
            <p style={{ color: '#999999', fontSize: '12px'}}>Masculino,<br></br>solteiro(a),<br></br>Brasil</p>
          </div>

          <div style={{ color: '#2E7BB4', marginTop: '1rem', lineHeight: '0.5rem'}}>
            <a style={{ display: 'flex', alignItems: 'center'}}><PersonIcon/> Perfil</a><br></br>
            <a style={{ display: 'flex', alignItems: 'center'}}><MenuBookIcon/>Recados</a> <br></br>
            <a style={{ display: 'flex', alignItems: 'center'}}><CameraAltIcon/>Fotos</a> <br></br>
            <a style={{ display: 'flex', alignItems: 'center'}}><VideocamIcon/>Vídeos</a> <br></br>
            <a style={{ display: 'flex', alignItems: 'center'}}><Brightness7Icon/>Depoimentos</a>
          </div>

          <div style={{ borderTop: '1px solid #ECF2FA', borderBottom: '1px solid #ECF2FA', marginTop: '1rem', paddingTop: '8px', paddingBottom: '8px', color: '#2E7BB4' }}>
            <h3 style={{ color: '#999999', fontWeight: 'bold', fontSize: '16px' }}>Apps</h3>
            <a style={{ display: 'flex', alignItems: 'center', fontSize: '15px', marginTop: '1rem'}}><AddIcon style={{ color: '#64C37D' }}/>Adicionar apps</a><br></br>
          </div>
        </Box>
  );
}

const WelcomeBox = () => {
  return (
    <Box>
          <p style={{ color: '#333333', fontSize: '28px', fontWeight: 'normal' }}>Bem vindo(a), João</p>
          <p style={{ fontSize: '14px', marginTop: '8px', color: '#999999' }}><span style={{ fontWeight: 'bold', fontSize: '16px' }}>Sorte de hoje:</span> O melhor profeta do futuro é o passado</p> <br></br>
          <div style={{ display: 'flex' }}>
            <ItemPerfil>
              <p>Recados</p><span style={{ color: '#2E7BB4'}}>0</span>
            </ItemPerfil>
            <ItemPerfil>
              <p>Fotos</p><span style={{ color: '#2E7BB4'}}>0</span>
            </ItemPerfil>
            <ItemPerfil>
              <p>Vídeos</p><span style={{ color: '#2E7BB4'}}>0</span>
            </ItemPerfil>
            <ItemPerfil>
              <p>Fãs</p><span style={{ color: '#2E7BB4'}}>100</span>
            </ItemPerfil>
            <ItemPerfil>
              <p>Mensagens</p><span style={{ color: '#2E7BB4'}}>0</span>
            </ItemPerfil>
            <ItemPerfil>
              <p>confiável</p>
              <div>
                <EmojiEmotionsIcon style={{ color: '#FFD54F', backgroundColor: 'black', fontSize: '20px'}}/>
                <EmojiEmotionsIcon style={{ color: '#FFD54F', backgroundColor: 'black', fontSize: '20px'}}/>
                <EmojiEmotionsIcon style={{ color: '#FFD54F', backgroundColor: 'black', fontSize: '20px', opacity: '60%'}}/>
              </div>
            </ItemPerfil>
            <ItemPerfil>
              <p>legal</p>
              <div>
                <ThumbUpIcon style={{ color: '#96C8EF', fontSize: '20px'}}/>
                <ThumbUpIcon style={{ color: '#96C8EF', fontSize: '20px'}}/>
                <ThumbUpIcon style={{ color: '#96C8EF', fontSize: '20px'}}/>
                </div>
            </ItemPerfil>
            <ItemPerfil>
              <p>sexy</p>
              <div>
                <FavoriteIcon style={{ color: '#FE929F', fontSize: '20px'}}/>
                <FavoriteIcon style={{ color: '#FE929F', fontSize: '20px'}}/>
                <FavoriteIcon style={{ color: '#FE929F', fontSize: '20px'}}/>
                </div>
            </ItemPerfil>
          </div>
        </Box>
  );
}

const AmizadesBox = ({dados}) => {
  return (
    <Box>
          <h3 style={{ fontWeight: 'bold', fontSize: '16px' }}>Meus amigos <span style={{ color: '#2E7BB4' }}>({dados.length})</span></h3>
          {dados.map( pessoa => (
              <CardPessoa key={pessoa.login} imagem={pessoa.avatar_url} nome={pessoa.login}/>
          ))}
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

export default function Home() {
  const [dados, setDados] = useState([])
  const [comunidades, setComunidade] = useState([])

  useEffect(()=>{
    axios.get('https://api.github.com/users/JoaoAlves92/followers')
        .then( res => {
          setDados(res.data)
        })
        .catch(()=> {
          console.log('erro ao se conectar')
        })
    
    // comunidades
    //axios
    /* axios.post('https://graphql.datocms.com/', {
      headers: {
        'Authorization': '4d000e5649c0cd9ecd43828292ab12',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        query: 'query { allComunidades { titulo } }'
      })
    })
        .then( res => {
          console.log(res)
        })  */

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
          console.log(comunidadesDoDato)
          setComunidade(comunidadesDoDato)
      })
    
  }, [])

  return (
    <>
    <Nav>
    </Nav>
    <MainGrid>
      <div style={{ gridArea: 'Perfil' }} className="Profile">
        <ProfileSideBar/>
      </div>

      <div style={{ gridArea: 'Conteudo' }}>
        <WelcomeBox/>
         <br></br>
        <Box>
          <p style={{ color: '#333333', fontSize: '18px', fontWeight: 'normal' }}>O que você deseja fazer?</p><br></br>
          <Botao mensagem="Criar comunidade" active></Botao>
          <Botao mensagem="Escrever depoimento"></Botao>
          <Botao mensagem="Deixar um scrap"></Botao>
          <Input placeholder="Qual vai ser o nome da sua comunidade?"></Input>
        </Box> <br></br>
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
