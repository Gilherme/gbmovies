import { useState } from "react";
import Banner from "../../components/Banner";
// import Card from "../../components/Card";
// import Carrosel from "../../components/Carrosel";
// import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {

 
  const getValue = (e) => {setSearch(e.target.value)}

  // Hook useState (serve para capturar/armazenar estados)
  const [ search, setSearch ] = useState()

  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>

        <input
          type="text"
          placeholder="Search"
          onChange={getValue}
        />

        <h2>{search}</h2>
       {/* {
        categories.map((category, index) => 
          <Category category_title={category} key={index}>       
            <Carrosel key={index}>
               {filterCategory(index).map(video => { return <Card id={video.id} key={video.id} /> })}
            </Carrosel>
          </Category>
        )
       } */}

      </Container>
      <Footer />
    </>
  );
}

export default Home;
