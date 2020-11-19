import React from 'react'
import {Field, Form, Formik} from 'formik'
import { useHistory } from 'react-router-dom'

function Modal({sticker, onSave}) {
    const history = useHistory();

    function close(){
        history.push('/');
    }

    function onSubmit(values){
        onSave(values);
        close();
    }

    function validate(values){
        const errors = {};

        if (!values.title) {
            errors.title = "This field is required"
        }

        if (values.description.length > 255) {
            errors.title = "This field is too long"
        }
    }


    return (
        <>
        <Formik 
            initialValues={sticker}
            onSubmit={onSubmit}
            validate={validate}
            >
            {({errors, dirty, isValid}) => (
                <>
                    <div style={backGroundStyles} onClick={close}></div>
                    <div style={modalStyles}>

                        <Form autoComplete="off">
                            <div style={headerStyles}>Stiker Modal</div>
                            <div style={bodyStyles}>
                                <label htmlFor="title">Title: </label><br />
                                <Field as="input" name="title"/>
                                <br />
                                <br />
                                <label htmlFor="title">Desctption: </label><br />
                                <Field as="textarea" name="description"/>
                            </div>
                            <div style={footerStyles}>
                                <button type="submit" disabled={!dirty || !isValid}>Save</button>
                                <button type="reset" onClick={close}>Cancel</button>
                            </div>
                        </Form>
                    </div>
                </>
            )}
        </Formik>
        </>
    )
}

const backGroundStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.7,
}

const modalStyles = {
    position: 'fixed',
    top: 200,
    left: 'calc(50% - 100px)',
    width: 200,
    backgroundColor: 'white',
    padding: '10px 20px'
}

const headerStyles = {
    fontSize: 24,
    marginBottom: 5,
    borderBottom: '1px solid grey'
}

const bodyStyles = {
    fontSize: 20,
}

const footerStyles = {
    fontSize: 20,
    marginTop: 5,
    borderTop: '1px solid grey',
    textAlign: 'center'
}

export default Modal
