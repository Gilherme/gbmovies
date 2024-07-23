import styles from './videoList.module.css';
import Card from '../../components/Card';

function VideoList ({ movies, emptyHeading }) {
    
    const count = movies.length
    let heading = emptyHeading
    if(count > 0) {
        const noun = count > 1 ? 'Videos' : 'Video';
        heading = `${count} ${noun}`
    }

    return(
       <>
        <h2> {heading} </h2>
        <section className={styles.videoList}>
            { movies.map( m => <Card id={m.id} key={m.id}></Card> ) }
        </section>
       </>
    );
}

export default VideoList;
