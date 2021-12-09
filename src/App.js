import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"

//Components
import Navbar from "./components/Navbar"


const App = () => {
    return (
        <>
            <Navbar/>
            <ItemListContainer greeting='Hello World!'/>
            <main>Im main</main>
        </>
    )
}
;

export default App;