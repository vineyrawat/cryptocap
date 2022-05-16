import Link from 'next/link'
import React from 'react'
import { BsArrowUpRight, BsCurrencyBitcoin } from 'react-icons/bs'

interface TrendingCardProps {
  title: string
  titleLeading?: JSX.Element
}

const TrendingCard = (props: TrendingCardProps) => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-md bg-white p-5 shadow-md dark:bg-slate-800">
      <div className="flex items-center gap-2">
        {props.titleLeading && props.titleLeading}
        <h1 className="text-xl font-semibold">{props.title}</h1>
        <Link href={'#'}>
          <div className="ml-auto cursor-pointer text-blue-500 underline hover:text-blue-400">
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
    <div className="flex items-center gap-2">
      <div>1</div>
      <BsCurrencyBitcoin className="text-amber-600" />
      <h3>Bitcoin</h3>
      <h3 className="opacity-50">BTC</h3>
      <div className="ml-auto flex items-center gap-1 text-green-500">
        <BsArrowUpRight strokeWidth={1} />
        <h3>5.67%</h3>
      </div>
    </div>
  )
}
