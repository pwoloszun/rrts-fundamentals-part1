import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';

import fakeApi from '../../../../api/fake-api';
import { DisplayFormikState } from '../../../../components/DisplayFormikState';

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validateForm = function (values: any) {
  const { email, password } = values;
  const errors = {} as any;
  if (!email) {
    errors.email = 'Email required';
  } else if (!emailRegExp.test(email)) {
    errors.email = 'Invalid email address';
  }

  if (!password) {
    errors.password = 'Password required';
  } else if (password.length < 3) {
    errors.password = 'Password is too short(min. 3 chars)';
  }
  return errors;
};

const handleSubmit = function (values: any, actions: any) {
  const {
    setSubmitting,
    // setErrors,
    // setStatus
  } = actions;
  console.log('form values', JSON.stringify(values, null, 2));

  fakeApi.successfulRequest('/my-form/validate', { params: values })
    .then(function (response) {
      setSubmitting(false);
      console.log('form is VALID', response);
    });

  // fakeApi.failedRequest('/my-form/validate', { params: values })
  //   .catch(function (response) {
  //     console.log('INVALID form', response);
  //     setSubmitting(false);
  //     setErrors({
  //       email: 'Email already activated'
  //     });
  //     setStatus({ myMsg: 'Jakis komunikat' });
  //   });
};

const names = ['Bob', 'Ed', 'Kate'];

const renderForm = function (params: any) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting,
    status,
    isValid
  } = params;

  const options = names.map(function (name, index) {
    return (
      <option key={index} value={name}>{name}</option>
    );
  });

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <div>
        <input type="text"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && <div>{errors.email}</div>}
      </div>

      <div>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
      </div>

      <div>
        <select name='friend'
          value={values.friend}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="">Select friend</option>
          {options}
        </select>
      </div>

      {
        status && status.myMsg && <h3>Status: {status.myMsg}</h3>
      }

      <button type="submit" disabled={!isValid || isSubmitting}>
        Submit
      </button>

      <DisplayFormikState {...params} />
    </form>
  )
};

const BasicFormExample = function () {
  const initialValues = {
    email: '',
    password: '',
    friend: names[1]
  };

  return (
    <div>
      <h4>BasicFormExample</h4>
      <Formik initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
        render={renderForm}
      />
    </div>
  );
};

export default BasicFormExample;
