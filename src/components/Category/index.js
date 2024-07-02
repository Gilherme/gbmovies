import styles from './Category.module.css'
import videos from '../../json/movies.json'

export const categories = [ "Biographies", "Courses", "Documentaries" ]

export function filterCategory(id){
  return videos.filter( video => video.category === categories[id])
}

function Categoria({category_title, children}){
  return(
    <section className={styles.category}>
      <h2>{category_title}</h2>
      {children}
    </section>
  );
}

export default Categoria;
