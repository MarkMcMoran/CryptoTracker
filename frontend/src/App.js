import ConversionForm from "./form/ConversionForm";
import {Container} from "@material-ui/core";
import PortfolioClass from "./Portfolio/Portfolio";
import CryptoPerformance from "./Portfolio/cryptostatistics/CryptoPerformance";
function App() {
    return (
        <Container maxWidth="sm">
        <h1> Crypto Price tracker</h1>
            <ConversionForm />
            <CryptoPerformance />
            <PortfolioClass/>
        </Container>

    );
}

export default App;
