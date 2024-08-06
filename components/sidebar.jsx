import { RiChat3Line, RiSettings4Line, RiQuestionLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <RiChat3Line className="w-5 h-5" />
              <span>Chats</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <RiSettings4Line className="w-5 h-5" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
          <RiQuestionLine className="w-5 h-5" />
          <span>Help & FAQ</span>
        </a>
      </div>
    </div>
  )
}

export default Sidebar