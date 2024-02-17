import * as React from "react";
import { AppBar, Button, Tab, Tabs, Toolbar } from "@mui/material";

import { makeStyles } from "@mui/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMagrin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
  },
  logo: {
    height: "7em",
  },
  tabContainer: {
    ...theme.typography.tabContainer,
  },
  tab: {
    minWidth: 20,
    marginLeft: "25px",
    fontWeight: 100,
  },
  button: {
    borderRadius: "50px",
  },
}));

function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img height={75} src={logo} alt="TMT Innovative Logo" />

            <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="Contact Us" />
            </Tabs>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMagrin} />
    </React.Fragment>
  );
}

export default Header;
