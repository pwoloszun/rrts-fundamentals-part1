import React from 'react';
import { Field } from 'formik';

interface Props {
  name: string;
  value: any[];
  options: string[];
  form: any;
}

export default function MyMultiSelect(props: Props) {
  const { name, options, form } = props;
  const { setFieldValue } = form;

  return (
    <Field component="select"
      name="names"
      onChange={(evt: any) => {
        setFieldValue(
          name,
          [...evt.target.selectedOptions].map((opt) => opt.value)
        );
      }
      }
      multiple={true}
    >
      {
        options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))
      }
    </Field>
  );
}
