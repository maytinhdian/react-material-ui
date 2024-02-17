import { green, orange, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const arcBlue = "#97605e";
const arcOrange = "#FFBA60";
const arcGray = "#1d295f";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: `${arcBlue}`,
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: `${arcOrange}`,
      // light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      // contrastText: "#47008F",
    },
  },
  typography: {
    tabContainer: {
      marginLeft: "auto",
    },
    // tab: {
    //   fontFamily: "Raleway",
    // },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": {
            backgroundColor: "#ffffff",
          },
          // "& button:hover":{backgroundColor:"green"},
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          // color: `${arcGray} !important`,
          // "&:hover": {
          //   backgroundColor: pink[100],
          // },
          selected: {
            backgroundColor: "#272726 ",
            color: `${arcGray} !important`,
          },
        },
      },
    },
  },
});
export default theme;
