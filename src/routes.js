import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import AddVideo from "./pages/AddVideo";
import FavoritesProvider from "./contexts/favorites";

function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/whatch/:id" element={<Watch />}></Route>
          <Route path="/addVideo" element={<AddVideo />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;