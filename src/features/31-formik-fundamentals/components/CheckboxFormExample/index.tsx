import React from 'react';
import { Formik, Form, Field } from 'formik';

import styles from './styles.module.css';

import { DisplayFormikState } from '../../../../components/DisplayFormikState';
import MyCheckbox from '../MyCheckbox';
import MyMultiSelect from '../MyMultiSelect';

const validateForm = function (values: any) {
  return {};
};

const handleSubmit = function (values: any, actions: any) {
  console.log('form values', JSON.stringify(values, null, 2));
};

const categories = ['Music', 'Video', 'Games', 'Painting'];
const heroes = ['Batman', 'Superman', 'Spider-Man', 'Kokosz'];
const names = ['Bob', 'Ed', 'Kate', 'Ben'];

const renderForm = function (params: any) {
  const { values } = params;

  return (
    <Form>
      <div className={styles.myPanel}>
        <h5>Choose categories</h5>
        {
          categories.map((category, index) => {
            return (
              <div key={index}>
                <MyCheckbox name='selectedCategories'
                  value={category}
                />
              </div>
            );
          })
        }
      </div>

      <div className={styles.myPanel}>
        {
          heroes.map((hero) => {
            return (
              <div key={hero}>
                <label>
                  <Field type="radio"
                    name="selectedHero"
                    value={hero}
                    checked={values.selectedHero === hero}
                  />
                  {hero}
                </label>
              </div>
            );
          })
        }
      </div>

      <div className={styles.myPanel}>
        <MyMultiSelect name="selectedNames"
          value={values.selectedNames}
          options={names}
          form={params}
        />
      </div>

      <button type="submit">
        Submit
      </button>

      <DisplayFormikState {...params} />
    </Form>
  )
};

const CheckboxFormExample = function () {
  const initialValues = {
    selectedCategories: [
      categories[1],
      categories[2]
    ],
    selectedHero: heroes[1]

  };

  return (
    <div>
      <h4>CheckboxFormExample</h4>
      <Formik initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
        render={renderForm}
      />
    </div>
  );
};

export default CheckboxFormExample;
