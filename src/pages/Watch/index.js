import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './watch.module.css'
import videos from '../../json/movies.json'
import PageNotFound from '../PageNotFound';

function Watch() {

  const params = useParams()
  const video = videos.find((video) => { return video.id === params.id })
  if (!video) { return <PageNotFound /> }

  return (
    <>
      <Header />
      <section className={styles.watch}>

        <h2>Whatch</h2>
        <iframe
          width="854"
          height="480"
          src={`https://www.youtube.com/embed/${video.id}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>

      </section>
      <Footer />

    </>

  );
};

export default Watch;