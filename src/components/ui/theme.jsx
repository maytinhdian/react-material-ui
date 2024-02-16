import { createTheme } from "@mui/material";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary:{
        main:`${arcBlue}`
    },
    secondary:{
        main:`${arcOrange}`
    }
  },
  typography:{
    h3:{
        fontWeight:500
    }
  }
});
export default theme;
