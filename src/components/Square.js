import styled from "styled-components";

export default function Square({ isButtonDisable, value, onSquareClick }) {
  const ButtonStyled = styled.button`
    width: 100px;
    height: 100px;
    background: white;
    color: black;
    font-size: 4em;
    font-weight: lighter;
  `;
  return (
    <ButtonStyled disabled={isButtonDisable} onClick={onSquareClick}>
      {value}
    </ButtonStyled>
  );
}
