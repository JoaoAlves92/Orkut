import styled from "styled-components";

const CardPessoaStyle = styled.div`
    display: inline-block;
    margin-right: 0.5rem;
    margin-top: 1rem;
    .nome {
        width: 82px;
        position: absolute;
        font-weight: 500;
        font-size: 12px;
        color: white;
        margin-top: -2rem;
        padding-left: 5px;
        word-wrap: break-word;
    }
    .imagem {
        min-width: 82px;
        max-width: 84px;
        height: 102px;
        border-radius: 8px;
        filter: brightness(70%);
    }

    :hover{
        cursor: pointer;
        filter: brightness(60%);
    }
`;

function CardPessoa({imagem, nome}){
    return(
        <CardPessoaStyle>
            <img className="imagem" src={imagem}/>
            <p className="nome">{nome}</p>
        </CardPessoaStyle>
    );
}

export default CardPessoa;