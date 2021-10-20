import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans Thai', sans-serif",
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Noto Sans Thai', sans-serif;
          }
        `,
      },
    },
  },
});

export default theme;
