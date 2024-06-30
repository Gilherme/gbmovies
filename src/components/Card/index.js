import styles from './Card.module.css'

function Card({ id }){
  return(
    <section className={styles.card}>
      <a  href={`https://www.youtube.com/watch?v=${id}`}
          rel="noreferrer noopener"
          target='_blank'>
          <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
               alt='capa'>
          </img>
      </a>
    </section>
  );
}

export default Card;
