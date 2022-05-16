import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import TrendingSection from '../components/Trending'

const Home: NextPage = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-100">
      <Head>
        <title>CryptoCap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Header />
        <TrendingSection />
        {/* table */}
      </main>
    </div>
  )
}

export default Home
