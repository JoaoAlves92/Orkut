import styled from "styled-components";

const ButtonContainer = styled.button`
  background-color: #2e7bb4;
  color: white;
  border-radius: 8px;
  padding: 12px;
  width: 100%;
  border: none;

  &:hover {
    background-color: #2f4a71;
    cursor: pointer;
  }
`;

export const Button = (props) => {
  const { onClick, children } = props;

  return (
    <ButtonContainer onClick={onClick} {...props}>
      {children}
    </ButtonContainer>
  );
};
