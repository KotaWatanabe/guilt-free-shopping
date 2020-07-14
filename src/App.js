import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';

import Auth from './Auth/Auth';

import HomepageLayout from './layouts/HomepageLayout';

import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart'
import './default.scss';

//Redux
import { connect } from 'react-redux';
import { setCurrentUser } from './actions/user';

export const App = props => {
  const { setCurrentUser, currentUser } = props

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
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

    return () => {
      authListener();
    }

  }, [])
    return (
        <div className="App" data-test="appComponent">
            <Switch>
              <Route exact path="/" render={() => (
                <HomepageLayout>
                  <Homepage />
                </HomepageLayout>
              )}/>
              <Route path="/registration" render={() => (
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
                  <Auth>
                    <HomepageLayout>
                      <Products />
                    </HomepageLayout>
                  </Auth>
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

const mapStateTopProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateTopProps, { setCurrentUser })(App);
