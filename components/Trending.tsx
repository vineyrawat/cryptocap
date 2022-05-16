import Image from 'next/image'
import React from 'react'
import { BsClock } from 'react-icons/bs'
import TrendingCard from './trending/TrendingCard'

const TrendingSection = () => {
  return (
    <section className="flex flex-col gap-3 p-5">
      <h1 className="text-2xl font-semibold">
        Today's Cryptocurrency Prices by Market Cap
      </h1>
      <div className="flex flex-col gap-3 md:flex-row">
        <TrendingCard title="Trending" titleLeading={<h1>{'🔥'}</h1>} />
        <TrendingCard
          title="Biggest Gainers"
          titleLeading={
            <Image
              width={30}
              height={30}
              src={
                'https://s2.coinmarketcap.com/static/cloud/img/GainnerIcon.png'
              }
            />
          }
        />
        <TrendingCard
          title="Recently Added"
          titleLeading={<BsClock size={25} />}
        />
      </div>
    </section>
  )
}

export default TrendingSection
