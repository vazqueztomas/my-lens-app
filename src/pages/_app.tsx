import { QueryClientProvider, QueryClient} from '@tanstack/react-query'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const desiredChainId = ChainId.Polygon;
  const queryClient = new QueryClient()
  

  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider activeChain="ethereum">
        <Component {...pageProps} />
      </ThirdwebProvider>
    </QueryClientProvider>
    )
}
