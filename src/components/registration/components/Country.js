import React from 'react';
import Select from 'react-select';

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
                                        <Select
                                            options={getCountries().map((item) => ({
                                                value: item,
                                                label: item,
                                            }))}
                                            name="country"
                                            onChange={({ value, label }) => {
                                                setFieldValue('country', value);
                                                setFieldValue('city', getCities(value));
                                            }}
                                            defaultValue={{ value: values.country, label: values.country }}
                                            getOptionValue={() => ({
                                                value: values.country,
                                                label: values.country,
                                            })}
                                        />
                                    </label>

                                    <div>
                                        <label>
                                            city
                                            <Select
                                                classNamePrefix="test"
                                                placeholder="please enter city"
                                                onChange={({ value, label }) => {
                                                    setFieldValue('city', value);
                                                }}
                                                className="select"
                                                options={getCities(values.country).map((item) => ({
                                                    value: item,
                                                    label: item,
                                                }))}
                                            />
                                        </label>
                                        {/*<label>*/}
                                        {/*    <Select*/}
                                        {/*        options={getCities(values.country).map((item) => ({*/}
                                        {/*            value: item,*/}
                                        {/*            label: item,*/}
                                        {/*        }))}*/}
                                        {/*        name="city"*/}
                                        {/*        onChange={({ value, label }) => {*/}
                                        {/*            setFieldValue('city', value);*/}
                                        {/*        }}*/}
                                        {/*        defaultValue={{ value: values.city, label: values.city }}*/}
                                        {/*        getOptionValue={() => ({*/}
                                        {/*            value: values.city,*/}
                                        {/*            label: values.city,*/}
                                        {/*        })}*/}
                                        {/*    />*/}
                                        {/*</label>*/}
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

export default connect(null, actions)(CountryInfo);
