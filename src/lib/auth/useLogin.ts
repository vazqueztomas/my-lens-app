
import { useAuthenticateMutation } from "@/src/graphql/generated";
import { useAddress, useSDK } from "@thirdweb-dev/react";
import generateChallenge from "./generateChallenge";
import { useMutation } from '@tanstack/react-query';

export default function useLogin() {
  const address = useAddress()
  const sdk = useSDK();
  const {mutateAsync: sendSignedMessage } = useAuthenticateMutation()

    //1. Write the actual async function

  async function login(){
    // 0. Make sure the user has a connected wallet
    if (!address) return;
    // 1. Generate the challenge which comes from the Lens API
    const {challenge} = await generateChallenge(address)
    // 2. Sign the challenge tith the users wallets
    const signature = await sdk?.wallet.sign(challenge.text)
    // 3. Send the signed challenge back to the Lens API
    const {authenticate} = await sendSignedMessage({
      request: {
        address: address,
        signature: signature
      },
    });

    console.log('Authenticated', authenticate)
    // 4. Receive a access token from the lens API
    

    // 5. Store the acces token inside local storage so we can use it

  }
  return useMutation(login)
}