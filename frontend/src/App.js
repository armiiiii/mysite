import { connector } from './requests.js'
import Header from './ui/components/Header/Header.jsx';
import GreetingsBody from './ui/bodies/Greetings.jsx';


function App() {
    return (
        <>
        <Header />
        <main>
            <GreetingsBody />
        </main>
        </>
    );
}

export default App;