import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link, useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import Loading from '../components/Loading'
import Cryptocurrency from '../components/Cryptocurrency'
import News from '../components/News'
import {fetchCoinData, fetchCoinNews} from './../data/DataFile'

export default function Home() {
  
  const {isLoading , data}=useQuery('coin-data', ()=>fetchCoinData(10))
  const {isLoading:isloadingData , data:newsData}=useQuery('coin-news', ()=>fetchCoinNews(6))
  

  const globalStats=data?.data?.stats
  

  if(isLoading && isloadingData ) return <Loading />
  return (
    <div>
      <div> 
        <div className='pl-8 py-3 text-3xl border-b border-gray-300 dark:border-gray-700'>
        Global Crypto Stats
      </div>
      </div>
      <div className='flex flex-wrap mt-5 '>
        <div className='w-96 pl-8 text-gray-500 '>Total Cryptocurrencies
        <p className=' dark:text-white  text-gray-900 text-2xl mt-2 mb-5'>{globalStats?.total}</p>
        </div>
        <div className='w-96 pl-8 text-gray-500 '>Total Exchanges
        <p className=' dark:text-white  text-gray-900 text-2xl mt-2 mb-5'>{globalStats?.totalExchanges}</p>
        </div>
        <div className='w-96 pl-8 text-gray-500 '>Total Market Cap
        <p className=' dark:text-white  text-gray-900 text-2xl mt-2 mb-5'>{millify(globalStats?.totalMarketCap)}</p>
        </div>
        <div className='w-96 pl-8 text-gray-500 '>Total 24h Volume
        <p className=' dark:text-white  text-gray-900 text-2xl mt-2 mb-5'>{millify(globalStats?.total24hVolume)}</p>
        </div>
        <div className='w-96 pl-8 text-gray-500 '>Total Markets
        <p className=' dark:text-white  text-gray-900 text-2xl mt-2 mb-5'>{millify(globalStats?.totalMarkets)}</p>
        </div>
      </div>
      <div className='px-8 py-3  border-t border-gray-300 dark:border-gray-700 flex justify-between items-center'>
        <div className='text-2xl'>
          Top 10 Cryptocurrencies in the World
        </div>
        <Link to={'/cryptocurrency'} className='cursor-pointer'>
          Show more
        </Link>
      </div>
      <Cryptocurrency  data={data}  />
      <div className='px-8 py-3  flex justify-between items-center'>
        <div className='text-2xl'>
          Latest Crypto News
        </div>
        <Link to={'/cryptocurrency'} className='cursor-pointer'>
          Show more
        </Link>
      </div>
      <News newsData={newsData}  />
    </div>
  )
}
