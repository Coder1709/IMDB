import React from 'react'
import NavBarItem from './NavBarItem'

export default function Navbar() {
  return (
    <div className='flex  justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-5'>
       <NavBarItem title="Trending" param= "fetchTrending" />
       <NavBarItem title="Top Rated" param= "fetchTopRated" />
    </div>
  )
}
