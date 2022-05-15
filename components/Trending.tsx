import React from 'react'
import TrendingCard from './trending/TrendingCard'

const Trending = () => {
  return (
    <section className='p-5 flex flex-col gap-3'>
      <h1 className='text-2xl font-semibold'>Today's Cryptocurrency Prices by Market Cap</h1>
      <div className="flex flex-col gap-3 md:flex-row">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </div>
    </section>
  )
}

export default Trending