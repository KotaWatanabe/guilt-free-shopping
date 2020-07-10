import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';

// import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart'
import './default.scss';

//Redux
import { Provider } from 'react-redux';
import store from './store';

const initialState = {
  currentUser: null
}

class App extends Component {
  
  state = {
      ...initialState,
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

      this.setState({
        ...initialState
      })
    });
    
  }  

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Provider store={store}>
        <div className="App">
            <Switch>
              <Route exact path="/" render={() => (
                <HomepageLayout currentUser={currentUser}>
                  <Homepage />
                </HomepageLayout>
              )}/>
              <Route path="/registration" render={() => currentUser ? <Redirect to="/" /> : (
                <HomepageLayout currentUser={currentUser}>
                  <Registration />
                </HomepageLayout>
              )}/>
              <Route path="/login" 
                render={() => currentUser ? <Redirect to="/products"/> : (
                <HomepageLayout currentUser={currentUser}>
                  <Login />
                </HomepageLayout>
              )}/>
              <Route path="/products" 
                render={() => (
                <HomepageLayout currentUser={currentUser}>
                  <Products products={this.state.products} addToCart={this.addToCart}/>
                </HomepageLayout>
              )}/>
              <Route path="/cart" 
                render={() => (
                <HomepageLayout currentUser={currentUser}>
                  <Cart />
                </HomepageLayout>
              )}/>
            </Switch>
        </div>
      </Provider>

    );
  }

}

export default App;
