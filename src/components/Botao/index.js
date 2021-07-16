import styled from "styled-components";

export default function Botao({mensagem, active}){

    const BotaoStyle = styled.button`
        background-color:  ${ active ? '#6F92BB' : '#D9E6F6'};
        color: ${ active ? 'white' : '#2E7BB4'};
        padding: 9px 12px;
        border: none;
        border-radius: 8px;
        margin-right: 1rem;
    `;
    return(
        <BotaoStyle>
            {mensagem}
        </BotaoStyle>
    );
}