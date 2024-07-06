import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Watch.module.css'

function Watch(){
  return(

      <main className={styles.whatch}>
        <Header />

        <Container>
          <h2>Whatch</h2>
          <iframe width="854" height="480" src="https://www.youtube.com/embed/3iGPclknn_8?si=7kNlDUbITtNTZQm8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Container>

        <Footer />
      </main>
  );
};

export default Watch;
