import Layout from 'theme/layout';
import '../styles/global.css';
import '../styles/style.sass';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
