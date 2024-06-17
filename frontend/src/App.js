import { connector } from './requests.js'

function App() {
    return (
        <>
        <h1>Hello!</h1>
        <button onClick={connector.getPosts}>Make a request here!</button>
        </>
    );
}

export default App;