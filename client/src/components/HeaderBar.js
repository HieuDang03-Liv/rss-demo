import useDarkMode from '../hooks/useDarkMode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import '../styles/HeaderBar.css'

const HeaderBar = () => {
    //use custom hook to set dark/light mode for web, value of mode is stored in local storage
    const [darkMode, setDarkMode] = useDarkMode(true)

    const changeMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <header>
            <Link to='/' className='home-btn'>
                <FontAwesomeIcon icon={faHome} />
            </Link>

            {/* change icon when dark changed */}
            <button onClick={changeMode} className='mode-btn'>
                {darkMode ? (
                    <FontAwesomeIcon icon={faSun} />
                ) : (
                    <FontAwesomeIcon icon={faMoon} />
                )}
            </button>
        </header>
    )
}

export default HeaderBar
