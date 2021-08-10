import {Field, reduxForm, reset} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength15 = maxLengthCreator(15)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       placeholder='Enter your message'
                       name='newMessageBody'
                       validate={[required, maxLength15]}/>
            </div>
            <div>
                <button>Отправить сообщение</button>
            </div>

        </form>
    )
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('AddMessageFormRedux'));

const AddMessageFormRedux = reduxForm({
    form: 'dialogs',
    onSubmitSuccess: afterSubmit
})(AddMessageForm);

export default AddMessageFormRedux;