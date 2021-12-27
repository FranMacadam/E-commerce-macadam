//Components
import Navbar from "./components/Header/Navbar"
import ItemListContainer from "./components/Body/ItemList/ItemListContainer"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/Home" element={<ItemListContainer />} />
                <Route path="/Pizzas" element="" />
                <Route path="/Beers" element={<ItemListContainer />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
    ;

export default App;