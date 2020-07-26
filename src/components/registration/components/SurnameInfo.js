import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import Buttons from "./Buttons";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    }
});

const Name = ({ i }) => {
    const classes = useStyles();
debugger
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
                    debugger
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
                                 hhg
                                </h1>
                                <div>
                                    <div>
                                        <label>
                                            personalInfo.general.firstName
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
                                                <div> errors </div>
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
                                </div>
                                <p>
                                    sur name
                                </p>
                                <button type="submit">gf</button>

                                <Buttons />
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default Name;
