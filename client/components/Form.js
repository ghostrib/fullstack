import React from 'react';
import style from '../styles/Form.css';

const Form = (props) => {
    return (
        <div>
            <form>
                <input
                    // using css-modules
                    className={style.textInput}
                    name='text'
                    id='text-input'
                    type='text'
                    placeholder='type here'
                    onChange={props.changed}
                />
                <input
                    // using css-modules
                    className={style.submitButton}
                    type='submit'
                    onClick={props.clicked}
                />
            </form>
        </div>
    )
};

export default Form;