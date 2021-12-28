//Components
import Navbar from "./components/Header/Navbar"
import ItemListContainer from "./components/Body/ItemList/ItemListContainer"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./components/Body/ItemDetail/ItemDetailContainer"
import CartWidget from "./components/Header/CartWidget";
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/Cart" element={<CartWidget />} />
                <Route path="/Pizzas" element={<ItemListContainer />} />
                <Route path="/Beers" element={<ItemListContainer />} />
                <Route path="/pizzas/product/:id" element={<ItemDetailContainer />} />
                <Route path="/beers/product/:id" element={<ItemDetailContainer />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
    ;

export default App;