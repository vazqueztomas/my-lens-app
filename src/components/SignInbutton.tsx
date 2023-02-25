import { useAddress, useNetworkMismatch, useNetwork, ConnectWallet, ChainId} from '@thirdweb-dev/react'
import React from 'react'

type Props = {}

export default function SignInbutton({}: Props) {
  const address = useAddress(); // detect the connected address
  const isOnWrongNetwork = useNetworkMismatch(); // detect if the user is on the wrong netfwork
  const [, switchNetWork] = useNetwork(); // function to switch the network
  // 1. User needts to connect their wallet
  if (!address){
    return <ConnectWallet />
  }
  // 2. Users need to switch network to polygon
  if (isOnWrongNetwork){
    return (
      <button onClick={() => switchNetWork?.(ChainId.Polygon)}>
        Switch Network
      </button>
  )}
  // 3. Sign in with lens


  // 4. Show the user profile on Lens


}