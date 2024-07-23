import Header from '../../components/Header';
import styles from './search.module.css';
import Footer from '../../components/Footer';
import Container from '../../components/Container'
import VideoList from '../../components/VideoList';
import movies from '../../json/movies.json'

function Search() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.search}>
                    <h2>Search</h2>
                    <VideoList movies={movies}/>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Search;
