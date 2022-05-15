import Link from 'next/link'
import React from 'react'
import {BsArrowUpRight, BsCurrencyBitcoin} from 'react-icons/bs'

const TrendingCard = () => {
  return (
    <div className='bg-white dark:bg-slate-800 shadow-md p-5 rounded-md flex flex-col gap-2 w-full'>
        <div className="flex justify-between">
            <h1 className='font-semibold text-lg'>
                Trending
            </h1>
            <Link href={'#'}>
                <div className='text-blue-500 cursor-pointer hover:text-blue-400 underline'>
                    More
                </div>
            </Link>
        </div>
        <TrendingItem />
        <TrendingItem />
        <TrendingItem />
    </div>
  )
}

export default TrendingCard

const TrendingItem = () => {
return (
        <div className='flex gap-2 items-center'>
            <div>1</div>
            <BsCurrencyBitcoin className='text-amber-600' />
            <h3>Bitcoin</h3>
            <h3 className='opacity-50'>BTC</h3>
            <div className='text-green-500 ml-auto flex items-center gap-1'>
            <BsArrowUpRight strokeWidth={1} />
            <h3>5.67%</h3>
            </div>
        </div>
        )
}