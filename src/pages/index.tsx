import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PublicationSortCriteria, useExplorePublicationsQuery } from '../graphql/generated'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data, isLoading, error} = useExplorePublicationsQuery(
    {
      request: {
        sortCriteria: PublicationSortCriteria.TopMirrored, 
      },
    }
  );

  console.log({data, isLoading, error});

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Hello world
      </main>
    </>
  )
}
