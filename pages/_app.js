import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Layout from "../components/layout.jsx";
import Theme from "../theme/theme.js";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Theme>
        <Layout>
          <Container>
            <Box
              mt={8}
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="100%"
            >
              <Component {...pageProps} />
            </Box>
          </Container>
        </Layout>
      </Theme>
    </Provider>
  );
}

export default MyApp;
