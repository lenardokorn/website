import '../styles/globals.css';
import Layout from '../components/layouts/layout';

export default function App({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <Component {...pageProps} key={router.route}></Component>
    </Layout>
  );
}
