import { Link } from 'react-router-dom';
import styles from './navHeaderMobile.module.css'

export default function NavHeaderMobile( { isOpen, onClose  } ){
    return (
        <div className={`${styles.container}  ${isOpen ? styles.open : ''}`}>

            <div className={styles.x}>
                <button onClick={onClose}> x </button>
            </div>

            <nav className={styles.navHeaserMobile}>
                <Link to="/"> Home </Link>
                <Link to="/favorites"> Favorites </Link>
                <Link to="/search"> Search </Link>
                <Link to="/addVideo">Add Video</Link>
            </nav>

        </div>
    );
};
