import Banner from "./components/Banner";
import Card from "./components/Card";
import Carrosel from "./components/Carrosel";
import Categoria from "./components/Categoria";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/movies.json"

function App() {
  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>

        <Categoria titulo_categoria="Documentários">

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
