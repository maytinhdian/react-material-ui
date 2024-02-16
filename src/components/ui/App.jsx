import { ThemeProvider } from "@mui/material";
import Header from "./Header";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
