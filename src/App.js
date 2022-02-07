//Components
import Navbar from "./components/Header/Navbar"
import ItemListContainer from "./components/Body/ItemList/ItemListContainer"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./components/Body/ItemDetail/ItemDetailContainer"
import Cart from "./components/Body/Cart/Cart";
import CartContext from "./contexts/cartContext"

const App = () => {
    return (
        <CartContext>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Pizzas" element={<ItemListContainer />} />
                    <Route path="/Beers" element={<ItemListContainer />} />
                    <Route path="/product/:id" element={<ItemDetailContainer />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartContext>
    )
}
    ;

export default App;