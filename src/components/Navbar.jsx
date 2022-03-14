import React from 'react'
import logo from './../assets/image/cryptocurrency.png'
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineHome , AiOutlineLineChart} from 'react-icons/ai'
import { RiExchangeDollarFill } from 'react-icons/ri'
import { FaRegNewspaper } from 'react-icons/fa'

    const NavbarItem=[
        {id:1 , icon:<AiOutlineHome /> , text :'Home'},
        {id:2 , icon:<AiOutlineLineChart /> , text :'Cryptocurrency'},
        {id:4 , icon:<FaRegNewspaper /> , text :'News'},
    ]

export default function Navbar({darkTheme,setDarkTheme}) {
  return (
    <div className='h-screen  flex-1 bg-stone-900 dark:bg-stone-600 text-white rounded-r-lg overflow-hidden sticky top-0 left-0'>
        <Link to={'/'} className='flex justify-center pt-10 items-center' >
            <img src={logo} alt="logo"  className='w-8 h-8'/>
            <p className='ml-3 font-bold tracking-widest '>Cryptoreverse</p>
        </Link>
        <div className='flex justify-center items-center mt-5'>
            <p className='bg-gray-50 text-gray-900 w-20 rounded-full text-center cursor-pointer tracking-widest'
        onClick={()=>setDarkTheme(!darkTheme)}
        >{!darkTheme ? 'Dark 🌚' : 'Light 🌝'}</p>
        </div>
        <div className='mt-3'>
        {NavbarItem.map(({id,icon,text})=>(
            <NavLink key={id} to={`/${text}`} className={(link)=>link.isActive ? 'active-class' : 'notactive-class'} >
              <p>{icon}</p>  
            <div className='text-lg ml-3 font-light'  >
            {text}
            </div>
            </NavLink>
        ))}
        </div>
    </div>
  )
}
