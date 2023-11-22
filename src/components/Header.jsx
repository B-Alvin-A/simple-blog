import { FaMobileAlt, FaTabletAlt, FaLaptop } from 'react-icons/fa'
import useWindowSize from '../hooks/useWindowSize'

const Header = ({ title }) => {
  // const { width } = useContext(DataContext)
  const { width } = useWindowSize()
  return (
    <header className="w-full bg-[#66d8f5] p-4 flex items-center justify-between">
        <h1 className="text-2xl">{title}</h1>
        {
          width < 768 ? <FaMobileAlt />
            : width < 992 ? <FaTabletAlt /> : <FaLaptop />
        }
    </header>
  )
}

export default Header