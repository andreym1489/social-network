import React from "react";
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData);
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>;

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={props.captchaUrl}
                            onSubmit={onSubmit}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);;