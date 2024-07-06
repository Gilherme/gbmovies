import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './PageNotFound.module.css'

function PageNotFound(){
  return(
    <>
      <Header />

      <main className={styles.pageNotFound}>
        <h1>OPS...</h1>
        <h2>PAGINA NÃO ENCONTRADA</h2>
        <h1>:(</h1>
      </main>

      <Footer />
    </>
  );
}

export default PageNotFound;
