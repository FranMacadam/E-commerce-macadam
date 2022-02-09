//Components
import Navbar from "./components/Header/Navbar"
import ItemListContainer from "./components/Body/ItemList/ItemListContainer"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./components/Body/ItemDetail/ItemDetailContainer"
import Cart from "./components/Body/Cart/Cart";
import CustomProvider from "./contexts/CartContext"
import ContactForm from './components/Header/ContactForm'

const App = () => {
    return (
            <CustomProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/Cart" element={<Cart />} />
                        <Route path="/category/:id" element={<ItemListContainer />} />
                        <Route path="/product/:id" element={<ItemDetailContainer />} />
                        <Route path="/Contact" element={<ContactForm />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CustomProvider>
    )
}
    ;

export default App;