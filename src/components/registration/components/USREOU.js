import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import Buttons from "./Buttons";
import { getCountries, getCities } from 'countries-cities';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    }
});

const CountryInfo = ({ setActiveStepNext }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <Formik
                    initialValues={{
                        country: getCountries()[21], // Belgium
                        city: getCities(getCountries()[21])[0],
                    }}
                    // validationSchema={RegisterSchema(t)}
                    onSubmit={(values, actions) => {
                        debugger
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
                                    <label>
                                        country
                                       <input type=""/>
                                    </label>
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

export default connect(null, actions)(CountryInfo);
