import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';

// import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import Cart from './pages/Cart/Cart'
import './default.scss';

//Redux
import { connect } from 'react-redux';
import { setCurrentUser } from './actions/user';

class App extends Component {
  authListener = null;

  componentDidMount() {
    const { setCurrentUser } =this.props
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    });
  }  

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.props;
    return (
        <div className="App">
            <Switch>
              <Route exact path="/" render={() => (
                <HomepageLayout>
                  <Homepage />
                </HomepageLayout>
              )}/>
              <Route path="/registration" render={() => currentUser ? <Redirect to="/" /> : (
                <HomepageLayout>
                  <Registration />
                </HomepageLayout>
              )}/>
              <Route path="/login" 
                render={() => 
                  currentUser ? <Redirect to="/products"/> : 
                (
                <HomepageLayout>
                  <Login />
                </HomepageLayout>
              )}/>
              <Route path="/products" 
                render={() => (
                <HomepageLayout>
                  <Products addToCart={this.addToCart}/>
                </HomepageLayout>
              )}/>
              <Route path="/product-info" 
                render={() => (
                <HomepageLayout>
                  <ProductInfo />
                </HomepageLayout>
              )}/>
              <Route path="/cart" 
                render={() => (
                <HomepageLayout>
                  <Cart />
                </HomepageLayout>
              )}/>
            </Switch>
        </div>
    );
  }

}

const mapStateTopProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateTopProps, { setCurrentUser })(App);
