import {
  createTheme,
  makeStyles,
  ThemeProvider,
  Button,
} from "@material-ui/core";

const DashboardOverview = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: 25,
      padding: 40,
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));

  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  // Add feature if not logged in show log in button instead of dashboard
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
      <h3>Dashboard Overview</h3>
      <Button>Login to See full dashboard</Button>
      </div>
    </ThemeProvider>
  );
  };

export default DashboardOverview;