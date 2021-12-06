import { Link } from 'react-router-dom'
import '../styles/Folder.css'

const Folder = ({ route, title }) => {
    return (
        <div className='folder'>
            <div className='folder-title'>{title}</div>
            <Link to={`/rss/${route}`} className='folder-link'>
                khám phá
            </Link>
        </div>
    )
}

export default Folder
