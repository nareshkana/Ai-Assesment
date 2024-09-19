"use client"; 
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React , { useEffect }  from 'react'

function Header() {
    const path=usePathname();
    useEffect(()=>{
        console.log(path);
    },[])
  return (
    <div className='flex p-4 items-center justify-between bg-secoundary shadow-md'>
        <Image src={'/logo.svg'} width={160} height={100} alt='logo'/>
        <ul className=' hidden md:flex gap-6'>
            <l1 className={`hover:text-purple-700 hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard'&&'text-purple-700 font-bold'}
            `}>Dashboard</l1>
            <l1 className={`hover:text-purple-700 hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard/question'&&'text-purple-700 font-bold'}
            `}>Question</l1>
            <l1 className={`hover:text-purple-700 hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard/upgrade'&&'text-purple-700 font-bold'}
            `}>Upgrade</l1>
            <l1 className={`hover:text-purple-700 hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard/How'&&'text-purple-700 font-bold'}
            `}>How it work?</l1> 
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header
