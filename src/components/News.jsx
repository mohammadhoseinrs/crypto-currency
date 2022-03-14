import moment from 'moment';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { fetchCoinData } from '../data/DataFile';
import demo from './../assets/image/demo.jpeg'
import Loading from './Loading';
export default function News({newsData }) {
  
  return (
    <div>
      <p className='pl-8 py-3 text-3xl border-b border-gray-300 dark:border-gray-700'>Crypyo Latest News</p>
      <div className='flex flex-wrap'>
        {newsData?.value.map((news,index)=>(
          <div key={index} className='px-3' >
              <div className='w-80 mb-5   p-5  bg-white dark:bg-stone-600 border border-gray-300 dark:border-gray-700 m-3 rounded-xl hover:shadow-lg transition ease-out duration-200 dark:hover:shadow-gray-700 dark:hover:shadow-lg'>
              <a href={news.url}>
                <div className='flex pb-5'>
                  <div>{news.name}</div>
                  <img className='w-24 h-24 rounded-xl' src={news?.image?.thumbnail?.contentUrl || demo} alt="" />
                </div>
                <p className='text-sm dark:text-gray-300 text-gray-500 mb-5'>
                  {news.description > 60 ? `${news.description.substring(0,60)}...`: news.description }
                </p>
                <div className='flex items-center justify-between text-xs'>
                  <div className='flex items-center'>
                    <img className='w-10 h-10' src={news.provider[0]?.image?.thumbnail?.contentUrl || demo} alt="" />
                    <p>{news.provider[0]?.name}</p>
                  </div>
                    <p>{moment(news.datePublished).startOf('ss').fromNow()}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
