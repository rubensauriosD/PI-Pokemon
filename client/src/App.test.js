import { render, screen } from '@testing-library/react';
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import store from './store/index'
import Card from './components/Home/Cards/Card/Card';
import Order from './components/Home/Filter-Order/Order'

const pika = {
  id:1,
  name:'gardfield',
  tipos:['normal','comelon'],
  image:'adsasdasdas'
}

describe("Order Pokemons By Name ASC and DESC", () => {
  it("It has one element to order from A to Z called ASCENDING and from Z to A DESCENDING", () => {
    render(
      <Provider store={store}>
        <Router>
          <Order/>
        </Router>
      </Provider>
    );
    const asc = screen.getByText("Ascending");
    const desc = screen.getByText("Descending");
    expect(asc).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });
  it("Cards component shows pokemons info", () => {
    render(
      <Provider store={store}>
        <Router>
        <Card id={pika.id} name={pika.name} tipos={pika.tipos} image={pika.image}/>
        </Router>
      </Provider>
    );
    const Name = screen.getByText("gardfield")
    expect(Name).toBeInTheDocument();
  })
});
