import Leader from '@/components/Leader'
import { StateContext } from '@/context/StateContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <StateContext>
    <Leader>
      <Component {...pageProps} />
    </Leader>
  </StateContext>
}
