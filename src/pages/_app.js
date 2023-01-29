import Layout from 'theme/layout';
import '../styles/global.css';
import '../styles/style.sass';
import '../styles/theme@v2.sass';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
