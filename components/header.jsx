import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/assets/images/logo.png'
import '../styles/global.css'
import { RiChatNewFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className='flex items-center h-12 px-2 mx-0 py-6 text-white md:px-4 bg-black drop-shadow-md'>
        <div className="mr-auto">
            <Link href='/'>
                <Image src={logo} alt='logo' className='w-13 hover:cursor-pointer:scale-105' />
            </Link>
        </div>
        <div className="flex items-center justify-center flex-grow">
            <Link href='/'>
            </Link>
            <div>
                <h1 className="text-lg font-bold">Title of the chat</h1>
                <div className="flex justify-center">
                    <span className="text-gray-500 text-sm">Model name</span>
                </div>
            </div>
        </div>
        <div>
            <button className="flex items-center space-x-1 mr-4 text-blue-500 hover:text-blue-700">
                <RiChatNewFill className="w-4 h-4" />
                <span>New Chat</span>
            </button>
        </div>
    </header>
  )
}

export default Header