import styled from 'styled-components';
import NxWelcome from './nx-welcome';

import { HomePage } from './modules/ajcl3/homepage/HomePage';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <HomePage />
      {/* <NxWelcome title="Welcome to ajcl3!" /> */}
    </StyledApp>
  );
}

export default App;
