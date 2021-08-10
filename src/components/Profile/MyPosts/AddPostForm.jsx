import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       placeholder='Enter text'
                       name='newPostBody'
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Добавить пост</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: 'posts'
})(AddPostForm)

export default AddPostFormRedux;