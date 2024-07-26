import Header from '../../components/Header';
import styles from './search.module.css';
import Footer from '../../components/Footer';
import Container from '../../components/Container'
import movies from '../../json/movies.json'
import SearchVideoList from '../../components/SearchVideoList';

function Search() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.search}>
                    <h2>Search</h2>
                    <SearchVideoList movies={movies}/>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Search;
