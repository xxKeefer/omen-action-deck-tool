import { ThemeProvider } from "./style";
import { MainRouter } from "./router";
import "@fontsource/poppins";
import "@fontsource/lobster";

function App() {
  return (
    <ThemeProvider>
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;
