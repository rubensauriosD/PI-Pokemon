import './App.css';
import { Route } from "react-router-dom";
import Landing from './components/Landing/landing';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing}></Route>
      <Route path={["/home", "/pokemon/:id", "/create"]} component={Nav}></Route>
      <Route path='/home' component={Home}></Route>
      <Route path='/create' component={Create}></Route>
      <Route path='/pokemon/:id' component={Pokemon}></Route>
    </div>
  );
}

export default App;
