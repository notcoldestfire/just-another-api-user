import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About Title</title>
      </Head>
      <h1>Welcome to About Page</h1>
    </div>
  )
}
