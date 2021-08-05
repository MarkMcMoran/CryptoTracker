import NavBar from "./Navigation/Navigationbar";
import {Container} from "@material-ui/core";
import ParentElem from "./Portfolio/index";
function App() {
    return (
        <>
            <NavBar />
            <Container>
                <ParentElem />
            </Container>
        </>


    );
}

export default App;
