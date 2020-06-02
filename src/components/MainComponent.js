import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishdetailComponent from './DishdetailComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route
            exact
            path='/menu'
            component={() => <Menu dishes={this.state.dishes} />}
          ></Route>
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainComponent;

/* <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        /> */

/* <DishdetailComponent
dish={
  this.state.dishes.filter(
    (dish) => dish.id === this.state.selectedDish
  )[0]
}
/> */
