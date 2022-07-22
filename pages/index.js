import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Title</title>
        <meta name='keywords' content='web dev, programming'></meta>
      </Head>
      <h1>Welcome to Home Page</h1>
    </div>
  )
}
