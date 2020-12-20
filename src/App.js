import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import News from "./Components/Pages/News";
import Discussion from "./Components/Pages/Discussion";
import Register from "./Components/Pages/Register";
import About from "./Components/Pages/About";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/news">
                        <News />
                    </Route>
                    <Route path="/discussion">
                        <Discussion />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
