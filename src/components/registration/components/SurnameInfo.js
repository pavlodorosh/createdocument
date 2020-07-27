import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import Buttons from "./Buttons";
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    }
});

const NameInfo = ({ setActiveStepNext }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <Formik
                    initialValues={{
                        firstName: '',
                        surname: '',
                        lastName: ''
                    }}
                    // validationSchema={RegisterSchema(t)}
                    onSubmit={(values, actions) => {

                        setActiveStepNext();
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          setFieldValue,
                      }) => {
                        return (
                            <Form onSubmit={handleSubmit} >
                                <h1>
                                 please fill this field
                                </h1>
                                <div>
                                    <div>
                                        <label>
                                            firstName
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="John"
                                                value={values.firstName}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                            {errors.firstName && touched.firstName ? (
                                                <div> errors </div>
                                            ) : null}
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            surname
                                            <input
                                                type="text"
                                                name="surname"
                                                placeholder="John"
                                                value={values.surname}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                            {errors.surname && touched.surname ? (
                                                <div>errors {errors.surname }</div>
                                            ) : null}

                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            lastName
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="John"
                                                value={values.lastName}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                            {errors.lastName && touched.lastName ? (
                                                <div> errors </div>
                                            ) : null}

                                        </label>
                                    </div>
                                    <Buttons />
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default connect(null, actions)(NameInfo);
