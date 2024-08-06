import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/assets/images/logo.png'
import '../styles/global.css'
import { RiChatNewFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className='flex items-center h-16 px-4 text-white bg-gray-900 w-full'>
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <Link href='/'>
          <Image src={logo} alt='logo' className='w-10 h-10 hover:opacity-80 transition-opacity' />
        </Link>
        <h1 className="text-xl font-bold">AI Chat Assistant</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          <RiChatNewFill className="w-5 h-5" />
          <span>New Chat</span>
        </button>
      </div>
    </header>
  )
}

export default Header