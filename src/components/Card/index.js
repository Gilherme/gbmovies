import { Link } from 'react-router-dom';
import styles from './Card.module.css'

function Card({ id, title }){
  return(
    <section className={styles.card}>
      <Link to={`/whatch/${id}`} > 
          <img 
            src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
              alt='capa'>
          </img>
          <h3> {`${title}`} </h3>
      </Link>
    </section>
  );
}

export default Card;
