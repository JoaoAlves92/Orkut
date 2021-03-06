import styled from "styled-components";

const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;

  .Profile {
    display: none;
    @media (min-width: 860px){
      display: block;
    }
  }

  @media (min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "Perfil Conteudo Relacionamentos";
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default MainGrid;