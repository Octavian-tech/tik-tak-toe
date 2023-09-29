import React from "react";
import styled from "styled-components";

function Button({ handleOnClick, textContent }) {
  const ButtonStyle = styled.button`
    background: white;
    margin-top: 50px;
    padding: 10px;
    border: 2px solid black;
  `;

  return (
    <div>
      <ButtonStyle onClick={()=> handleOnClick()}>{textContent}</ButtonStyle>
    </div>
  );
}

export default Button;
