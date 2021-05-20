import ConversionForm from "./form/ConversionForm";
import {Container} from "@material-ui/core";
function App() {
    return (
        <Container maxWidth="sm">
        <h1> Crypto Price tracker</h1>
            <ConversionForm />
        </Container>
    );
}

export default App;
