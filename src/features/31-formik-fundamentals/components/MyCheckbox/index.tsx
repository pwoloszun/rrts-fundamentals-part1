import React from 'react';
import { Field } from 'formik';

const renderField = (props: any, { field, form }: any) => {
  // console.log('field', field);
  // console.log('form', form);
  return (
    <label>
      <input
        type="checkbox"
        {...props}
        checked={field.value.includes(props.value)}
        onChange={() => {
          if (field.value.includes(props.value)) {
            const nextValue = field.value.filter((value: any) => value !== props.value);
            form.setFieldValue(field.name, nextValue);
          } else {
            const nextValue = field.value.concat(props.value);
            form.setFieldValue(field.name, nextValue);
          }
        }}
      />
      {props.value}
    </label>
  );
};

export default function MyCheckbox(props: any) {
  return (
    <Field name={props.name}
      render={({ field, form }: any) => renderField(props, { field, form })}
    />
  );
}
