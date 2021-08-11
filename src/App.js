import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer.jsx";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {lazy} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./components/HOC/withSuspense";

const DialogsContainer = lazy( () => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = lazy( () => import('./components/Profile/ProfileContainer'))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="../profile/:userId?"
                           render={withSuspense(ProfileContainer)}/>
                    <Route path="/dialogs"
                           render={withSuspense(DialogsContainer)}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/login"
                           render={() => <Login/>}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp;
