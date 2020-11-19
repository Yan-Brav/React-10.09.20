import React, { useEffect, useState } from 'react'
import {Formik, Form, Field} from 'formik';
import {useHistory} from 'react-router-dom';
import propTypes from 'prop-types';
import config from './config';

import FormInput from '../common/FormInput';
import { TextField } from '@material-ui/core';

function UserDetails({ id }) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        username: ''
    });

    const history = useHistory();

    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         email: '',
    //         username: ''
    //     },
    //     validate: (values) => {
    //         const errors = {};

    //         if (!values.name) {
    //             errors.name = 'Value is required'
    //         }

    //         if (values.name.length > 10){
    //             errors.name = 'Value is too long'
    //         }

    //         return errors;
    //     },
    //     onSubmit: (values) => {
    //         console.log('submiting values', values);
    //     }
    // });

    // console.log(formik);

    useEffect(() => {
        if (id && id !== 'new'){
            fetch(`${config.usersUrl}/${id}`)
                .then(res => res.json())
                .then(setUser);
        }
    }, [id])

    // function onChange(e){
    //     setUser({
    //         ...user,
    //         [e.target.name]: e.target.value
    //     });
    // }

    function closeForm(){
        history.go(-1);
    }

    function onSubmit(e){
        e.preventDefault();
        if (user.id){
            updateUser();
        } else {
            createUser();
        }
    }

    function updateUser(){
        fetch(`${config.usersUrl}/${id}`,{
            method: 'PUT',
            body: JSON.stringify(user)
        })
            .then(closeForm);
    }
    
    function createUser(){
        fetch(`${config.usersUrl}`,{
            method: 'POST',
            body: JSON.stringify(user)
        })
            .then(closeForm);
    }

    return (
        <>
        <div className="row">
            <Formik initialValues={{
                name: '',
                email: '',
                username: ''
            }}
            validate={(values)=> {
                const errors = {};

                        if (!values.name) {
                            errors.name = 'Value is required'
                        }
            
                        if (values.name.length > 10){
                            errors.name = 'Value is too long'
                        }
            
                        return errors;
            }}
            onSubmit={(values, ) => {
                        console.log('submiting values', values);
                    }}
            >
                {({errors, touched}) => (
                    // console.log(formik) ||
                    <Form>
                          <div className="row">

                            <Field type="text" name="name" id="name" as={TextField}/>
                            <div>{errors.name && touched.name? errors.name :''} </div>
                        </div>
                        <div className="row">
                            <a className="waves-effect waves-light btn-large" onClick={closeForm}>Cancel</a>   
                            &nbsp;<button className="btn-large waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </Form>

                )}
            </Formik>
            
        </div>
        <div className="row">
            {/* <pre>
                {JSON.stringify(formik.values,null, 2)}
            </pre>
            <pre>
                {JSON.stringify(formik.touched,null, 2)}
            </pre> */}
        </div>
        </>
    )
}

UserDetails.propTypes = {
    id: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired
}


export default UserDetails
