import '../styles/global.css'
import 'katex/dist/katex.css'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron, debug } from '../../styletron'
// import next's router for callbacks
import dynamic from 'next/dynamic'
// global styles are required to be added to `_app.js` per Next.js requirements.
import 'nprogress/nprogress.css'

const TopProgressBar = dynamic(
  () => {
    return import('../components/top-progress-bar')
  },
  { ssr: false }
)

export default ({ Component, pageProps }) => (
  <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
    <TopProgressBar />
    <Component {...pageProps} />
  </StyletronProvider>
)
