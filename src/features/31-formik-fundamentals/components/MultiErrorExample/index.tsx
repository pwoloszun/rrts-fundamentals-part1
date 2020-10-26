import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const atLeastTwoConsecutiveLettersRE = /^\w{2,}/;
const atLeastTwoNumbersRE = /.*[0-9].*[0-9].*/;

const validate = function (values: any) {
  const { password } = values;
  const passwdErrors = [];
  const errors = {} as any;

  if (!password) {
    passwdErrors.push('Password required');
  }
  if (password.length < 3) {
    passwdErrors.push('Password is too short(min. 3 chars)');
  }
  if (!atLeastTwoConsecutiveLettersRE.test(password)) {
    passwdErrors.push('Password must contain at least 2 consecutive LETTERS');
  }
  if (!atLeastTwoNumbersRE.test(password)) {
    passwdErrors.push('Password must contain at least 2 NUMBERS');
  }

  if (passwdErrors.length > 0) {
    errors.password = (
      <ul>
        {
          passwdErrors.map((err, i) => <li key={i}>{err}</li>)
        }
      </ul>
    );
  }
  return errors;
};

const onSubmit = function (values: any, { setSubmitting }: any) {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const formContent = function ({ isSubmitting }: any) {
  return (
    <Form>
      <div>
        <Field type="text" name="password" />
        <ErrorMessage name="password" component="div" />
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  )
};

const MultiErrorExample = function () {
  const initialValues = { password: '' };

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {formContent}
      </Formik>
    </div>
  );
};

export default MultiErrorExample;
