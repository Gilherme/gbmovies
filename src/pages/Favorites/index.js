import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Container from '../../components/Container';
import VideoList from '../../components/VideoList';
import styles from './favorites.module.css'
import { useFavoriteContext } from '../../contexts/favorites';


function Favorites() {

    const { favorite } = useFavoriteContext()

    return (
        <>
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>Favorites</h2>
                    <VideoList movies={favorite} emptyHeading={"Sem favoritos"} />
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Favorites;