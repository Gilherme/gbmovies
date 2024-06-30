import styles from './Carrosel.module.css'

function Carrosel({children}){
  return(
    <section className={styles.carrosel}>
      {children}
      {/* <Card></Card>
      <Card></Card>
      <Card></Card> */}
    </section>
  );
}

export default Carrosel;
