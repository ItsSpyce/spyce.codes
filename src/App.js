import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Console from './components/Console';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Console />
    </ThemeProvider>
  );
}

export default App;
