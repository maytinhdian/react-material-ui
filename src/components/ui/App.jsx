import { ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header />
      hello
    </ThemeProvider>
  );
}

export default App;
