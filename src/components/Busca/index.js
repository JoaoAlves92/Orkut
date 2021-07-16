import styled from "styled-components";

const Busca = styled.input`
    background-color: #5579A1;
    color: white;
    border: none;
    border-radius: 34px;
    padding: 10px 42px 10px 34px;

    //Muda a cor do placeholder em vários navegadores
    ::placeholder,
    ::-webkit-input-placeholder {
    color: white;
    }
    :-ms-input-placeholder {
        color: white;
    }
`;

export default Busca;