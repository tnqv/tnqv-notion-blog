import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron, debug } from '../../styletron'

export default ({ Component, pageProps }) => (
  <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
    <Component {...pageProps} />
    <Footer />
  </StyletronProvider>
)
