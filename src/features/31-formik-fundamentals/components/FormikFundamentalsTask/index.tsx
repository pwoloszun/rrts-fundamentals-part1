/* eslint @typescript-eslint/no-unused-vars: "off" */

import React, { Component } from 'react';
import { Formik, Field } from 'formik';
// import { Form as BootstrapForm } from 'react-bootstrap';

import styles from './styles.module.css';
import { DisplayFormikState } from '../../../../components/DisplayFormikState';


const availableDetails = [
  { value: 'none', label: 'No details' },
  { value: 'basic', label: 'Basic details' },
  { value: 'advanced', label: 'Advanced details' },
];

const basicOptions = [
  'basic 1st', 'basic 2nd', 'basic 3rd'
];

const advancedOptions = [
  'adv 1st', 'adv 2nd', 'adv 3rd', 'adv 4th', 'adv 5th'
];


const initialValues = {
  username: '',
  discountPct: 7,
  password: '',
  selectedOption: '',
  selectedOptionDescription: ''
};

const handleSubmit = (values: any, actions: any) => {
  const { setSubmitting } = actions;
};

const validateForm = (values: any) => {
  const errors = {};
  return errors;
};

const renderForm = (params: any) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = params;

  return (
    <form onSubmit={handleSubmit} className={styles.myForm}>
      <h5>My form</h5>

      <Field type="text"
        name="firstName"
        placeholder="First name" />

      <Field type="password"
        name="password"
        placeholder="Password" />

      <Field type="date"
        name="dateOfBirth"
        placeholder="Date of birth" />

      <Field type="number"
        name="experienceYears"
        placeholder="Experience in years" />

      <hr />

      <p>select</p>
      <p>checkbox</p>
      <p>radio</p>
      <p>textfield</p>


      <input
        type="email"
        name="email"
        placeholder="Email address"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />

      <DisplayFormikState {...params} />

    </form>
  );
};


export default class FormikFundamentalsTask extends Component {
  render() {
    const initialValues = {};

    return (
      <Formik initialValues={initialValues}
        onSubmit={handleSubmit}
        render={renderForm}
        validate={validateForm}
      />
    );
  }
}
