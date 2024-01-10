import { createTheme, responsiveFontSizes } from '@mui/material';
import { blue, red } from '@mui/material/colors';

const theme = createTheme({
  pallete: {
    primary: {
      main: "#FFF308"
    },
    secondary: {
      main: "#6A03B9", // Purple
    },
    error: {
      main: red[500],
    },
    success: {
      main: blue[500],
    },
  },
  components: {
    MuiPaper: {
        variants: [
            {
              props: {variant: "Window"},
                style: {
                    bgcolor: '#E9F1F7',
                    marginTop: 5,
                    marginInline: 5,
                    borderRadius: 0,
                    borderRight: "1px solid black",
                    borderBottom: "1px solid black",
                    borderTop: "1px solid white",
                    borderLeft: "1px solid white",
                },
            },
        ],
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "20px",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
