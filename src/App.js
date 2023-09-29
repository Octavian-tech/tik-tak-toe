import RoutesCustom from "./routes";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

function App() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 500px;
    background: white;
  `;

  return (
    <BrowserRouter>
      <Wrapper>
        <RoutesCustom />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
