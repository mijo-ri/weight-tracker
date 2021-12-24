import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { WeightsProvider } from '../context/WeightsContext';

function MyApp({ Component, pageProps }) {
  return (
    <WeightsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WeightsProvider>
  );
}

export default MyApp;
