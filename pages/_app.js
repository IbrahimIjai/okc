import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from "../components/Layout";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const getLibrary = (provider) => {
  return new Web3Provider(provider);
};

function MyApp({ Component, pageProps }) {


  return(
    <ThemeProvider attribute='class'>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </ThemeProvider>
  );
}

export default MyApp
