import styles from './Categoria.module.css'

function Categoria({titulo_categoria, children}){
  return(
    <section className={styles.Categoria}>
      <h2>{titulo_categoria}</h2>
      {children}
    </section>
  );
}

export default Categoria;
