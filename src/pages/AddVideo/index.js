import FormNewVideo from '../../components/FormNewVideo';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './addVideo.module.css'
import Container from '../../components/Container';

function adddVideo() {
    return (
        <>
            <Header />
            <Container>
                <main className={styles.videoCadastre}>
                    <FormNewVideo />
                </main>
            </Container>
            <Footer />
        </>
    );
}

export default adddVideo;
