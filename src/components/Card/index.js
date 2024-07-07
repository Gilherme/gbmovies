import { Link } from 'react-router-dom';
import styles from './Card.module.css'

function Card({ id }){
  return(
    <section className={styles.card}>
      <Link to={`/whatch/${id}`} > 
          <img 
            src={`https://img.youtube.com/vi/${id}/default.jpg`}
              alt='capa'>
          </img>
      </Link>
    </section>
  );
}

export default Card;
