import React from "react";
import styled from "styled-components";

function Input({ nameInput,inputContent, player, handleChoosePlayer }) {
  const InputWrapper = styled.div`
  width: 60%;
    display: flex;
    flex-direction: "row";
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <InputWrapper>
      <label for={nameInput}>{inputContent}</label>
      <input
      style={{
        padding:"5px",
        border:"1px solid black"
      }}
        type="text"
        name={nameInput}
        value={player}
        onChange={(e) => handleChoosePlayer(e)}
      />
    </InputWrapper>
  );
}

export default Input;
