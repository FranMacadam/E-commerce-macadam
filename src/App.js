import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Navbar from "./components/header/Navbar"


const App = () => {
    return (
        <>
            <Navbar/>

            <main>Im main</main>
        </>
    )
}
;

export default App;