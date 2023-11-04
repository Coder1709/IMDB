import React from 'react'
import MenuItem from './MenuItem'
import { FcHome, FcAbout } from "react-icons/fc"
import Link from 'next/link'

export default function Header() {
    return (
        <div className='flex justify-between mx-2 max-w-6xl  sm:mx-auto items-center py-6'>
            <div className='flex'>
                <MenuItem title="HOME" address="/" Icon={FcHome} />
                <MenuItem title="ABOUT" address="/about" Icon={FcAbout} />
            </div>

            <div className=''>
                <Link href="/">
                    <h2 className='text-2xl'>
                        <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>
                        MDB
                        </span>
                        <span className='text-xl hidden sm:inline'>
                        Movie Database
                        </span>
                    </h2>
                </Link>
            </div>

            <div className=''>
            </div>
        </div>
    )
}
