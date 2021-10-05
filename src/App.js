import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./components/shop/shop.component";
import SignInPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
