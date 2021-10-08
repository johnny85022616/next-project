import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
       
    },
  });



export default function Theme({children}) {
    console.log(theme);
    return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>)   
};