import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer'
import SectionHome from './components/SectionHome'
import SectionTestimoni from './components/SectionTestimoni'
import SectionDetail from './components/SectionDetail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={SectionHome} />
          <Route exact path="/testimoni" component={SectionTestimoni} />
          <Route exact path="/detail" component={SectionDetail} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
