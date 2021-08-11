import {Field, reduxForm} from "redux-form";
import {CreateField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import s from "../common/FormsControls/FormsControls.module.css"

const maxLength35 = maxLengthCreator(35);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {CreateField("Email", "email", "", Input, [required, maxLength35])}
            </div>
            <div>
                {CreateField("Password", "password", "password", Input, [required, maxLength35])}
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component="input"/> remember me
            </div>
            {props.captchaUrl &&
                <img src={props.captchaUrl} />
            }
            {props.captchaUrl &&
                CreateField("Captcha", "captcha", "", Input, [required, maxLength35])
            }
            <div className={s.formSummaryError}>
                {props.error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm;