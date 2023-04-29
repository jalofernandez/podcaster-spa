import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'

import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function PodcastPage() {
  const router = useRouter()
  const { id } = router.query

  const mainTitle = 'Podcaster'

  return (
    <>
      <Head>
        <title>{mainTitle}: {id}</title>
        <meta name="description" content="Generated by create next app by @jalofernandez" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header title={mainTitle} />

        <Footer />
      </main>
    </>
  );
}
