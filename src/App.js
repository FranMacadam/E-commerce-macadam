import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Navbar from "./components/Header/Navbar"
import ItemListContainer from "./components/Body/ItemListContainer"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';


const App = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/Home" element="" />
                <Route path="/Products" element={<ItemListContainer greeting='Welcome!'/>} />
                <Route path="/User" element="" />
                <Route path="/Cart" element={<ItemListContainer greeting='Welcome!' />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
    ;

export default App;