import styled from "styled-components";

const BotaoStyle = styled.button`
    //background-color:  ${ active ? '#6F92BB' : '#D9E6F6'};
    background-color: '#D9E6F6';
    color: '#2E7BB4';
    padding: 9px 12px;
    border: none;
    border-radius: 8px;
    margin-right: 1rem;

    ${({ active }) => active && `
        background-color: #6F92BB;
        color: white;
    `}
`;

export default function Botao({mensagem, active}){
    return(
        <BotaoStyle active={active}>
            {mensagem}
        </BotaoStyle>
    );
}