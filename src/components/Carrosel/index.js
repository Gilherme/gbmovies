import styles from './Carrosel.module.css'

function Carrosel({children}){
  return(
    <section className={styles.carrosel}>
      {children}
    
    </section>
  );
}

export default Carrosel;
