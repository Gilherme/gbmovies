import { Link } from 'react-router-dom';
import styles from './Card.module.css'
import iconFavorite from './icons/favorite.png'
import iconUnFavorite from './icons/unFavorite.png'
import { useFavoriteContext } from '../../contexts/favorites';

function Card({ id, title }){

  const { favorite, addFavorite } = useFavoriteContext()
  const isFavorite = favorite.some(fav => fav.id === id)
  const icone = isFavorite ? iconFavorite : iconUnFavorite

  return(
    <section className={styles.card}>
      <Link to={`/whatch/${id}`} > 
          <img 
            src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
              alt='capa'>
          </img>
          <h3> {`${title}`} </h3>
      </Link>
      <figure className={styles.iconeFavorite}>
        <img 
          src={icone} 
          alt={`favoritar ou desfavoritar video " ${title}"`}
          onClick={() => addFavorite({id})}
          />
      </figure>
    </section>
  );
}

export default Card;
