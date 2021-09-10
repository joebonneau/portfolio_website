import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#fff"
    }
  },
  overrides: {
    MuiBottomNavigation: {
      root: {
        bottom: 0,
        position: 'fixed',
        height: '60px',
        width: '100%',
        backgroundColor: '#36658c',
        textAlign: 'center',
        transition: 'bottom 0.6s'
      }
    },
    MuiBottomNavigationAction: {
      root: {
        backgroundColor: "#36658c",
        "&:hover": {
          backgroundColor: "#adadad",
          transition: "background-color .5s"
        }
      }
    }
  }
}
);