import Banner from "./components/Banner";
import Card from "./components/Card";
import Carrosel from "./components/Carrosel";
import Categoria from "./components/Categoria";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/movies.json"

const agruparPorCategoria = videos.reduce((acumulador, obj) => {
  if(!acumulador[obj.categoria]){
    acumulador[obj.categoria] = [];
  }

  acumulador[obj.categoria].push(obj);
  return acumulador
}, {});




function App() {
  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>
        <Categoria titulo_categoria="Documentários">

          {console.log(agruparPorCategoria)}
          <Carrosel>
            {
              videos.map(video => {
                return <Card id={video.id} key={video.id} />
              })
            }
          </Carrosel>

        </Categoria>

      </Container>
      <Footer />
    </>
  );
}

export default App;
