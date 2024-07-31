import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './favorites.module.css'


function Favorites () {
    return(
        <>
            <Header />
            <section className={ styles.favorites }>
                <h2>Favorites</h2>
            </section>
            <Footer />
        </>
    );
}

export default Favorites;