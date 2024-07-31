
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {


  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>
        {
          categories.map((category, index) =>
            <Category category_title={category} key={index}>
              <Carousel key={index}>
                {filterCategory(index).map(video => { return <Card id={video.id} title={video.title} key={video.id} /> })}
              </Carousel>
            </Category>
          )
        }
      </Container>
      <Footer />
    </>
  );
}

export default Home;
