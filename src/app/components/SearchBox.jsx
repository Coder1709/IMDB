"use client"
import { useState  } from 'react'
import { useRouter } from 'next/navigation';

import React from 'react'

export default function SearchBox() {
  const router = useRouter()

  const [search , setSearch] = useState("");

  const handleSubmit = (e)=> {
    e.preventDefault();
   // console.log(search);
    if ( !search ) return ;
    router.push(`/search/${search}`)



  }
  return (
    <form  onSubmit={handleSubmit} className='flex max-w-6xl mx-auto justify-between items-center'>
    <input value={search} className='w-full h-14 rounded-sm outline-none placeholder-grey-500 bg-transparent flex-1' onChange={(e)=>setSearch(e.target.value)}
     type = "text" placeholder='Search Keywords.....' />
     <button disabled={!search} type = "submit" className='text-amber-600 disabled:text-gray-400 '>Search</button>
    </form>
    
  )
}
