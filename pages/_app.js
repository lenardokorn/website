// TODO: Figure out how to use global.css instead of this import:
import 'tailwindcss/tailwind.css';
import Layout from '../components/layouts/layout';

export default function App({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <Component {...pageProps} key={router.route}></Component>
    </Layout>
  );
}
